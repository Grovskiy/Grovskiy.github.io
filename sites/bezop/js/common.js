$(document).ready(function() {

// Активный пункт
$(".mnu a").click(function() {
	$(".mnu a").removeClass("active");
	$(this).addClass("active");
});

$('.popup').magnificPopup({
	type: 'image'
// other options
});

// Наши работы карусель
$('.our_work').slick({
	dots: false,
	infinite: true,
	TouchMove: false,
	rows: 2,
	speed: 300,
	slidesToShow: 4,
// slidesToScroll: 4,
responsive: [
{
	breakpoint: 1024,
	settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		dots: false
	}
},
{
	breakpoint: 600,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 2
	}
},
{
	breakpoint: 480,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	}
}
]
});

// Отзывы карусель
$('#min_feedback').slick({
	dots: true,
	infinite: true,
	TouchMove: false,
	speed: 300,
	slidesToShow: 2,
// slidesToScroll: 4,
responsive: [
{
	breakpoint: 1024,
	settings: {
		slidesToShow: 1,
		infinite: true,
	}
},
{
	breakpoint: 480,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	}
}
]
});

// Отзывы карусель 2
$('#full_feedback').slick({
	dots: true,
	infinite: true,
	TouchMove: false,
	speed: 300,
	rows: 2,
	slidesToShow: 2,
// slidesToScroll: 4,
responsive: [
{
	breakpoint: 1024,
	settings: {
		slidesToShow: 1,
		infinite: true,
	}
},
{
	breakpoint: 480,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	}
}
]
});

// Мобильное меню	
$("#mobile_mnu").mmenu({
	"extensions": ["widescreen"],
	"extensions": ["pagedim-black"],    
	"close": true 
});
var API = $("#mobile_mnu").data( "mmenu" );

$(".toggle-mnu").click(function() {
	API.open();
});



});

