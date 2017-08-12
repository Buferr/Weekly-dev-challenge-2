$('.header').wrap('<div class="homepage__placeholder"></div>');
$('.homepage__placeholder').height($('.header').outerHeight());

$(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();
  if (scroll >138) sticky.addClass('header--fixed');
  else sticky.removeClass('header--fixed');
});



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    

    $('ul a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('menu__link--active');
        })
        $(this).addClass('menu__link--active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("menu__link--active");
            currLink.addClass("menu__link--active");
        }
        else{
            currLink.removeClass("menu__link--active");
        }
    });
}