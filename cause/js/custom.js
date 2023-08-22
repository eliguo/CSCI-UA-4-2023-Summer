// Boilerplate
$(document).ready(function(){

    // Fade in the body on page load
    $("body").fadeIn(1000);

    // Track if lightbox was closed by the user
    var lightboxClosedByUser = false;

    // Close lightbox action
    $("#lightbox_closeBtn").click(function(){
        $("#lightbox").css("display","none");
        lightboxClosedByUser = true;
    });

    // Display lightbox on scroll past 300 pixels
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 300 && !lightboxClosedByUser){
            $("#lightbox").css("display","flex");
        }
    });

    // Animate text within lightbox
    $('#lightbox_text h5').css({
        'animation': 'swing 0.5s infinite',
        'transform-origin': 'center bottom'
    });

    // Track if cookie notice was closed by the user
    var cookieClosedByUser = false;

    // Close cookie notice action
    $("#cookie_closeBtn").click(function(){
        $("#cookie").hide();
        cookieClosedByUser = true;
    });

    // Update message after clicking donate button
    $("#donateBtn").click(function(){
        $("#donatePrompts").html("<p><small>Thank you for your donation. Your support is appreciated.</small></p>");
    })
});
