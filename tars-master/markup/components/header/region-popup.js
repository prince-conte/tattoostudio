openRegionClick = 0;

function openRegion() {
    
  
    
    
    if (openRegionClick == 0) {
    
        $("#header_region_sub").fadeIn(200);
        openRegionClick = 1;
        
}

    else {
        
        $("#header_region_sub").fadeOut(200);
        openRegionClick = 0;
        
        
    }
    
}
  