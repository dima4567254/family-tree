
$('.header__btn').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');

        /*$('.header__logo').toggleClass('menu__list--active');
        $('.intro__btn').toggleClass('menu__list--active');*/
    });
$('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('active');

        /*$('.header__logo').toggleClass('menu__list--active');
        $('.intro__btn').toggleClass('menu__list--active');*/
    });

(function ($) {
    $(function () {
        $('input, select, form__radio').styler({
            selectSearch: true,
        });
    });
})(jQuery);

$(function () {
    let header = $('.header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });
});

$(function name(params) {
    const Recommendations = new Swiper('.Recommendations', {
        loop: true,
        loopedslides: 1,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
// $(function name(params) {
//     const Recommendations = new Swiper('.Recommendations', {
//         // slidesPerView: 1,
//         // loop: true,
//         // loopedslides: 1,
//         // slidesPerView: 2,
//         // grid: {
//         //     rows: 2,
//         // },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//     });
// });

$(document).ready(function () {
    $('.faq__accordion > li  >.faq__text').hide();

    $('.faq__accordion > li ').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".faq__text").slideUp();
        } else {
            $(".faq__accordion > li  .active .faq__text").slideUp();
            $(".faq__accordion > li  .active").removeClass("active");
            $(this).addClass("active").find(".faq__text").slideDown();
        }
        return false;
    });
});

const modalWindow = document.querySelector('.modal');
let elements = document.querySelectorAll('.modal-window');

for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
    elements[i].addEventListener('click', function () {  /*при клике на элемент */


        if (modalWindow.classList.contains('modal-open')) {
            modalWindow.classList.remove('modal-open');
        } else {
            modalWindow.classList.add('modal-open');
        }


        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                modalWindow.classList.remove('modal-open');
            }
        }
    })
}

// close modal
$('.modal').click(function () {
    var select = $('.modal__inner');
    if ($(event.target).closest(select).length)
        return;
    $('.modal').toggleClass('modal-open');
    $(document).unbind('click');
    event.stopPropagation();
});

// (function ($) {
//     $(function () {

//         $('checkbox').styler();

//     });
// })(jQuery);



// --------------------
$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1500);
});

/*для закрыть меню*/
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
       
        $('.home__slider').slick({
            dots: true,
            arrows: false,
             responsive: [


                 {
                     breakpoint: 1150,
                     settings: {
                         slidesToShow: 4,
                     }
                 },
                 {
                     breakpoint: 1000,
                     settings: {
                         slidesToShow: 3,
                     }
                 },
                 {
                     breakpoint: 620,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 },
             ]
        });
       
       
       */

