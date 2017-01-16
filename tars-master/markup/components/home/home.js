function homeSlider() {
    
    var sliderDinamic = 1;
    
    
    
    $(".home__slide__nav__item--prev").click(function() {
        
    
        
      switch(sliderDinamic)
          {
            case 1:
            {
                $(".home__slide").fadeOut();
                $("#slide3").fadeIn();
                sliderDinamic = 3;
    
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

          } 
        
    });
    
    
    

        
    
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
                $("#slide1").fadeIn();
                sliderDinamic = 1;
    
            };break;

          } 
        
    });
    
    
    

    }
    
    
    
    
    
    
