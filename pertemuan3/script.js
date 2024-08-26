$(document).ready(function() {
    //EVent Click
    $('#click').click(function() {
        alert('saya sedang belajar jquery!');
    });

    // Event dblclick
    $('#dblclick').dblclick(function() {
        $(this).css('background-color', 'red');
    });

    // Event MouseLeave
    $('.mouse').mouseleave(function(){
        $(this).css('background-color', 'skyblue');
    });

    // Event MouseEnter
    $('.mouse').mouseenter(function(){
        $(this).css('background-color', 'lime');
    });

    //Event Keydown
    $('#keydown').keydown(function() {
        $('#pesan_keydown').text($(this).val());
    });

    //Event Keyup
    $('#keyup').keyup(function() {
        $('#pesan_keyup').text($(this).val());
    });

});
