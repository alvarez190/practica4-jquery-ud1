$(document).ready(function() {
    var spans = $('.footnote');
    var link = $('<a href=#f-title>Back to the top</a>');

    // Punto uno 
    $('p').after(link);

    // Punto dos 
    $('#footer').before(spans);

    // Punto tres
    var list = $('<ol></ol>');
    $('#footer').before(list);

    for (let i = 0; i < spans.length; i++) {
        var li = $('<li></li>').prepend(spans[i]);
        $('ol').prepend(li);
    }
});