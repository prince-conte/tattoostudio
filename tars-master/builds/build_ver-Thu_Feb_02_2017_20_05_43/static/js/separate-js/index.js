
    
    
// slider (ротация слайдера)  
    



// prev
    
function sliderPrev() { 
 
    $("#wrapper").removeClass('wrapp--bott');
        
      switch(sliderDinamic)
          {
            case 1:
            {
                $(".home__slide").fadeOut();
                $("#slide5").fadeIn();
                sliderDinamic = 5;
    
            };break;
            case 2:
            {
                $(".home__slide").fadeOut();
                $("#slide1").fadeIn();
                sliderDinamic = 1;
    
            };break;
                  
            case 3:
            {
                $(".home__slide").fadeOut();
                $("#slide2").fadeIn();
                sliderDinamic = 2;
    
            };break;
                              
            case 4:
            {
                $(".home__slide").fadeOut();
                $("#slide3").fadeIn();
                sliderDinamic = 3;
    
            };break;
                                           
            case 5:
            {
                $(".home__slide").fadeOut();
                $("#slide4").fadeIn();
                sliderDinamic = 4;
    
            };break;
                  

          };
        
        // сброс и перезапуск таймера
        
        clearInterval(idTimer);
        idTimer = setInterval("sliderNext();", intervalTime)
        
 


    }; 
    
    
//__________________________________________________ 
    
    


// next

function sliderNext() {


    
    
  
      $("#wrapper").removeClass('wrapp--bott');  
        
      switch(sliderDinamic)
          {
            case 1:
            {
                $(".home__slide").fadeOut();
                $("#slide2").fadeIn();
                sliderDinamic = 2;
    
            };break;
            case 2:
            {
                $(".home__slide").fadeOut();
                $("#slide3").fadeIn();
                sliderDinamic = 3;
    
            };break;
                  
            case 3:
            {
                $(".home__slide").fadeOut();
                $("#slide4").fadeIn();
                sliderDinamic = 4;
    
            };break;
                  
            case 4:
            {
                $(".home__slide").fadeOut();
                $("#slide5").fadeIn();
                sliderDinamic = 5;
    
            };break;
                              
            case 5:
            {
                $(".home__slide").fadeOut();
                $("#slide1").fadeIn();
                sliderDinamic = 1;
    
            };break;
                  

          };
    
    
    // сброс и перезапуск таймера

    clearInterval(idTimer);
    idTimer = setInterval("sliderNext();", intervalTime)



};




