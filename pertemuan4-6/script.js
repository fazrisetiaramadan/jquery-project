$(document).ready(function() {
    // Efek hide
    $('#hide').click(function() {
        $('#kotak').hide(1000);
    });

    // Efek show
    $('#show').click(function() {
        $('#kotak').show(2000);
    });

    // Efek fadeOut
    $('#fadeOut').click(function() {
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(3000);
    });

    // Efek fadeIn
    $('#fadeIn').click(function() {
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });

    // Efek fadeToggle
    $('#fadeToggle').click(function() {
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    // Efek fadeTo
    $('#fadeTo').click(function() {
        $('.box1').fadeTo("slow", 0.2);
        $('.box2').fadeTo("slow", 0.3);
        $('.box3').fadeTo("slow", 0.4);
    });

    //efek slideUp
    $('#slideUp').click(function() {
        $('#slide').slideUp("slow");
    });

    //efek slideDown
    $('#slideDown').click(function(){
        $('#slide').slideDown(1000);
    });

    // efek slideToggle
    $('#slideToggle').click(function(){
        $('#slide').slideToggle(2000);
    });

    //efefk animate
    $('#kiri').click(function() {
        $('#animate-box').animate({'left': "-=50px"}, "slow");
    });
    
    $('#kanan').click(function() {
        $('#animate-box').animate({'left': "+=150px"}, "slow");
    });

     //efek clearQueue
     $('#start').click(function() {
        $('#clearQueue-Box').animate({left: '+=500px'}, 5000);
    });

    $('#stop').click(function() {
        $('#clearQueue-Box').clearQueue().stop();
    });

    $('#stop').click(function() {
        $('#clearQueue-Box').clearQueue().stop();
    });

    $('#delay').click(function() {
        $('#kotak-satu').slideUp(4000).delay(6000).fadeIn(4000);
    $('#kotak-dua').slideUp(4000).fadeIn(4000);
    });
});
