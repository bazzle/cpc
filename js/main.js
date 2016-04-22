
$(document).ready(function(){
  

  
  
  
  
  // Snap to panels
  
  function snapscroll(){
    
  	$(window).on('load',function(){
	  
  		$.scrollify({
  		  section : ".scroll-section"
      });
    
  	});
    
  }

	
	
	// menu  
  
  function burgermenu(){
    
    
    var themenu = $('.header__nav').html();
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
    
    
  }
  
  


  
  enquire
  .register("screen and (max-width:900px)", {
    match : function() {
      burgermenu();
    }
  })
  .register("screen and (min-width:900px)", {
    match : function() {
      snapscroll();
    },
    unmatch : function() {
    }
  });
  
  
  
  
  
  
  
  // Vivus load
  
  var contentplayed = false;
  var phoneplayed = false;
  var widthwindow = $(window).width();
  
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
  
  
  var thewindow = $(window);
  
  thewindow.on('load',function(){
    if ( thewindow.width() > 900 && Modernizr.svg ){
      vivuscontent();
    }
  });
  
	
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
    if ( thewindow.width() > 900 && Modernizr.svg ){
      vivusphone();
    }
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