
$(document).ready(function(){
  
  
  
  
	// menu
  
  function burgermenu(){
    
    menuopen = false;
  
    $('.nav__button').on('click',function(){
    
      if ( !menuopen ){

        $('nav').stop().slideDown(400);
          menuopen = true;
    
      } else {
        
         $('nav').stop().slideUp(400);
        menuopen = false;
        
      }
    
    });
    
  }
  
  
  
  
  
  
  // Maintain height of panels
  
  function panelheight(){
    
    $(window).on('load resize',function(){
      
      var windowwidth = $(this).width();
      var windowheight = $(this).height();
      
      if ( windowwidth >= 900 ){
        $('.autoheight').height(windowheight);
      } else {
        $('.autoheight').height('auto');
      }   
    
    });
    
  }
  
  panelheight();
  

  
  $(window).on('load',function(){
  
    $('.load-overlay').fadeOut(200);
  
  });
  
  
  
  // Snap to panels
  
  function snapscroll(){
    
  	$(window).on('load',function(){
      
  		$.scrollify({
  		  section : ".scroll-section",
        setHeights: false
      });
      
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
      if ( !$('body').hasClass('landing-page') ){
        snapscroll();
        $.scrollify.enable();
      }
    },
    unmatch : function() {
      $.scrollify.disable();
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
  
  
  
  
  


  // date in footer

  var date = new Date();
  var year = date.getFullYear();

  $('.date').html(year);
	
	
});