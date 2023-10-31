$(document).ready(function() {
    var a = $("body").html(); // Corrected the selector for the body element
    console.log(a);

    $('*').css({
        'background': 'white',
        'user-select': 'none',
    });
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

    // mouse events here; 
    /* 01.  click 
        02  dblclick
        03  mouseup 
        04 mousedown 
        05 mousemove 
        06  mouseenter 
        07  mouseleave 
        08  mouseover 
        09  mouseout
        10  contextmenu
       */

    $('#head1').click(function() {
        $('#head1').css({
            'background-color': 'red'
        });
    });

    $('.text_p').dblclick(function() {
        $('.text_p').css({
            'transition': '0.5s all',
            'color': 'black'
        });
    });

    // $('.paragraph_p').click(function() {
    //     $('.paragraph_p').add('.minimo');
    // });

    $('.text_2').contextmenu(function() {
        $('.text_2').css({
            'background-color': 'red',
        });
    });

    $('text_3').mouseup(function() {
        $('text_3').css('font-size', '40px');
    });

    //click to chnage value one dive 
    $('.red').click(function(e) {
        $('#colorName').css('background-color', 'red');
    });

    $('.yello').click(function(e) {
        $('#colorName').css('background-color', 'yellow');
    });

    $('.green').click(function(e) {
        $('#colorName').css('background-color', 'green');
    });

    $('.dark').click(function(e) {
        $('#colorName').css('background-color', 'black');
    });



});