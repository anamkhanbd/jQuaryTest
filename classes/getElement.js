$(document).ready(function() {
    //GetElement by jQuery:
    /*__________________
    
 
    01. html()
    02. text()
    03. val()
    04. attr()

____________________*/

    /*::::::::::::::::::::::::::::::::::
    This html() is get Target HTML tags and 
    Print This Easily to Any Where.
    ::::::::::::::::::::::::::::::::::::::*/
    var a = $('.box').html();
    console.log(a);
    $('#p_set').html(a);
    $('#text_set').text(a);

    //val() selector working only form value get



});