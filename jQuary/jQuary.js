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
    $('.secound').css({
        'color': 'crimson',
        'padding': '1px',
        'line-height': 'normal',
        'text-shadow': 'black',
        'font-family': 'sans-serif',
        'font-weight': 'lighter',
        'opacity': '70%',
        'transition': '0.5s all'
    });

    $('.secound:hover').css({
        'opacity': '100%',
        'color': 'brown'
    });
});