$(function() {

	$("[data-fancybox]").fancybox({});

});


$(document).ready(function() {

	$('.hamburger-menu').on('click', function(event) {
		event.preventDefault();
// $(this).toggleClass('is-active');
$(this).toggleClass('m_mnuscroll');
$('.bar').toggleClass('animate');
$('#mobile_mnu').toggleClass("active");
});
// _MMENU

$("#datepicker1").datepicker({
	monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
	dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
	firstDay:1,
	dateFormat:"dd-mm-yy"
});
$(".selectmenu").selectmenu({});

$('.timepicker').timepicker({
	timeFormat: 'HH:mm',
minTime: '9:0:00', // 11:45:00 AM,
interval: 10
});

// прокрутка страницы
$('a[href^="#1"]').click(function() {
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
return false;
});   

// person
$(".top_mnu .room").click(function() {		
	$(".dropdown_mnu_wrap").slideToggle();
});
// _person

//validate
$('#booking').validate({
//Правила
rules: {
	number: {
		required: true
	}
},
//Текста предупреждений
messages: {
	number: {
		required: "Это поле обязательно для заполнения",
	}
}
});

// masked
$('input[type=tel]').mask("+7 (999) 999 - 99 - 99");

});

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.hamburger-menu').addClass("mnu_scroll_down");                             
	} else {
		$('.hamburger-menu').removeClass("mnu_scroll_down");
	}
});

