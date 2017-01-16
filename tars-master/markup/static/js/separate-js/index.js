$(document).ready(function() {

    var  scrollTop = 0
   
    homeSlider();
    
// scroll to
    
    $("a.scrl").click(function () {
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
    
    
// close callpopup    
        
    $("#closepopupcall").click(function() {
    
        $('#homeblock').removeClass('call--active--wrapper');
        $('#wrapper').removeClass('call--active--wrapper');
        $('#popupcall').removeClass('call--active');
    
    });   
    
});

