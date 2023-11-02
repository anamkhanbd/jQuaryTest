$(document).ready(function() {
    /*------------------------------
        01. text()
        02.html()
        03. attr()
        04. val()
    --------------------------------*/
    $('#submit ').click(function(e) {
        e.preventDefault();
        $('#box h1').text('Hello World');

        $('#box p').attr('class', 'dark');
    });


    // html an text is one deffarent html tag work in html and html tag is not work is text.








});