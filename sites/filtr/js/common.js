$(function() {

 // $(".popup_3 tbody tr img").attr();
 //  $('.popup_3 tbody tr').hover(
 //    function(){
 //    },
 //    function(){
 //    });
$('.popup_3 tbody tr').hover(function() {
 var src_img = $(this).find("img").attr('src');
 console.log(src_img);
 $(".popup .left_bl img").attr('src', src_img);
});

  // Активный пункт
  $(".block3 .hexagon-in2").click(function() {
    $(".block3 .hexagon-in2").removeClass("active");
    $(this).addClass("active");
  });
  // Активный пункт мигалки
  $(".popup_3 tbody tr").click(function() {
    $(".popup_3 .right_bl").addClass("active_flash");
  });
  $(".popup_3 .right_bl input").click(function() {
    $(".popup_3 .right_bl").removeClass("active_flash");
  });
  
  // masked
  $('input[type=tel]').mask("8 ( 999 ) 999 - 99 - 99");

  $('.comment_slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3, 
    infinite: true,
    speed: 600,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 826,
      settings: {
        dots: true,
        arrows: false
      }
    }
    ]
  });  

  $('.btn_read').click(function(){
    if ($(this).hasClass("btn_turn")) {
      $(this).removeClass("btn_turn");
      $(this).prev(".item").css("height", "198px");
      $(this).prevAll(".circle").find("circle").css("stroke", "#d1d1d1");
    }
    else {      
      $(".btn_read").removeClass("btn_turn");
      $(this).addClass("btn_turn");
      $(".btn_read").prev(".item").css("height", "198px");
      $(this).prev(".item").css("height", "320px");
      $(".btn_read").prevAll(".circle").find("circle").css("stroke", "#d1d1d1");
      $(this).prevAll(".circle").find("circle").css("stroke", "#00a4ff");
    }
  });

  $(".fancybox").fancybox({
    padding    : 0,
    margin     : 15,
    nextEffect : 'elastic',
    prevEffect : 'elastic'
  });
  
    // прокрутка страницы
    $('a[href^="#1"]').click(function() {
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(target).offset().top }, 700);
    (this) // speed of scrolling
    return false;
  });
    
   anime_border()
   start_gif()
   start_gif2()
   start_gif3()
   // Мобильное меню
   var $menu = $("#mobile_mnu").mmenu({
    "extensions": ["widescreen"],
    "extensions": ["pagedim-black"],    
    // "close": true 
  });
   var $icon = $("#my-icon");
   var API = $menu.data( "mmenu" );
  // При клике открываем меню
  $icon.on( "click", function() {
   API.open();
   API.close();
 });
  // При открытие меню, дообавляется класс для кнопки
  API.bind( "opened", function() {
    $icon.addClass( "is-active" );
  });
  // При закрытие меню, Убирается класс для кнопки
  API.bind( "closed", function() {   
    $icon.removeClass( "is-active" );
  });

});

$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $('.top_mnu').addClass("top_mnu_up");                             
  } else {
   $('.top_mnu').removeClass("top_mnu_up");
 }
});

function anim_block_1(widht) {
  $('.wat-1b, .wat-2b, .wat-3b, .wat-4b').css('width', widht)
  $('.wat-1b').css('height', '450px')
  $('.wat-2b').css('height', '480px')
  $('.wat-3b').css('height', '483px')
  $('.wat-4b').css('height', '351px')
  $('.stakan').css('height', '88px')
}
function anime_border(){ 
  var start_animate;
  $(window).scroll(function(){
    if (start_animate === true) {
      // console.log('animation')
      anim_block_1('1008px')
    }
    else {
      // console.log('poisk')
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var el = $('.wat-1');
      var offset = el.offset().top - 200;
      if(scrollTop <= offset && (el.height() + offset) < (scrollTop + windowHeight)) {
        start_animate = true;
        // console.log('ya tyt')
      }
    } 
  }) 
}

$(window).load(function() {
  $(".block7 .item_wrap .bounceInLeft").animated("bounceInLeft", "fadeOut");  
  $(".block7 .item_wrap .bounceInUp").animated("bounceInUp", "fadeOut");  
  $(".block7 .item_wrap .bounceInRight").animated("bounceInRight", "fadeOut");  
});

// нахождение картинки при скроле и добовление ему свойств
function start_gif(){  
 $(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.gif_din1 img');
  var offset = el.offset().top - -50;
  if(scrollTop <= offset && (el.height() + offset) < (scrollTop + windowHeight)) {
    $(el).css('opacity', '1')
  }
})
}
function start_gif2(){  
 $(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.gif_din2 img');
  var offset = el.offset().top - -50;
  if(scrollTop <= offset && (el.height() + offset) < (scrollTop + windowHeight)) {
    $(el).css('opacity', '1')
  }
})
}
function start_gif3(){  
 $(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.gif_din3 img');
  var offset = el.offset().top - -5;
  if(scrollTop <= offset && (el.height() + offset) < (scrollTop + windowHeight)) {
    $(el).css('opacity', '1')
  }
})
}
