$(function() {

	$('.hamburger-menu').on('click', function(event) {
		event.preventDefault();
		$(".content-left").removeClass("active-sub_menu");
		if ($(".content-left").hasClass("active") == false) {			
			$('.bar').addClass('animate');			
			$(".content-left").addClass("active");
		} else {					
			$('.bar').removeClass('animate');
			$(".content-left").removeClass("active");
		}
	});


	$('.login-wrap').on('click', function(event) {
		event.preventDefault();
		$('.ask_question-dark').addClass('active-ask-dark');
		$(".ask_question").addClass("active-ask");
	});

	$('.ask_question-dark').on('click', function(event) {
		event.preventDefault();
		$('.ask_question-dark').removeClass('active-ask-dark');
		$(".ask_question").removeClass("active-ask");
	});



// $('.left_menu-li').hover(function(){
// 	$(this).find('.sub_menu').addClass("sub_menu-active");
// 	$(".content-left").addClass('active-sub_menu');
// 	// $(this).addClass('active');
// 	$('.post_detail').not($(this)).removeClass('active');
// });

$('.left_menu-li').hover(function() {
	$(".content-left").addClass('active-sub_menu');
	$(this).find('.sub_menu').addClass("sub_menu-active");	
	$('.bar').addClass('animate');
}, function() {
	$(this).find('.sub_menu').removeClass("sub_menu-active");
	$(".content-left").removeClass("active-sub_menu");
	$('.bar').removeClass('animate');
});


//validate
$('.ask_question').validate({
//Правила
rules: {
	name: {
		required: true
	},
	mail: {
		required: true,
		email: true
	},
	message: {
		required: true
	}
},
//Текста предупреждений
messages: {
	name: {
		required: "Enter your name",
	},
	mail: {
		required: "Enter your email",	
	},
	message: {
		required: "Enter your message",
	}
}
});
//validate
$('.dispatch-form').validate({
//Правила
rules: {
	mail: {
		required: true,
		email: true
	},
},
//Текста предупреждений
messages: {
	mail: {
		required: "Enter your email",	
	},
}
});




(function () {
	var $frame = $('#sliderframe');
	var $buttons = $('.sliderframe_wrap');
	var $wrap  = $buttons.parent();

        // Call Sly on frame
        $frame.sly({
        	horizontal: 1,
        	itemNav: 'forceCentered',
        	smart: 1,
        	activateMiddle: 1,
            // mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            // scrollBar: $wrap.find('.scrollbar'),
            // scrollBy: 0,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 800,
            elasticBounds: 1,
            // easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            // clickBar: 1,

            // Cycling
            cycleBy: 'pages',
            cycleInterval: 9000,
            pauseOnHover: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });

        $(window).resize(function() {

        	var windWidth = $(window).width();
        	var containerWidth = $(".container").css("width");     

        	if (windWidth < 992 || windWidth == 992) {
        		$(".sliderframe li").css('width', containerWidth);      
        	} else {
        		$(".sliderframe li").css('width', "927px");        		      
        	};

        	$frame.sly('reload');

        });

        var windWidth = $(window).width();
        var containerWidth = $(".container").css("width");     

        if (windWidth < 992 || windWidth == 992) {
        	$(".sliderframe li").css('width', containerWidth);      
        } else {
        	$(".sliderframe li").css('width', "927px");        		      
        };
        $frame.sly('reload');
    }());

// slider_comments_end


var submitIcon = $('.searchbox-icon');
var inputBox = $('.searchbox-input');
var searchBox = $('.searchbox');
var isOpen = false;
submitIcon.click(function(){
	if(isOpen == false){
		searchBox.addClass('searchbox-open');
		inputBox.focus();
		isOpen = true;
	} else {
		searchBox.removeClass('searchbox-open');
		inputBox.focusout();
		inputBox.val('');
		isOpen = false;
	}
});  
submitIcon.mouseup(function(){
	return false;
});
searchBox.mouseup(function(){
	return false;
});
$(document).mouseup(function(){
	if(isOpen == true){
		$('.searchbox-icon').css('display','flex');
		submitIcon.click();
	}
});



});
function buttonUp(){
	var inputVal = $('.searchbox-input').val();
	inputVal = $.trim(inputVal).length;
	if( inputVal !== 0){
		$('.searchbox-icon').css('z-index','5');
	} else {
		$('.searchbox-input').val('');
		$('.searchbox-icon').css('display','flex');
	}
}
