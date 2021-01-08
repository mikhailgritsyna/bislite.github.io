$(function(){

    $('.slider__inner').slick({
      arrows: false,
      dots: true,
    });
    $('.works_inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="../besline/img/slider/arrow.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="../besline/img/slider/arrowri.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 5,

          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,

          }
        },
        {
          breakpoint: 455,
          settings: {
            slidesToShow: 1,

          }
        },
      ]
    });



    $('.header_menu-btn').on('click', function(){
      $('.header_menu > ul').slideToggle();
    });

   

});