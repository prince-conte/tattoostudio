$(document).ready(function() {

    var  
        scrollTop = 0;
        subscribeClick = 0;
        sliderDinamic = 1;
   
    
// scroll to
    
    $("a.scrl").click(function () {
        
        $(".mobile-menu").fadeOut();
        $("#mobilemenuclose").fadeOut();
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
    
    
    
    
// scroll one kurs
    
    $("#one_kurs").click(function () {
        
                
        $(".home__slide").fadeOut();
        $("#slide2").fadeIn();
        sliderDinamic = 2;
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
        
// scroll two kurs
    
    $("#two_kurs").click(function () {
        
                
        $(".home__slide").fadeOut();
        $("#slide3").fadeIn();
        sliderDinamic = 3;
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
            
// scroll two kurs
    
    $("#tree_kurs").click(function () {
        
                
        $(".home__slide").fadeOut();
        $("#slide4").fadeIn();
        sliderDinamic = 4;
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
    
                
// scroll two kurs
    
    $("#four_kurs").click(function () {
        
                
        $(".home__slide").fadeOut();
        $("#slide5").fadeIn();
        sliderDinamic = 5;
        
        
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;

    });
    
    
    
    
    
    
    
    
    
    
    
// grid for comments 
   
    
    $('#mesonry').masonry({
        // options
        itemSelector: '.comments__comments-grid__item'
    });
  
    
// open callpopup
    
    
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
    
    
    
    
    
       
    
    $("#mobileopencall").click(function() {
        

        $('#popupcall').addClass('call--active');
        $(".mobile-menu").fadeOut();
        
                

        
        
    });   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// close callpopup    
        
    $(".closepopupcall").click(function() {
        
        // test for tanks 
        //$('#call-form').fadeOut(400);
        //$('#call-tanks').fadeIn(400);
    
        $('#homeblock').removeClass('call--active--wrapper');
        $('#wrapper').removeClass('call--active--wrapper');
        $('#popupcall').removeClass('call--active');
    
    }); 
    
    
    
// for subscribe news studio  
    
    $("#home__slide__article__form-desc").click(function() {
        
        
        if ( subscribeClick == 0)
            
            {        
                $("#home__slide__article__form-desc_radio_radio-hidden").trigger('click');
                $("#home__slide__article__form-desc").addClass('active');
                subscribeClick = 1;
            }
        
        else
            
            {
                $("#home__slide__article__form-desc_radio_radio-hidden").trigger('click');
                $("#home__slide__article__form-desc").removeClass('active');
                subscribeClick = 0;             
            }
            
            
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    $(".home__slide__nav__item--prev").click(function() {
        
    
        
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
                  

          } 
        
    });
    
    
    

    // slider    
    
    $(".home__slide__nav__item--next").click(function() {
        
    
        
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
                  

          } 
        
    });
    
    
    
    
    
   
    
    
    
$("#mobilemenuopen").click(function() {
        
    $("#mobilemenuclose").fadeIn();
    $(".mobile-menu").fadeIn();
       
});  
    
        
$("#mobilemenuclose").click(function() {
        
    $("#mobilemenuclose").fadeOut();
    $(".mobile-menu").fadeOut();
    $('#popupcall').removeClass('call--active');
       
});  
    
    
    
    
    
    
    
    
    
    
    
    
    
$('.kurs__item__content_title').equalHeights();
$('.kurs__item__content_desc').equalHeights();
    
    
    
    
    
    
    
    
    
});

