$(window).on('load', function() { // makes sure the whole site is loaded 
$('#status').fadeOut(); // will first fade out the loading animation 
$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
$('body').delay(350).css({'overflow':'visible'});
})

// $(function() { 
  $(document).ready(function() {


// tabs
$(".tab").click(function() {
  $(".tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// masked
$('input[type=tel]').mask("8 ( 999 ) 999 - 99 - 99");

$('.slickbig').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
});
$('.slick_news').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      dots: true,
      arrows: false,
      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {        
      slidesToShow: 1,
      dots: true,
      arrows: false
    }
  }
  ]
});
$('.partners_slick').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
// adaptiveHeight: true,
responsive: [
{
  breakpoint: 1200,
  settings: {
    slidesToShow: 4
  }
},
{
  breakpoint: 768,
  settings: {
    dots: true,
    arrows: false,
    slidesToShow: 2
  }
},
{
  breakpoint: 480,
  settings: {        
    slidesToShow: 1,
    dots: true,
    arrows: false
  }
}
]
});

// Мобильное меню
// var $menu = $("#mobile_mnu").mmenu({
//   "extensions": ["widescreen"],
//   "extensions": ["pagedim-black"],    
// // "close": true 
// });
// var $icon = $("#my-icon");
// var API = $menu.data( "mmenu" );

$('#my-icon').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('is-active');
  $('#mobile_mnu').toggleClass("active");
});
// При клике открываем меню
// $icon.on( "click", function() {
//   API.open();
//   API.close();
// });
// // При открытие меню, дообавляется класс для кнопки
// API.bind( "opened", function() {
//   $icon.addClass( "is-active" );
// });
// // При закрытие меню, Убирается класс для кнопки
// API.bind( "closed", function() {   
//   $icon.removeClass( "is-active" );
// });
// Мобильное меню_

// Табы
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
// Табы_

// Всплываха
$(".fancybox").fancybox({
  padding    : 0,
// margin     : 15,
// nextEffect : 'elastic',
// prevEffect : 'elastic',
// loop: true,
// autoSize: false,
  maxWidth: '665',
// autoWidth: true,
// autoHeight : false,
// scrolling: 'yes',
helpers: {
  overlay: {
    locked: false
  }
}
});
// Всплываха_
// Всплываха img 
$(".fancybox_img").fancybox({
  padding    : 0,
// margin     : 15,
// nextEffect : 'elastic',
// prevEffect : 'elastic',
// loop: true,
// autoSize: false,
  // maxWidth: '665',
// autoWidth: true,
// autoHeight : false,
// scrolling: 'yes',
helpers: {
  overlay: {
    locked: false
  }
}
});
// Всплываха_

// Fix Menu 2
// var options = {
//   offset: 500
// }
// var header = new Headhesive('.top_mnu', options);
// Fix Menu_ 2

// прокрутка страницы
$('a[href^="#1"]').click(function() {
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
return false;
});  
// прокрутка страницы_

// Дозагрузка
comments_size = $(".zapis").size(); 
x=3; 
$('.zapis:lt('+x+')').show(); 
$('.show_more').click(function (e) { 
  e.preventDefault(); 
  x= (x+3  <= comments_size) ? x+3   : comments_size; 
  $('.zapis:lt('+x+')').show(); 
}); 
// Дозагрузка_

});

// Fix mnu
$(window).scroll(function () {
  if ($(this).scrollTop() > 112) {
    $('.top_mnu').addClass("top_mnu_up");                             
  } else {
   $('.top_mnu').removeClass("top_mnu_up");
 }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.hamburger').addClass("my_icon_down");                             
  } else {
    $('.hamburger').removeClass("my_icon_down");
  }
});



$(window).load(function() {  
  $('.main .right_column').addClass("animated fadeInUp");  
// $(".main .right_column").animated("fadeInUp", "fadeInUp");  

$('.main .logo').addClass("animated fadeInUp");  
// $(".main .logo").animated("fadeInUp");  

$('.slickbig .text').addClass("animated fadeInUp");  
// $(".slickbig .text").animated("fadeInUp", "fadeOut");      

// $('.decision .triple').addClass("animated fadeOut");  
$(".decision .triple").animated("fadeInUp", "fadeOut");  

// $('.questions .container').addClass("animated fadeOut");  
$(".questions .container").animated("fadeInUp", "fadeOut");  

// $('.company .container').addClass("animated fadeOut");  
$(".company .container").animated("fadeInUp", "fadeOut");  

// $('.industry .item').addClass("animated fadeOut");  
$(".industry .item").animated("fadeInUp", "fadeOut");  

// $('.slick_news a').addClass("animated fadeOut");  
$(".slick_news a").animated("fadeInUp", "fadeOut");  

// $('.partners a').addClass("animated fadeOut");  
$(".partners a").animated("fadeInUp", "fadeOut");  



});
