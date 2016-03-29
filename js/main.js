
$(document).ready(function(){
	
	
	// menu
  
  var themenu = $('.nav').html();
  $('.menu__inner').html(themenu);
  
  
  var menuopen = false;
  
  $('.nav__button').on('click',function(){
    
    if ( !menuopen ){
    
        $('.menu').animate({
          width:'30%'
        },600,function(){
          $('header .nav__button').fadeOut(600);
          $('.menu__inner').fadeIn(600).find('.nav__button').html(' <i class="fa fa-close"></i> Close menu ');
        });
        menuopen = true;
    
    } else {
        
        $('.menu__inner').fadeOut(600,function(){
          $('.menu').animate({
            width:'0'
          },600,function(){
            $('.menu__inner').find('.nav__button').html(' <i class="fa fa-bars"></i> Menu ');
            $('header .nav__button').fadeIn(600);
          });
        });
      
      menuopen = false;
        
    }
    
  });
  
  
	
  
	
	// convert all SVG's into png's for browsers that don't support svg's
	
	
	if (!Modernizr.svg){
	
		$('img[src$=".svg"]').each(function(){
			var $this = $(this);
			$this.attr('src',$this.attr('src').replace(/svg$/, 'png'));
		});
		
	}

	
	
});