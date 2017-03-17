$(document).ready(function(){

			

		// Slick
		$('.slick_slide').slick({
			centerMode: true,
			variableWidth: true,
			infinite: true,
			centerPadding: '0px',
			slidesToShow: 1,
			dots: true
		});


	  // прокрутка страницы до якоря
    $('a[href^="#1"]').click(function() {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 700); // speed of scrolling
        return false;
    });

	// $("html").niceScroll();

	// Смена активного пункта меню
	$("li").click(function(){
		$("li").removeClass("active");
		$(this).addClass("active");
	});

	// Паралакс
	$('#scene').parallax({
		// calibrateX: false,
		// calibrateY: true,
		// invertX: false,
		// invertY: true,
		limitX: 50,
		limitY: 2,
		// scalarX: 2,
		// scalarY: 8,
		// frictionX: 0.2,
		// frictionY: 0.8,
		// originX: 0.0,
		// originY: 1.0
	});


  //masked
  $('input[type=tel]').mask("+ 38 ( 999 ) 999 - 99 - 99");

   // Обратный отсчет
	 $('#clock').countdown('2020/07/17', function(event) {
	   $(this).html(event.strftime('11 &nbsp %H : %M : %S'));

	 });
	 
	  $(".fancybox").fancybox();

	 	// Форма		
	 	// $("#contact").each(function() {
	 	// 	var it = $(this);
	 	// 	it.validate({
	 	// 		rules: {
	 	// 			phone: {
	 	// 				required: true
	 	// 			}
	 	// 		},
	 	// 		messages: {},
	 	// 		errorPlacement: function(error, element) {},
	 	// 		submitHandler: function(form) {
	 	// 			var thisForm = $(form);
	 	// 			console.log(thisForm.serialize());
	 	// 			$.ajax({
	 	// 				type: "POST",
	 	// 				url: thisForm.attr("action"),
	 	// 				data: thisForm.serialize()
	 	// 			}).done(function() {
	 	// 				$(this).find("input").val("");
	 	// 				$.fancybox({
	 	// 					href: '#thanks',
	 	// 					wrapCSS: 'owrap',
	 	// 					openEffect: "fade",
	 	// 					closeEffect: "fade",
	 	// 				});
	 	// 				console.log("good");
	 	// 				setTimeout(function() {
	 	// 					$.fancybox.close();
	 	// 				}, 3000);
	 	// 				$("#contact").trigger("reset");
	 	// 			});
	 	// 			return false;
	 	// 		},
	 	// 		success: function() {},
	 	// 		highlight: function(element, errorClass) {
	 	// 			$(element).addClass('error');
	 	// 		},
	 	// 		unhighlight: function(element, errorClass, validClass) {
	 	// 			$(element).removeClass('error');
	 	// 		}
	 	// 	})
	 	// });






});

