$(document).ready(function(){
    $('nav a').on('click', function(event){
        event.preventDefault();

        let href = $(this).attr('href');

        let headerHeight = $('.header').height();

        let offset = $(href).offset().top - headerHeight;

        $('body,html').animate({
            scrollTop: offset,
        }, 700);
    });

    $('.col-footer a').on('click', function(event){
        event.preventDefault();

        let href = $(this).attr('href');

        let headerHeight = $ ('.header').height();

        let offset = $(href).offset().top - headerHeight;

        $('body,html').animate({
            scrollTop: offset,
        }, 700);
    });

    
    $('.sl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 861,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            }
          ]
    });

    $(document).ready(function(){
  
      $('.element').removeClass('anim');
      setTimeout ("$('.show-effect').fadeIn('slow');",1000);
      
    });

    
     

});