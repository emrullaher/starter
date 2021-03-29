

$(function () {


  $('.app-select').selectpicker();

  var pagePiling = $('#fullpage');
    if($(pagePiling).length){
      $('html,body').addClass('overflow-hidden');

      //  $('html').addClass('no-scroll');

        $(pagePiling).pagepiling({
            direction: 'vertical',
            verticalCentered: false,
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: false,
            loopTop: false,
            css3: true,
            // anchors: ['index', 'about', 'istanbul'],
            animateAnchor:true,
            onLeave: function(index, nextIndex, direction){
                console.log(nextIndex);
                if(nextIndex === 1) {
                  $('.menu').addClass('menu--light');
                } 
                else if(nextIndex === 3){
                  $('.menu').addClass('menu--light');
                }
                else { 
                  $('.menu').removeClass('menu--light');
                }
                animate('[data-id="page-'+nextIndex+'"]');
            },
            afterLoad:function (anchorLink, index){ 
              
            },
            afterRender: function(){
            },
        });
    };


//   $(window).scroll(function() {
//     if($('#page2').length > 0) {
//       var hT = $('#page2').offset().top,
//       wS = $(this).scrollTop();

//       if (wS >= (hT - 20 )){
//           $('.menu').removeClass('menu--light');
//           $('.menu__header').addClass('menu__header--bg');
//           $('.about__image').addClass('about__image--bg');
//       } else {
//           $('.menu').addClass('menu--light');
//           $('.menu__header').removeClass('menu__header--bg');
//           $('.about__image').removeClass('about__image--bg');
//       }
//     }
   
//  });

  $('.js-home-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:false,
    items:2,
  })


  $('.js-properties-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots:true,
    items:1,
  })


})

$(document).on('click','.js-ifc-tabs .nav-link',function(e){
  var target = $(this).attr('href');
  animate(target);
})


function animate(target){
  var left  = $('.left'),
  right = $('.right');
  $(left).find('.animate__animated').each(function(i,el){
    var animation = $(el).attr('data-anim');
    $(el).removeClass('animate__'+animation).css('animation-delay','');
  });
  $(right).find('.animate__animated').each(function(i,el){
    var animation = $(el).attr('data-anim');
    $(el).removeClass('animate__'+animation).css('animation-delay','');
  });

  var count = 0,maxduration = 0;
  $(target).find('.animate__animated').each(function(i,el){
    var total = i * 0.20;
    var duration = 1;
    count++;
    if(count > 4) {
      duration = i * 0.30;
    }
    var animation = $(el).attr('data-anim');
    $(el).addClass('animate__'+animation).css({
      'animation-delay':total+'s',
      'animation-duration':duration+'s',
    });
    maxduration = duration;
  })

  setTimeout(function(){
    if($('.counter').length > 0) {
      $('.counter').each(function (i,el) {
          $(this).prop('Counter',0).animate({
              Counter: $(this).attr('data-count')
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  var _now = numberWithCommas(Math.ceil(now));
                  var _type = $(this).attr('data-type');
                  $(this).text(_now+''+_type);
              }
          });
      });
    }
  },Math.round(maxduration) * 50)
 
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}





$(function(){
  
  
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var $old_tab = $(e.relatedTarget);
    var $new_tab = $(e.target);

  
    if( $new_tab.index() > $old_tab.index() ) {

      $( $old_tab.attr('href') ).tab('show')
      $( $old_tab.attr('href') ).addClass('animate__slideOutUp')
      $( $new_tab.attr('href') ).removeClass('active')
      setTimeout(function(){
        $( $old_tab.attr('href') ).removeClass('active animate__slideOutUp')
        $( $new_tab.attr('href') ).tab('show')
        $( $new_tab.attr('href') ).addClass('animate__slideInUp')

        setTimeout(function(){
          $( $new_tab.attr('href') ).removeClass('animate__slideInUp')
        },800)
      },700)
    } else {
      $( $old_tab.attr('href') ).tab('show')
      $( $old_tab.attr('href') ).addClass('animate__slideOutDown')
      $( $new_tab.attr('href') ).removeClass('active')

      setTimeout(function(){
        $( $old_tab.attr('href') ).removeClass('active animate__slideOutDown')
        $( $new_tab.attr('href') ).tab('show')
        $( $new_tab.attr('href') ).addClass('animate__slideInDown')

        setTimeout(function(){
          $( $new_tab.attr('href') ).removeClass('animate__slideInDown')
        },800)
      },700)

    }


  })

})



var $form_input = $('.form-group .form-control')

$form_input
.on('focusin', function () {
    $(this)
    .parents('.form-group')
    .addClass('form-group--focus')
    .removeClass('form-group--filled')
})
.on('focusout', function () {
    $(this).parents('.form-group').removeClass('form-group--focus')
    var _val = $(this).val()
    if (_val != '') {
    $(this).parents('.form-group').addClass('form-group--filled')
    } else {
    $(this).parents('.form-group').removeClass('form-group--filled')
    }
})



