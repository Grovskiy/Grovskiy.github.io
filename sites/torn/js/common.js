$(document).ready(function() {
	

	  // Кол-во позиций корзины
  $('.qm').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.qp').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  
	    // masked
    // $('input[type=tel]').mask("( 999 ) 999 - 99 - 99");

   // Всплывающее меню
    $('ul.sf-menu').superfish({
      delay:       200,                            // задержка в миллисекунду
      animation:   {opacity:'show',height:'show'},  // fade-in и slide-down анимация
      speed:       'fast',                          // увеличение скорости анимации
      autoArrows:  true,                           // отключает стрелку подменю
      dropShadows: false                            // отключает тень
    }); 

    // Дозагрузка
    comments_size = $(".zapis").size(); 
    x=12; 
    $('.zapis:lt('+x+')').show(); 
    $('.show_more').click(function (e) { 
    	e.preventDefault(); 
    	x= (x+50  <= comments_size) ? x+50   : comments_size; 
    	$('.zapis:lt('+x+')').show(); 
    }); 
    
	  // Активный пункт
	// $(".mnu a").click(function() {
	// 	$(".mnu a").removeClass("active");
	// 	$(this).addClass("active");
	// });

	// Всплывашка
// 	$('.popup').magnificPopup({
// 		type: 'image'
// });

	// Фоновая картинка
	$('.slider_bg').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider_wrapp'
	});

	// Слайдер
	$('.slider_wrapp').slick({
		dots: true,
		arrow: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,
		asNavFor: '.slider_bg',
		// slidesToScroll: 4,
		variableWidth: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 635,
			settings: {
				slidesToShow: 1,
			}
		}
		]
  });

  	// Слайдер
	$('.slider2_wrapp').slick({
		dots: false,
		arrow: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		// slidesToScroll: 4,
		variableWidth: false,
		// responsive: [
		// {
		// 	breakpoint: 767,
		// 	settings: {
		// 		slidesToShow: 2,
		// 	}
		// },
		// {
		// 	breakpoint: 635,
		// 	settings: {
		// 		slidesToShow: 1,
		// 	}
		// }
		// ]
  });
  	// Слайдер о нас
	$('.slider_about').slick({
		dots: false,
		arrow: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		variableWidth: false,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 635,
			settings: {
				slidesToShow: 1,
			}
		}
		]
  });

  // Мобильное меню	
  //  $("#mobile_mnu").mmenu({
  //   "extensions": ["widescreen"],
  //   "extensions": ["pagedim-black"],    
  //   "close": true 
  // });
  // var API = $("#mobile_mnu").data( "mmenu" );

  // $(".toggle-mnu").click(function() {
  //  API.open();
  // });

  // Табы
	$(".wrapper .tab").click(function() {
	  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	  $(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

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

	
});

$(document).ready(function() {

		// Карта
		ymaps.ready(function () {


			var myMap = new ymaps.Map('map', {
				center: [53.2388,34.3706],
				zoom: 15
			}, {
				searchControlProvider: 'yandex#search'
			});
			myMap.behaviors.disable('scrollZoom');
    // Геолокация
    myMap.controls.remove('geolocationControl');
    // Поиск по карте
    myMap.controls.remove('searchControl');
    // Построение маршрута
    myMap.controls.remove('routeEditor');
    // Пробки
    myMap.controls.remove('trafficControl');
    // Выбор типа карты
    myMap.controls.remove('typeSelector');
    // Ползунок масштаба
    myMap.controls.remove('zoomControl');
    // Измерение расстояний
    myMap.controls.remove('rulerControl');

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    	hintContent: 'Торнадо',
    	balloonContent: 'Торнадо'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            // iconLayout: 'default#image',
            // Своё изображение иконки метки.
            // iconImageHref: 'img/marker_map.png',	
            // Размеры метки.
            iconImageSize: [61, 81],
            preset: "islands#orangeIcon", 
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
          });

    myMap.geoObjects.add(myPlacemark);    

   
  });







});

