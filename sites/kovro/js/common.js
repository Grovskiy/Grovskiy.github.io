$(function() {
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
  
  var vid2 = document.getElementById('video');
  var overlay2 = document.getElementById('play-button2');
  $('.slider').slick({    
    dots: true,    
    arrows: false
  });
  $('.single-item').slick({
   responsive: [
  {
    breakpoint: 900,
    settings: {      
      dots: true,
      arrows: false
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  // Табы
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $(".play").click(function() {
    $(".video").css("z-index", "1")
    $(".closebtn").css("z-index", "300")
  });



  $(".closebtn").click(function() {
    $(".video").css("z-index", "-1")
    $(".closebtn").css("z-index", "-1")
    vid2.pause();        
    vid2.currentTime = 0;
    overlay2.className = "play";
  });

     // Всплываха
     $(".fancybox").fancybox({
      padding    : 0,
      margin     : 15,
      nextEffect : 'elastic',
      prevEffect : 'elastic',
      loop: true,
      autoSize: false,
      minWidth: '960',
      autoWidth: true,
      autoHeight : false,
      scrolling: 'yes',
    });
     $(".fancybox2").fancybox({
      padding    : 0,
      margin     : 15,
      nextEffect : 'elastic',
      prevEffect : 'elastic'
    });     
     $(".fancyboxvid").fancybox({
      maxWidth  : 800,
      maxHeight : 600,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      // closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
      // Fix Menu
      var options = {
        offset: 120
      }
      var header = new Headhesive('.mnu_wrapp', options);
    // Список городов
    $('.select').on('click','.placeholder',function(){
      var parent = $(this).closest('.select');
      if ( ! parent.hasClass('is-open')){
        parent.addClass('is-open');
        $('.select.is-open').not(parent).removeClass('is-open');
      }else{
        parent.removeClass('is-open');
      }
    }).on('click','ul>li',function(){
      var parent = $(this).closest('.select');
      parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
      parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
    });
      // прокрутка страницы
      $('a[href^="#1"]').click(function() {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
        return false;
      });  
          // Дозагрузка
          comments_size = $(".zapis").size(); 
          x=3; 
          $('.zapis:lt('+x+')').show(); 
          $('.show_more').click(function (e) { 
            e.preventDefault(); 
            x= (x+3  <= comments_size) ? x+3   : comments_size; 
            $('.zapis:lt('+x+')').show(); 
          }); 


        });
jQuery(document).ready(function($) {
  var overlay2 = document.getElementById('play-button2');
  var vid2 = document.getElementById('video');
  if (overlay2.addEventListener) {
    overlay2.addEventListener("click", play, false)
  } else if (overlay2.attachEvent) {
    overlay2.attachEvent("onclick", play)
  }

  function play() {
    if (vid2.paused) {
      vid2.play();
      overlay2.className = "play-now";
    } else {
      vid2.pause();
      overlay2.className = "play";
    }
  }

});


$(document).ready(function(){ 
  $('.block5').viewportChecker({callbackFunction: function(elem, action){
      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }, 
  });
});