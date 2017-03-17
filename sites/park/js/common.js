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
    $('input[type=tel]').mask("( 999 ) 999 - 99 - 99");
    
    // Всплывающее меню
    $('ul.sf-menu').superfish({
      delay:       200,                            // задержка в миллисекунду
      animation:   {opacity:'show',height:'show'},  // fade-in и slide-down анимация
      speed:       'fast',                          // увеличение скорости анимации
      autoArrows:  true,                           // отключает стрелку подменю
      dropShadows: false                            // отключает тень
    });



	  // Активный пункт
	// $("ul a").click(function() {
	// 	$("ul a").removeClass("active");
	// 	$(this).addClass("active");
	// });
	$("ul li").click(function() {
		$("ul li").removeClass("active");
		$(this).addClass("active");
	});

    // Дозагрузка
  comments_size = $(".zapis").size(); 
  x=6; 
  $('.zapis:lt('+x+')').show(); 
  $('.show_more').click(function (e) { 
    e.preventDefault(); 
    x= (x+3  <= comments_size) ? x+3   : comments_size; 
    $('.zapis:lt('+x+')').show(); 
  }); 

	// Всплывашка
  $('.image-link').magnificPopup({type:'image'});
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
      });
  });

	// Слайдер
	$('.slider_wrapp').slick({
		dots: true,
		infinite: true,
		TouchMove: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		// rows: 2,
		speed: 900,
		// slidesToShow: 4,
		// slidesToScroll: 4,
		// responsive: [
		// {
		// 	breakpoint: 1024,
		// 	settings: {
		// 		slidesToShow: 3,
		// 		slidesToScroll: 3,
		// 		infinite: true,
		// 		dots: false
		// 	}
		// },
		// {
		// 	breakpoint: 600,
		// 	settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2
		// 	}
		// },
		// {
		// 	breakpoint: 480,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 	}
		// }
  //   ]
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


  $(".stend_descr").hide();
  $(".menu h4").click(function(){
    $(this).next(".stend_descr").slideToggle(400)
    .siblings(".stend_descr:visible").slideUp(400);
    $(this).toggleClass("active_mnu");
    $(this).siblings("h4").removeClass("active");
  });

  $(".next_stend").hide();
  $(".menu h5").click(function(){
    $(this).next(".next_stend").slideToggle(400)
    .siblings(".next_stend:visible").slideUp(400);
    $(this).toggleClass("active_mnu");
    $(this).siblings("h5").removeClass("active");
  });


	
});

$(document).ready(function() {

		// Карта
 ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [50.6125,36.5890],
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
    	hintContent: 'Park Hotel',
    	balloonContent: 'Park Hotel'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker_map.png',
            // Размеры метки.
            iconImageSize: [33, 43],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
          });

      myMap.geoObjects.add(myPlacemark);    

  });

});