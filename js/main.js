
$(document).ready(function(){
	
	
	
	
	
	// convert all SVG's into png's for browsers that don't support svg's
	
	
	if (!Modernizr.svg){
	
		$('img[src$=".svg"]').each(function(){
			var $this = $(this);
			$this.attr('src',$this.attr('src').replace(/svg$/, 'png'));
		});
		
	};
	

	// Smooth scroll
	
	'use strict';

	    // Cut the mustard
	    var supports = 'querySelector' in document && 'addEventListener' in window;
	    if ( !supports ) return;

	    // Get all anchors
	    var anchors = document.querySelectorAll( '[href*="#"]' );

	    // Add smooth scroll to all anchors
	    for ( var i = 0, len = anchors.length; i < len; i++ ) {
	        var url = new RegExp( window.location.hostname + window.location.pathname );
	        if ( !url.test( anchors[i].href ) ) continue;
	        anchors[i].setAttribute( 'data-scroll', true );
	    }
		
		

	smoothScroll.init({
    	selector: '[data-scroll]',
		easing: 'easeOutQuad',
		speed:2000
	});

	
	
});