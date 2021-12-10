(function($){

	$.fn.progressAnimating = function(options){

		var defaults = {
			speed:500,
			delay:0
		}
		var opts = $.extend({},options,defaults);

		return this.each(function(){
			var $progress_bar = $(this).find('[data-progress]');
			$progress_bar.each(function(index){
				var $single_bar = $(this);
				var progress = $single_bar.attr('data-progress');
				if(progress < 0) {
					progress = 0;
				} else if(progress > 100) {
					progress = 100;
				}

				setTimeout(function(){
					$single_bar.animate({
						width:progress+'%'
					},opts.speed)
				},index*opts.delay,'ease')

			})
		})
	}



})(jQuery)