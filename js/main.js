
$(document).ready(function(){
	
	
	// menu
  
  
  $('.header__button').on('click',function(){
    $('.menu').animate({
      width:'30%'
    });
  });
  
	
	
	// convert all SVG's into png's for browsers that don't support svg's
	
	
	if (!Modernizr.svg){
	
		$('img[src$=".svg"]').each(function(){
			var $this = $(this);
			$this.attr('src',$this.attr('src').replace(/svg$/, 'png'));
		});
		
	}

	
	
});