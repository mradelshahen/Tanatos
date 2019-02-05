/*global $, alert, console*/
var myNav = document.getElementById('nav');
window.addEventListener('scroll', function () {

    if (window.scrollY >= 150) {
        myNav.classList.add("navbar-fixed-top");
        //myNav.classList.remove("nav");
    }
    else if (window.scrollY < 150) {
        myNav.classList.remove("navbar-fixed-top");
        //myNav.classList.add("nav");
    }
});
$(function () {
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorborder: '1px solid #f7600e'
    });

    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    })
});

$('.clients i').click(function () {
    if ($(this).hasClass('fa-chevron-right')) {
        $('.client .active').fadeOut(100, function () {
            $(this).removeClass('active');
            var id = parseInt($(this).attr('id'));
            $('#' + (id + 1) % 3).addClass('active').fadeIn();
            // next('.box').addClass('active').fadeIn();
        });
    }
    else {
        $('.client .active').fadeOut(100, function () {
            $(this).removeClass('active');
            var id = parseInt($(this).attr('id'));
            $('#' + ((id - 1 + 3) % 3)).addClass('active').fadeIn();
        });
    }
});
var h = document.getElementById("h1")
var lang = "ar";
$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        translate(lang);
        Change();
        if (lang === 'en') {
            lang = "ar";
        } else {
            lang = "en"
        }
        // lang = lang ==="en"? "ar": "en";
    });
});
