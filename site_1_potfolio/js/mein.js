$(document).ready(function() {
    /*плавная прокрутка меню.*/ 
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu__mabile .menu').toggle(500); /*Для того чтобы сворачивалось меню*/
        $('.menu__burger').toggleClass('close');/*Для того чтобы сворачивался бургер*/
        return false;
    });
    /*Мобильное меню */
    $('.menu__mabile .menu__burger').click(function(){
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });
});