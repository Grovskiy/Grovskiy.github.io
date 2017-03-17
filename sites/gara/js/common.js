$(function() {

      // Активный пункт
  $(".vubor .yes").click(function() {
    $(".vubor .yes").removeClass("active");
    $(this).addClass("active");
  });
  $(".vubor .no").click(function() {
    $(".vubor .no").removeClass("active");
    $(this).addClass("active");
  });

// var heightImg = $('.banner img').height();
// // console.log(heightImg);
// $(".banner").css('height', heightImg);

// masked
$('input[type=tel]').mask("( 999 ) 999 - 99 - 99");

// MMENU
$('#my-icon').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('is-active');
  $('#mobile_mnu').toggleClass("active");
});
// _MMENU

$('.big_slide').slick({    
  dots: true,    
  arrows: true,
  responsive: [
  {
    breakpoint: 792,
    settings: {
      arrows: false
    }
  }
  ]
});
$('.nashu_pobediteli').slick({
  dots: true,
  infinite: true,
  speed: 300,

  variableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        centerMode: true,
        dots: true
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
      }
    }
  ]
});
// // Табы
// $(".wrapper .tab").click(function() {
//   $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//   $(".tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");
// // Табы_

  $('.feedback form').submit(function() {
    $.fancybox({
      href: '#thanks',
      wrapCSS: 'owrap',
      openEffect: "fade",
      closeEffect: "fade",
      padding    : 0,
      margin     : 0,
      maxWidth: '420',
      helpers: {
        overlay: {
          locked: false
        } 
      }
    });
  });

// // Всплываха
$(".fancybox").fancybox({
  padding    : 0,
  margin     : 0,
  loop: true,
  autoWidth: true,
  autoHeight : false,
  // scrolling: 'yes',
});
// // Всплываха_

// // Fix Menu
// var options = {
//   offset: 120
// }
// var header = new Headhesive('.mnu_wrapp', options);
// // Fix Menu_

// // прокрутка страницы
// $('a[href^="#1"]').click(function() {
// //Сохраняем значение атрибута href в переменной:
// var target = $(this).attr('href');
// $('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
// return false;
// });  
// // прокрутка страницы_

// // Дозагрузка
comments_size = $(".zapis").size(); 
x=4; 
$('.zapis:lt('+x+')').show(); 
$('.show_more').click(function (e) { 
  e.preventDefault(); 
  x= (x+3  <= comments_size) ? x+3   : comments_size; 
  $('.zapis:lt('+x+')').show(); 
}); 
// // Дозагрузка_
});

// Ползунок
$(document).ready(function() {
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
// Knopochka Plus_Minus
$(function() {
  $('ul.questions li > p').on('click', function() {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  });
});
// _Knopochka Plus_Minus

//   $('#calc-range').on('input', function(input) {
//     var rangeValue = input.target.value;
//     var revenueValue = $('#calc-revenue').val();
//     var calculation = rangeValue * revenueValue; // Replace with your own calcuation
//     $('#calc-results').html(calculation);
//     console.log(calculation);
// });

$(window).resize(resizeBanner);  
function resizeBanner() {
  var heightImg = $('.banner img').height();
// console.log(heightImg);
$(".banner").css('height', heightImg);
};
  var heightImg = $('.banner img').height();
// console.log(heightImg);
$(".banner").css('height', heightImg);


// ползунок2
range = $('.range_slider .polzunok');
value = $('.range_slider .vuvod');
value.val(range.attr('value'));

range.on('input', function(){
  monparent=(".range_slider");
  value=$(monparent).find('.vuvod');
  $(value).val(this.value);
});

// передает значение из вывода
value.on('input', function(){
  monparent=(".range_slider");
  range=$(monparent).find('.polzunok');
  $(range).val(this.value);
});

// _ползунок2
$('.polzunok, .vuvod').change(function(){
  var vuvod = $('.vuvod').val();
  var skrutui_koff = $('.skrutui_koff').text();
  var vuigral0 = vuvod * skrutui_koff;
  vuigral = vuigral0 - (vuigral0 % 1); 
  $('.vuigral').val(vuigral);
});




// ставка
$('.win').each(function(){
  var stavka = $(this).closest('tr').find('.stavka').text();
  var koff = $(this).closest('tr').find('.koff').text();
// console.log(win);
// console.log(koff);
var win = stavka * koff;
$(this).text(win);
});
 

});
// Ползунок

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.hamburger').addClass("my_icon_down");                             
  } else {
    $('.hamburger').removeClass("my_icon_down");
  }
});