---
layout: null
---

const index = lunr(function () {
    this.field('title')
    this.field('path')
    this.field('content')
    this.ref('id')
});

var store = [];

let searchData = $.getJSON( './assets/js/search-data.json');

searchData.then(function( data ) {
    $.each( data, function( key, val ) {
        index.add({
            'id': key,
            'title': val.title,
            'path':  val.path,
            'excerpt': val.excerpt
        });

        store.push({
            'title': val.title,
            'path':  val.path,
            'excerpt': val.excerpt
        });
    });
});



$(document).ready(function() {
  $('<div id="results">')
    .prependTo('.main');

  $('input#search-term').click(function () {
    $(this).val('');
  });

  $('input#search-term').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    
    for (var item in result) {
      var ref = result[item].id;

      if (store[ref].title != null) {
        let link = '<a href="' + store[ref].path + '" class="post-title">' + store[ref].title + '</a>';
        let excerpt = '<p>' + store[ref].excerpt + '</p>';
        var searchitem = '<div class="result"><div class="result-body">' + link + excerpt + '</div></div>';
        resultdiv.append(searchitem);
      }
    }
  });
});
