const header = document.querySelector('header');

AOS.init({
    duration: 900,
    mirror: true,
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile',
    // активация aos
})

$('.header__btn').on('click', function () {
    $('.header__inner, .header__btn').toggleClass('active');
    // Открыть, закрыть, крестик.
});

(function ($) {
    $(function () {
        $('input, select, form__radio').styler({
            selectSearch: true,
        });
    });
})(jQuery);
// активация formstyler

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY >= header.offsetHeight) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});
// Функция для фиксированной шапки при скролле

$('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');
// что бы класс не пропадал

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

$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    tops = top - 80;
    $('body,html').animate({ scrollTop: tops }, 1500);
});

const popupLinks = document.querySelectorAll('.modal-window');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll('.close-popup');
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.modal.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.modal__inner')) {
                popupClose(e.target.closest('.modal'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);

}
function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.modal.open');
        popupClose(popupActive);
    }
});

function addClass(className) {
    document.documentElement.classList.add(className);
}
var avif = new Image();
avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
avif.onload = function () {
    addClass("avif");
};
avif.onerror = function () {
    check_webp_feature(function (isSupported) {
        if (isSupported) {
            return addClass("webp");
        }
        return addClass("fallback");
    });
};
function check_webp_feature(callback) {
    var img = new Image();
    img.onload = function () {
        var result = img.width > 0 && img.height > 0;
        callback(result);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src =
        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
}