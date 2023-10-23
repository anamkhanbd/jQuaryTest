$(document).ready(function() {
    var a = $("body").html(); // Corrected the selector for the body element
    console.log(a);

    $('*').css('background', 'white');
    $('h3').css('color', 'crimson');
    $('p:first').css({
        'text-align': ' center',
        'color': 'crimson',
        'font-size': 'large',
        'font-family': 'sans-serif'
    });
});