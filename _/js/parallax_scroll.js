(function($,window){

	$.fn.parallaxScroll = function(options) {

		return this.each(function(){

			var $target = $(this);

			var defaults = {
				scrollSpeed : 1.2
			}
			var opts = $.extend({},defaults,options);

			//parallax scroll
			var beginOffset = $target.offset().top;
			var endOffset = beginOffset+$target.height()+200;
			var offset = 100;
			$(window).scroll(function(e){
				var scrollTop = $(this).scrollTop();
				var winHeight = $(this).height();
				if(winHeight>beginOffset) {
					if(scrollTop>=beginOffset-offset && scrollTop<=endOffset-offset) {
						var targetOffset = (scrollTop-beginOffset) / opts.scrollSpeed;
						$target.css("background-position","50% "+targetOffset+"px");
					}			
				} else {
					if(scrollTop+winHeight>=beginOffset && scrollTop<=endOffset) {
						var targetOffset = Math.floor((scrollTop-beginOffset) / opts.scrollSpeed);
						$target.css("background-position","50% "+targetOffset+"px");
					}
				}


			});
		})

	}

})(jQuery,window)