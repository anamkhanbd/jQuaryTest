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



    // starding js oparetion [image creting pages ]

    //Color v-1.0.1
    $('.red').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'red');
    });
    $('.black').click(function(e) {
        e.preventDefault();
        $('.p_p_box').css('color', 'black');
    });
    $('.green').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'green');
    });
    $('.crimson').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'crimson');
    });
    $('.yellow').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'yellow');
    });
    $('.gray').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'gray');
    });
    $('.cayan').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'cayan');
    });
    $('.white').click(function(e) {
        e.preventDefault();
        $('.p_box').css('color', 'white');
    });

    //Font Size v-1.0.1

    $('xxsmall').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '10px');
    });
    $('xsmall').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '20px');
    });
    $('ssmall').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '30px');
    });
    $('media,').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '40px');
    });
    $('large').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '50px');
    });
    $('xlarge').click(function(e) {
        e.preventDefault();
        $('.p_box').css('font-size', '60px');
    });
    $('xxlarge').click(function(e) {
        e.preventDefault();
        $('.p_box').css({ 'font-size': '100px' });
    });

    /* papi dropDown */
    $('#disable').click(function(e) {
        e.preventDefault();
        $('.papi').css('opacity', '100%');
    });













});