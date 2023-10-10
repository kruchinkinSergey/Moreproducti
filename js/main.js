$(function(){
    $('.header__slider').slick({
       dots: true,
       prevArrow: '<button type="button" class="slick-prev"><img src="images/pre.svg" alt=""></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
       vertical: true
    });

    $('.order__name').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.order__content',
      vertical: true,
      prevArrow: '<button type="button" class="order-prev"><img src="images/prev__order.svg" alt=""></button>',
      nextArrow: '<button type="button" class="order-next"><img src="images/next__oreder.svg" alt=""></button>',
    });
    $('.order__content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.order__name',
      fade: true,
      arrows: false
    });
});