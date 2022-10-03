jQuery(function() {
    // Initialize lunr with the fields to be searched, plus the boost.
    window.idx = lunr(function () {
        this.field('id');
        this.field('title');
        this.field('content', { boost: 10 });
        this.field('categories');
    });

    // Get the generated search_data.json file so lunr.js can search it locally.
    window.data = $.getJSON('/assets/js/search-data.json');

    // Wait for the data to load and add it to lunr
    window.data.then(function(loaded_data){
        $.each(loaded_data, function(index, value){
            window.idx.add(
                $.extend({ "id": index }, value)
            );
        });
    });

    // Event when the form is submitted
    $('input#search-term').on('keyup', function (event) {
        event.preventDefault();
        var query = $("#search-term").val(); // Get the value for the text field
        var results = window.idx.search(query); // Get lunr to perform a search
        display_search_results(results); // Hand the results off to be displayed
    });

    function display_search_results(results) {
        var $search_results = $('#results');

        // Wait for data to load
        window.data.then(function(loaded_data) {
            if (results.length) {
                $search_results.empty(); // Clear any old results

                results.forEach(function(result) {
                    var item = loaded_data[result.ref];

                    if (item.title != null) {
                        var appendString = '<a href="' + item.url + '">' + item.title + '</a><br />';
                        $search_results.append(appendString);
                    }
                });
            } else {
                $search_results.html('<li>No search results yet...</li>');
            }
        });
    }
});
