---

---

var pics = [];

{% for image in site.data.galleries["faves"].images %}
    {% capture src %}/{{ site.data.galleries["faves"].imageFolder }}{{ image.img }}{% endcapture %}

    pics.push({
        'src': {{ src | jsonify }}
    });
{% endfor %}

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}


$( document ).ready(function() {
    $('.home-page .image button').click(function() {
        $('#overlay').fadeOut();

        var rnd = getRndInteger(1, pics.length)
        $('.home-page .image img').attr("src", pics[rnd].src );
    });
});
