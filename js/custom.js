// floating menu 
    $('.burger-menu').click(function(){
        $('.floating-menu').css({
                'animation-name' : 'float_menu',
                'animation-duration' : '1s',
                'animation-iteration-count' :'1',
                'animation-fill-mode':'forwards'
        });
        $('.menu').css({'padding':'0px'});
        $('.overlay').css({'display':'block'});
        $(this).hide("slow");
    });
//float_menu_inverse(){
    $('.overlay ,.close-menu').click(function(){
        $('.overlay').css({'display':'none'});
        $('.floating-menu').css({
            'animation-name' : 'float_menu_inverse',
                'animation-duration' : '1s',
                'animation-iteration-count' :'1',
                'animation-fill-mode':'forwards'
            });
            $('.burger-menu').show("slow");
    })

//show dropdown menu 

// $('.plus-menu').click(function(){

//     $(this).parent().next().slideToggle();

// })
  
    // $('.nav').hide();
  
  
    $('.plus-menu').on('click', function() {
    //   $('.nav').slideToggle('600');
      $(this).parent().next().slideToggle('600')
      $(this).children(":first").toggleClass('fa-plus  fa-minus');
        // if($(this).children(":first").hasClass('fa-plus')){
        //     console.log($(this).children(":first"));
        //     $(this).children(":first").css({'color':'red'});
        // }
        $('.plus-menu').not(this).removeClass('active')
        $(this).addClass('active');


      
    //   console.log($(this).parent().next());
    });
