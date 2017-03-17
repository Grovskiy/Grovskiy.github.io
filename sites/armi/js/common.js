$(function() {


  $(".fancybox").fancybox({
    padding    : 0,
    margin     : 15,
    nextEffect : 'elastic',
    prevEffect : 'elastic'
  });

  var options = {
    offset: 145
  }
  var header = new Headhesive('.top_mnu_wrap', options);



// masked
$('input[type=tel]').mask("9 ( 999 ) 999 - 99 - 99");

$('.carusel').slick({
  dots: true,
});

// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [48.5035,135.1129],lang: 'ru',
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });   
// Тип карты
myMap.setType('yandex#map');

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
  hintContent: 'Вотум доверия"',
  balloonContent: 'Вотум доверия"'
}, {
// Опции.
// Необходимо указать данный тип макета.
iconLayout: 'default#image'
});

myMap.geoObjects.add(myPlacemark); 
});



// прокрутка страницы
$('a[href^="#1"]').click(function() {
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
return false;
});   


});