$(document).ready(function() {

    var  
        scrollTop = 0;
 
        subscribeClick = 0;  // переменная чекбокса подписки
        sliderDinamic = 1;   // переменная слайдера
        intervalTime = 8000; // интервал прокрутки слайдера
        idTimer = setInterval("sliderNext();", intervalTime) // ротация слайдера
 
        
        
    // сбрасываем ротацию банера при работе с формами
        
    $("input").click(function () {
    
        clearInterval(idTimer);
        
     });
    
    
    
    
    
    // вызов слайдера
        
    $(".home__slide__nav__item--next").click(function() {
      
        sliderNext();
        
     });
        
    
    $(".home__slide__nav__item--prev").click(function() {
        sliderPrev(); 
    });
    
    
    
    
// grid for comments (нестандартное выравнивание) 
   
    
    $('#mesonry').masonry({
        // options
        itemSelector: '.comments__comments-grid__item'
    });
  
//__________________________________________________
    
    
    
    
// (скроллит до верха и открывает нужный слайд) при добавления курса, добавляем case в функции sliderPrev() и sliderNext() и здесь
// scroll 5 kurs и т. д.
    
    
// scroll 1 kurs 

    
    $("#one_kurs").click(function () {
        
        
        $("#homeblock").fadeIn();       
        $(".kurs").fadeOut();
        $(".kurs__button-block").fadeOut();
        $("#wrapper").removeClass('no-slider')     
        $(".home__slide").fadeOut();
        $("#slide2").fadeIn();
        sliderDinamic = 2;
                
        // сброс и перезапуск таймера
        
        clearInterval(idTimer);

        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
        
// scroll 2 kurs
    
    $("#two_kurs").click(function () {
        
        $("#homeblock").fadeIn();       
        $(".kurs").fadeOut();
        $(".kurs__button-block").fadeOut();
        $("#wrapper").removeClass('no-slider');                  
        $(".home__slide").fadeOut();
        $("#slide3").fadeIn();
        sliderDinamic = 3;
                
        // сброс и перезапуск таймера
        
        clearInterval(idTimer);

        
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
            
// scroll 3 kurs
    
    $("#tree_kurs").click(function () {
        
        $("#homeblock").fadeIn();       
        $(".kurs").fadeOut();
        $(".kurs__button-block").fadeOut();
        $("#wrapper").removeClass('no-slider');           
        $(".home__slide").fadeOut();
        $("#slide4").fadeIn();
        sliderDinamic = 4;
        
                
        // сброс и перезапуск таймера
        
        clearInterval(idTimer);

        
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
    
                
// scroll 4 kurs
    
    $("#four_kurs").click(function () {
        
        $("#homeblock").fadeIn();       
        $(".kurs").fadeOut();
        $(".kurs__button-block").fadeOut();
        $("#wrapper").removeClass('no-slider');        
        $(".home__slide").fadeOut();
        $("#slide5").fadeIn();
        sliderDinamic = 5;
                
        // сброс и перезапуск таймера
        
        clearInterval(idTimer);
        
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });  
    
//__________________________________________________ 
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// scroll to for menu (спуск до якоря для десктоп)
    
    $("a.scrl").click(function () {
        
        $(".mobile-menu").fadeOut();
        $("#mobilemenuclose").fadeOut();
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
// scroll to for menu (спуск до якоря для мобилы)
        
    $("a.mob-cont").click(function () {
        
        $(".mobile-menu").fadeOut();
        $("#mobilemenuclose").fadeOut();
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 80;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
//__________________________________________________
    
    
    
    
    
    

    
    
    

    
// open callpopup (открытие формы заказа звонка)
    
    
    $(window).scroll(function() {
 
        scrollTop = $(this).scrollTop();
 
    }); 
    

    
    
    $("#callopen").click(function() {
        
        
        if (scrollTop < 100)
        
            {
    
                $('#homeblock').addClass('call--active--wrapper');
                $('#wrapper').addClass('call--active--wrapper');
                $('#popupcall').addClass('call--active');
                
            }
        
        else
            {
            
                $('#popupcall').addClass('call--active');
                
            }
        
        
    });   
    
    

    
    // mobile 
    
    $("#mobileopencall").click(function() {
        

        $('#popupcall').addClass('call--active');
        $(".mobile-menu").fadeOut();
         
        
    });   
    
    
//__________________________________________________ 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// close callpopup (закрытие телефонной формы)
        
    $(".closepopupcall").click(function() {
        
        // test for tanks 
        //$('#call-form').fadeOut(400);
        //$('#call-tanks').fadeIn(400);
    
        $('#homeblock').removeClass('call--active--wrapper');
        $('#wrapper').removeClass('call--active--wrapper');
        $('#popupcall').removeClass('call--active');
    
    }); 
    
    
    
    
    
    
    
    
    
     //$("#mobsliders").click(function() {
         
          //$("#slide2").fadeIn();
          //$("#slide3").fadeIn();
          //$("#slide4").fadeIn();
          //$("#slide5").fadeIn();
    
    
    
    
     //});
    
    
    
    
    
    
     // открытие формы на мобиле
    
    
     $("#mob-form-open1").click(function() {
                $("#slide2").removeClass('mobile-mail-go');
                $("#slide2").addClass('mobile-active');
                $("#wrapper").addClass('wrapp--bott');
                $("#mobileformsk1").fadeIn();
                var elementClick = $(this).attr("href")
                var destination = $('#mobileformsk1').offset().top - 40;
                jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
                return false;
     });
        
     $("#mob-form-open2").click(function() {
                $("#slide3").removeClass('mobile-mail-go');
                $("#slide3").addClass('mobile-active');
                $("#wrapper").addClass('wrapp--bott');
                $("#mobileformsk2").fadeIn(); 
                var elementClick = $(this).attr("href")
                var destination = $('#mobileformsk2').offset().top - 40;
                jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
                return false;
     });
            
     $("#mob-form-open3").click(function() {
                $("#slide4").removeClass('mobile-mail-go');
                $("#slide4").addClass('mobile-active');
                $("#wrapper").addClass('wrapp--bott');
                $("#mobileformsk3").fadeIn();
                var elementClick = $(this).attr("href")
                var destination = $('#mobileformsk3').offset().top - 40;
                jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
                return false;
     });
                
     $("#mob-form-open4").click(function() {
                $("#slide5").removeClass('mobile-mail-go');
                $("#slide5").addClass('mobile-active');
                $("#wrapper").addClass('wrapp--bott');
                $("#mobileformsk4").fadeIn();
                var elementClick = $(this).attr("href")
                var destination = $('#mobileformsk4').offset().top - 40;
                jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
                return false;
     });
    
    
    
    // for subscribe news studio  (для чекбокса)
    
    
    $(".home__slide__article__form-desc").click(function() {
        
        
        if ( subscribeClick == 0)
            
            {        
                $(".home__slide__article__form-desc_radio_radio-hidden").trigger('click');
                $(".home__slide__article__form-desc").addClass('active');
                subscribeClick = 1;
                
            }
        
        else
            
            {
                $(".home__slide__article__form-desc_radio_radio-hidden").trigger('click');
                $(".home__slide__article__form-desc").removeClass('active');
                subscribeClick = 0;             
            }
            
            
    });
    
    
//__________________________________________________ 
    
    
    
    
    
    
    
    
    
    

    
    
// mobile menu
    
$("#mobilemenuopen").click(function() {
        
    $("#mobilemenuclose").fadeIn();
    $(".mobile-menu").fadeIn();
       
});  
    
      
    
// yap
    
$("#yap2").click(function() {
        
    $("#kurs").fadeIn();
    $("#homeblock").fadeOut();
    $("#wrapper").addClass('no-slider')   
    $(".kurs__button-block").fadeIn();
    $("#process").css("top" , "-1px")
    

    
       
});  
    
     
// yap2
    
$("#yap").click(function() {
        
    $(".kurs").fadeIn();
    $("#homeblock").fadeOut();
    $("#wrapper").addClass('no-slider')   
    $(".kurs__button-block").fadeIn();

    
       
});  
    
        
$("#mobilemenuclose").click(function() {
        
    $("#mobilemenuclose").fadeOut();
    $(".mobile-menu").fadeOut();
    $('#popupcall').removeClass('call--active');
       
});  
    
        
    
//__________________________________________________ 
    
    
        
    
    
    
    
    
    
// (Выравнивание высоты)
    
    
//$('.kurs__item__content_title').equalHeights();
//$('.kurs__item__content_desc').equalHeights();

    
//__________________________________________________ 
    
    
    
    
    
    
    
    
});

  
$(window).resize(function() {
        
    $('.kurs__item__content_title').equalHeights();
    $('.kurs__item__content_desc').equalHeights();
  
}); 
    
    