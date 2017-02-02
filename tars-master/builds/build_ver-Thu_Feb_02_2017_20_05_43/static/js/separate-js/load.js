  
$(document).pjax('.nav__sub-menu_item a, .news-block a, .mobile-menu__sub-menu__item a, .footer__sub-menu_item a', '.all-container', {fragment: '.all-container'});    
$(document).on('pjax:start', function() { NProgress.start(); });
$(document).on('pjax:end',   function() { NProgress.done();  });
    
