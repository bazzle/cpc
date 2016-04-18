
$(document).ready(function(){
	
	
	// menu
  
  var themenu = $('.nav').html();
  $('.menu__inner').html(themenu);
  
  
  var menuopen = false;
  
  $('.nav__button').on('click',function(){
    
    if ( !menuopen ){

        $('header .nav__button').fadeOut(200,function(){
          $('.menu').animate({
            width:'300px',
          },600,'easeInOutExpo',function(){
            $('.menu__inner').fadeIn(200).find('.nav__button').html(' <i class="fa fa-close"></i> Close menu ');
          });
        });
        menuopen = true;
    
    } else {
        
        $('.menu__inner').fadeOut(200,function(){
          $('.menu').animate({
            width:'0'
          },600,'easeInOutExpo',function(){
            $('.menu__inner').find('.nav__button').html(' <i class="fa fa-bars"></i> Menu ');
            $('header .nav__button').fadeIn(200);
          });
        });
      
      menuopen = false;
        
    }
    
  });
  
  
  window.onload = function(){
    vivuscontent();
  };
  
  

  
  
  
  // Vivus load
  
  var contentplayed = false;
  var phoneplayed = false;
  
  function vivuscontent(){
    
    if ( !contentplayed ){
      new Vivus('outline__content', {
        duration: 80,
        type:'delayed',
        animTimingFunction: Vivus.EASE
      },function(){
        contentplayed = true;
      });
    }
  }

  
  function vivusphone(){
    
    if ( !phoneplayed ){
      vivusphonevar = new Vivus('outline__phone', {
        duration: 80,
        type:'delayed',
        animTimingFunction: Vivus.EASE
      },function(){
        phoneplayed = true;
      });
    }
  }
  
  
  
  
	
  // Cycle2 init
  
  $('#head__backgrounds').cycle({
    slides:'> div',
    easing:'easeInOutExpo',
    paused:true,
    speed:600
  });
  
  // Hover buttons
  
  $('#trigger--content').on('mouseenter',function(){
    $('#head__backgrounds').cycle('goto',0);
  });
  $('#trigger--web').on('mouseenter',function(){
    $('#head__backgrounds').cycle('goto',1);
    vivusphone();
  });
  $('#trigger--seo').on('mouseenter',function(){
    $('#head__backgrounds').cycle('goto',2);
  });
  
	
	// convert all SVG's into png's for browsers that don't support svg's
	
	
	if (!Modernizr.svg){
	
		$('img[src$=".svg"]').each(function(){
			var $this = $(this);
			$this.attr('src',$this.attr('src').replace(/svg$/, 'png'));
		});
		
	}
  
  
  
  
  


  

	
	
});