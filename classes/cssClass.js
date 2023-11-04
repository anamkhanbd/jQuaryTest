$(document).ready(function() {

    //js jQuery ON / OFF mathod 

    $('#neo').on({
        'click': function() {
            $(this).css({
                'color': ' black'
            });
        },
        'mouseout': function() {
            $(this).css({
                'background-color': 'black',
                'color': 'white'
            });
        },
        'mouseover': function() {
            $(this).css({
                'background-color': 'tan ',
                'color': ' black'
            });
        }
    });


    //appdend and prepend
    $('#appent').click(function() {
        $('ol').append("<li> New name </li>");
    });
    $('#preepent').click(function() {
        $('ol').prepend("<li> New name </li>");
    });



});