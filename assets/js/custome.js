$(document).ready(function () {

    var swiper = new Swiper('.swiper-container-hero', {


        autoplay: {

            delay: 4000,
            disableOnInteraction: false,
        }
        , loop: true,
        // pagination: {

        // 	el: '.swiper-pagination',
        // 	clickable: true,
        // 	renderBullet: function (index, className) {
        // 		return '<span class="' + className + '">' + (index + 1) + '</span>';
        // 	},
        // },


    });

    var swiper2 = new Swiper('.swiper-listing', {
        slidesPerView: 5,
        spaceBetween: 30,

        autoplay: {

            delay: 4000,
            disableOnInteraction: false,
        }
        , loop: true,
        // pagination: {

        // 	el: '.swiper-pagination',
        // 	clickable: true,
        // 	renderBullet: function (index, className) {
        // 		return '<span class="' + className + '">' + (index + 1) + '</span>';
        // 	},
        // },
        breakpoints: {
            320: { slidesPerView: 1, },
            375: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            640: {
                slidesPerView: 2,

            },
            768: {
                slidesPerView: 5,

            }
        },

    });

    var swiper3 = new Swiper('.swiper-mostvisite', {

        // init: false,

        autoplay: {

            delay: 5000,
            disableOnInteraction: false,
        }
        , loop: true,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //   },
        breakpoints: {
            640: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 2,

            },
            1024: {
                slidesPerView: 4,

            },
        }

    });

    var $container = $('.animate-grid .gallary-thumbs');
    $container.isotope({
        filter: '*',
        transitionDuration: '0.6s',
    });
    $('.animate-grid .categories a').click(function () {
        $('.animate-grid .categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });

});