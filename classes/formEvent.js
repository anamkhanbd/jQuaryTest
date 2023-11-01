$(document).ready(function() {
    //Form Event list 

    /*__________________________________

        01. focus
        02. blur
        03. change
        04. select
        05. submit
    ____________________________________*/
    $('#name,#number,#country').focus(function() {
        $(this).css({
            'background-color': 'red'
        });
    });

    $('#number,#number,#country').blur(function(e) {
        $(this).css({
            'background-color': ''
        });
    });

    $('#country').change(function() {
        var a = $(this).val();
        $('.txt').html(a);
    });








});