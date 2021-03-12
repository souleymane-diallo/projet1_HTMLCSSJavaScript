// menu hamburger
$(document).ready(function() {
    $(".menu-toggle-btn").click(function() {
        $(this).toggleClass("fa-times");
        $(".nav-bar").toggleClass("active");
    })
});
// slider des images

$(function() {
    $('.slider_start').slick({
        prevArrow: '.slider_start--prev',
        nextArrow: '.slider_start--next',
    });
    $('.slider_blog').slick({
        prevArrow: '.slider_blog--prev',
        nextArrow: '.slider_blog--next',
    });
});