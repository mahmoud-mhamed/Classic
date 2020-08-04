$(function () {
    new WOW().init();

    $(window).scrollTop(0);

    /*              nice scroll             */
    $("body").niceScroll({
        cursorcolor: "#1ABC9C",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorfixedheight: 60,
    });

    /*              smoth scroll when click in links in header          */
    $('header #navHeader ul li.nav-item a').filter('[data-value]').click(function () {
        $('html').animate({
        scrollTop:$($(this).data('value')).offset().top
        },400);
        new WOW().init();
    });

    /*              toggle div in testimonials     */
    setInterval(function () {
        $('.testimonials .container>div').each(function () {
            if ($(this).css('display')=='none'){
                $(this).fadeIn(800);
            } else {
                $(this).css('display','none');
            }
        });
    },5000);


    /*          start projects  */
    mixitup('.projects');

    $('.projects .row .overlay').width($('.projects .row img').width());
    $('.projects .row .overlay').height($('.projects .row img').height());
    $(window).resize(function () {
        $('.projects .row .overlay').width($('.projects .row img').width());
        $('.projects .row .overlay').height($('.projects .row img').height());
    });
    /*end projects*/

    /*start go to top*/
    $('.goToTop').click(function () {
        $(window).scrollTop(0);
        $(this).slideUp();
        new WOW().init();
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > ($('header').height())){
            $('.goToTop').slideDown();
        }else {
            $('.goToTop').slideUp();
        }
    }) ;

});