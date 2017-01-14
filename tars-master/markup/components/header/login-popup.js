openLoginClick = 0;

function openLogin() {
    
  
    
    
    if (openLoginClick == 0) {
    
        $("#header_login_sub").fadeIn(300);
        openLoginClick = 1;
        
}

    else {
        
        $("#header_login_sub").fadeOut(300);
        openLoginClick = 0;
        
        
    }
    
}
  