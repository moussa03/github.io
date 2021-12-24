// floating menu 
    $('.burger-menu').click(function(){
        $('.floating-menu').show("slow");
        // $('.call_to_action').css({'display':'none!important'});
        // if(jQuery(window).width() >= 992){
        //     $('.hide_call').hide();
        // }
       
        $('.floating-menu').css({
                'animation-name' : 'float_menu',
                'animation-duration' : '1s',
                'animation-iteration-count' :'1',
                'animation-fill-mode':'forwards',
                'position':'fixed',
                'right': '0',
                'top': '0px'
              
        });

        
        // $('.menu').css({'padding':'0px'});
        // $('.container').css({'margin-right':'0px'});
        $('.overlay').css({'display':'block'});
        // $(this).delay(100).hide("slow");
        // $(this).hide();
    });
    
// floating menu on pc 



//float_menu_inverse(){
    $('.overlay ,.close-menu').click(function(){
        $('.overlay').css({'display':'none'});
        $('.floating-menu').css({
            'animation-name' : 'float_menu_inverse',
                'animation-duration' : '5s',
                'animation-iteration-count' :'1',
                'animation-fill-mode':'forwards'
            });
            $('.burger-menu').show("slow");
             $('.container').css({'margin-right':'auto'});
            $('.floating-menu').hide("slow");
            $('.hide_call').show();
    })
  
    /* drop down mobile */
    $('.plus-menu').on('click', function() {
      $(this).parent().next().slideToggle('600')
      $(this).children(":first").toggleClass('bx-plus  bx-minus');
        $('.plus-menu').not(this).removeClass('active')
        $(this).addClass('active');
    });

    /* drop down pc */
    $('.header-menu li').hover(function(){
       
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children("ul").stop().slideDown(300);
          } else {
            $(this).children("ul").stop().slideUp(300);
          }

    })