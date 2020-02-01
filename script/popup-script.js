$ (function(){  
    $('#popup-jungl-button')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__popup-request-a-call').fadeIn(400)
            $('body') .toggleClass("modal");

        });

    $('#popup-jungl-button-mobile')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__popup-request-a-call').fadeIn(400)
            $('body') .toggleClass("modal");

        });

    $('#popup-jungl-button-2')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__popup-request-a-call').fadeIn(400)
            $('body') .toggleClass("modal");

        });    
        
    $('#popup-prices')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__find-out-the-price').fadeIn(400)
            $('body') .toggleClass("modal");
        });

     $('#popup-project')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__order-a-project').fadeIn(400)
            $('body') .toggleClass("modal");
        });
        
    $('#info__button')
        .click(function(){
            $('.popup-window').fadeIn(400);
            $('.popupItem__info-masters').fadeIn(400)
            $('body') .toggleClass("modal");
        });
    
    $(".popup-window").click(function(event){
        if(event.target == this) {
            $(this).fadeOut(400);
            $('.popupItem__popup-request-a-call').fadeOut(400);
            $('.popupItem__find-out-the-price').fadeOut(400);
            $('.popupItem__order-a-project').fadeOut(400);
            $('.popupItem__info-masters').fadeOut(400);
            $('body').toggleClass("modal");
        }
    });
    $(".close-icon").click(function(){
        $('.popup-window').fadeOut(400);
        $('.popupItem__popup-request-a-call').fadeOut(400);
        $('.popupItem__find-out-the-price').fadeOut(400);
        $('.popupItem__order-a-project').fadeOut(400);
        $('.popupItem__info-masters').fadeOut(400);
        $('body').toggleClass("modal");  
    });   
    
// Menu-adaptiv-mibile

    let burger = document.querySelector('.header__burger');
    let close = document.querySelector('.header__close');

    burger.addEventListener('click', function(e){
        e.preventDefault();
        $('.nav-menu-wrapper-m').toggle("slow");
    });
    
    close.addEventListener('click', function(e){
        e.preventDefault();
        $('.nav-menu-wrapper-m').toggle("hide");
    });
    

});