$(function() {



	$('.hamburger').on('click', function(event) {
        // $(this).toggleClass('is-active');

        $(this).toggleClass('active');
        $('.more_menu').toggleClass('active');
        // $('#mobile_mnu').toggleClass("active");
    });
    // _MMENU




// slider
    var windWidth = $(window).width();
    $(".oneperframe ul li").css('width', windWidth);

    (function () {
        var $frame = $('#oneperframe');
        var $wrap  = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            // mouseDragging: 1,
            // touchDragging: 1,
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
            cycleInterval: 4000,
            pauseOnHover: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });

        $(window).resize(function() {
            var windWidth = $(window).width();        
            $(".oneperframe ul li").css('width', windWidth);

            $frame.sly('reload');

        });

    }());
// slider_end


    var windWidth = $(window).width();

    if (windWidth < 992 || windWidth == 992) {
        $('.mobile_menu').addClass('active');
    } else if (windWidth > 992) {
        $('.mobile_menu').removeClass('active');
    };

    $(window).resize(function() {
        var windWidth = $(window).width();        

        if (windWidth < 992 || windWidth == 992) {
            $('.mobile_menu').addClass('active');
        } else if (windWidth > 992) {
            $('.mobile_menu').removeClass('active');
        };
    });




// slider_comments

var windWidth = $(window).width();
var containerWidth = $(window).width();     

if (windWidth < 700 || windWidth == 700) {
    $(".commentframe li").css('width', containerWidth);      
} else {
    $(".commentframe li").css('width', "714px");      
};


(function () {
    var $frame = $('#commentframe');
    var $buttons = $('.commentframe_wrap');
    var $wrap  = $buttons.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            // mouseDragging: 1,
            // touchDragging: 1,
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
            cycleInterval: 4000,
            pauseOnHover: 1,

            // Buttons
            prev: $wrap.find('.prev'),
            next: $wrap.find('.next')
        });

        $(window).resize(function() {

            var windWidth = $(window).width();
            var containerWidth = $(window).width();     

            if (windWidth < 700 || windWidth == 700) {
                $(".commentframe li").css('width', containerWidth);      
            } else {
                $(".commentframe li").css('width', "714px");      
            };

            $frame.sly('reload');

        });

    }());
// slider_comments_end


//validate
$('#feedback').validate({
//Правила
rules: {
    comment: {
        required: true
    },
    firstname: {
        required: true
    },
    number: {
        required: true,        
        minlength: 18,
    }
},
//Текста предупреждений
messages: {
    comment: {
        required: "Це поле є обов`язковим для заповнення",
    },
    firstname: {
        required: "Це поле є обов`язковим для заповнення",
    },
    number: {
        required: "Це поле є обов`язковим для заповнення",
    }
}
});

// masked
$('input[type=tel]').mask("+38 (099) 999 - 99 - 99");


$(window).scroll(function () {
  if ($(this).scrollTop() > 534) {
    $('.top_menu_wrap').addClass("top_menu_fix");                             
  } else {
   $('.top_menu_wrap').removeClass("top_menu_fix");
 }
});


});
