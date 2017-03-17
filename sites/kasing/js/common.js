$(function() {


    // Garmoha
    $('p.v_title').click(function() {
        if (!$(this).hasClass('active')) { //если "кликнутый" пункт неактивный:
            $('ul.questions li > p').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
            $(".plus-minus-toggle").addClass("collapsed");
            $(this).addClass('active'); //активируем "кликнутый" пункт
            $(this).next('div').slideDown(); //раскрываем следующий за ним блок с описанием
        } else { //иначе:
            $(this).removeClass('active').next('div').slideUp(); //скрываем данный пункт
        }
    });



    var windWidth = $(window).width();
    // if (windWidth < 992 || windWidth == 992) {
    //     $(".new_casting").css("height", "inherit");
    // } else if (windWidth > 992) {
    //     $(".new_casting").css("height", "700");
    // };
    if (windWidth < 768 || windWidth == 768) {
        $(".banner_proprobu").attr("style", "background-image: url(../img/proprobu.jpg);");
    } else if (windWidth > 768) {
        $(".banner_proprobu").attr("style", "background-image: url(../img/proprobu_man.jpg);");
    };

    if (windWidth < 992 || windWidth == 992) {
        $(".banner_conkursi_wrap").attr("style", "background-image: url(../img/bg_conk_repeat.jpg);");
    } else if (windWidth > 992) {
        $(".banner_conkursi_wrap").attr("style", "background-image: url(../img/bg_conkursi.jpg);");
    };

    if (windWidth < 992 || windWidth == 992) {
        $('.prizovoi_fond .item:nth-child(2)').prepend($('.prizovoi_fond .item:nth-child(2) .text .img_wrap'));
    } else if (windWidth > 992) {
        $('.prizovoi_fond .item:nth-child(2) .text').prepend($('.prizovoi_fond .item:nth-child(2) .img_wrap'))
    };

    // $(".new_casting").css("height", "inherit");
    // Zamena backgrounda
    $(window).resize(function() {
        var windWidth = $(window).width();
        // if (windWidth < 992 || windWidth == 992) {
        //     $(".new_casting").css("height", "inherit");
        // } else if (windWidth > 992) {
        //     $(".new_casting").css("height", "700");
        // };
        
        if (windWidth < 992 || windWidth == 992) {
            $(".banner_conkursi_wrap").attr("style", "background-image: url(../img/bg_conk_repeat.jpg);");
        } else if (windWidth > 992) {
            $(".banner_conkursi_wrap").attr("style", "background-image: url(../img/bg_conkursi.jpg);");
        };
        if (windWidth < 768 || windWidth == 768) {
            $(".banner_proprobu").attr("style", "background-image: url(../img/proprobu.jpg);");
        } else if (windWidth > 768) {
            $(".banner_proprobu").attr("style", "background-image: url(../img/proprobu_man.jpg);");
        };
        if (windWidth < 992 || windWidth == 992) {
            $('.prizovoi_fond .item:nth-child(2)').prepend($('.prizovoi_fond .item:nth-child(2) .text .img_wrap'));
        } else if (windWidth > 992) {
            $('.prizovoi_fond .item:nth-child(2) .text').prepend($('.prizovoi_fond .item:nth-child(2) .img_wrap'))
        };

    });
    // _Zamena backgrounda



    $('.select').selectize({
        create: true,
        sortField: 'text'
    });
    // MMENU
    // hamburger
    // $('.hamburger-menu').on('click', function() {
    //     $('.bar').toggleClass('animate');
    // })
    $('.hamburger-menu').on('click', function(event) {
        event.preventDefault();
        // $(this).toggleClass('is-active');

        $(this).toggleClass('m_mnuscroll');
        $('.bar').toggleClass('animate');
        $('#mobile_mnu').toggleClass("active");
    });
    // _MMENU

    // Список 
    $('.select').on('click', '.placeholder', function() {
        var parent = $(this).closest('.select');
        if (!parent.hasClass('is-open')) {
            parent.addClass('is-open');
            $('.select.is-open').not(parent).removeClass('is-open');
        } else {
            parent.removeClass('is-open');
        }
    }).on('click', 'ul>li', function() {
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text($(this).text());
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));
    });
    // $("dsada").
    //     // masked
    // $('input[type=tel]').mask("( 999 ) 999 - 99 - 99");
    // // Мобильное меню
    // var $menu = $("#mobile_mnu").mmenu({
    //     "extensions": ["widescreen"],
    //     "extensions": ["pagedim-black"],
    //     // "close": true 
    // });
    // var $icon = $("#my-icon");
    // var API = $menu.data("mmenu");
    // // При клике открываем меню
    // $icon.on("click", function() {
    //     API.open();
    //     API.close();
    // });
    // // При открытие меню, дообавляется класс для кнопки
    // API.bind("opened", function() {
    //     $icon.addClass("is-active");
    // });
    // // При закрытие меню, Убирается класс для кнопки
    // API.bind("closed", function() {
    //     $icon.removeClass("is-active");
    // });
    // // Мобильное меню_

    $('.reviews_slide').slick({
        dots: true,
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slick_pobedit').slick({
        infinite: true,
        dots: false,
        arrows: true,
        // variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                centerMode: true,
                dots: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
            }
        }, {
            breakpoint: 676,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
            }
        }]
    });


    // // Табы
    // $(".wrapper .tab").click(function() {
    //     $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    //     $(".tab_item").hide().eq($(this).index()).fadeIn()
    // }).eq(0).addClass("active");
    // // Табы_

    // // Всплываха
    // $(".fancybox").fancybox({
    //     padding: 0,
    //     margin: 15,
    //     nextEffect: 'elastic',
    //     prevEffect: 'elastic',
    //     loop: true,
    //     autoSize: false,
    //     minWidth: '960',
    //     autoWidth: true,
    //     autoHeight: false,
    //     scrolling: 'yes',
    // });
    // // Всплываха_

    // // Fix Menu
    // var options = {
    //     offset: 120
    // }
    // var header = new Headhesive('.mnu_wrapp', options);
    // // Fix Menu_

    // // прокрутка страницы
    // $('a[href^="#1"]').click(function() {
    //     //Сохраняем значение атрибута href в переменной:
    //     var target = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, 700); // speed of scrolling
    //     return false;
    // });
    // // прокрутка страницы_

    // // Дозагрузка
    // comments_size = $(".zapis").size();
    // x = 3;
    // $('.zapis:lt(' + x + ')').show();
    // $('.show_more').click(function(e) {
    //     e.preventDefault();
    //     x = (x + 3 <= comments_size) ? x + 3 : comments_size;
    //     $('.zapis:lt(' + x + ')').show();
    // });
    // // Дозагрузка_

});
$(document).ready(function() {
    function abc2(n) {
        n += "";
        n = new Array(4 - n.length % 3).join("U") + n;
        return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }


    $('.banner_job_wrap').viewportChecker({
        callbackFunction: function(elem, action) {

            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(abc2(Math.ceil(now)));
                    }
                });
                // var perec = abc2($(this).text());

            });

        },
    });


});