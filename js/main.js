
$(document).ready(function(){
  
  
  
  // Maintain height of panels
  
  function panelheight(){
    
    $(window).on('load resize',function(){
      
      var windowwidth = $(this).width();
      var windowheight = $(this).height();
      
      if ( windowwidth >= 900 ){
        $('.main__panel').height(windowheight);
      } else {
        $('.main__panel').height('auto');
      }   
    
    });
    
  }  

  panelheight();
  

  
  $(window).on('load',function(){
  
    $('.load-overlay').fadeOut(200);
  
  });
  
  
  // How many scroll sections on the page
  
  //var secondlastsection = $('.scroll-section:eq(-2)').addClass('secondlast');
  
  //var currentsection
  
  
  
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
      snapscroll();
    },
    unmatch : function() {
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
  
  
  
  
  


  

	
	
});