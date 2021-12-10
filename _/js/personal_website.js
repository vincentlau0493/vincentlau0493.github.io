//animation gallery
var itemVerticalSpace = 20;
var itemHorizontalSpace = 20;

$(document).ready(function(){

	//set welcome height
	var winHeight = $(window).height();
	$("#welcome").css("height",winHeight);




	//typing effect
	var options = {
		delay_after_typing : 7, //how many times of typing_interval
		typing_interval : 100,
		interval_for_word : 500,
		keep_final_word : true,
		cursor_interval : 400,
		delay : 1000, //when to begin typing
		infinite : false,
		contents : ["I'M VINCENT,","A FRONTEND DEVELOPER,","ALSO I LOVE DESIGN.", "PLEASE CLICK THAT BUTTON!"]
	}

	//register event 
	$(".typing-box").one("typing",function(){
		
        $(this).typingBox(options);
    });

	$(window).scroll(function(){
		var scroll_top = $(window).scrollTop();

		var $node = $(".typing-box");
		var node_top = $node.offset().top;
		if(scroll_top>node_top-300 && scroll_top<node_top+300 ) {
			$node.trigger("typing");
		} 
	});	


	$(".parallax-scroll").parallaxScroll();




	//slide side panel
	$("#about .my-button").on("click",function(){
		var $slidePanel = $(".side-info");
		//var slideOffset = $slidePanel.width();
		// $("body,html").css("overflow","hidden"); //prevent scroll
		$slidePanel.animate({
			right:0
		},500);
	});
	//hide
	$(".side-info .close-icon").on("click",function(){
		var $slidePanel = $(".side-info");
		var slideOffset = $slidePanel.outerWidth();
		// $("body,html").css("overflow","scroll"); //scroll
		$slidePanel.animate({
			right:-slideOffset
		},500);
	});

	// $(window).scroll(function(e){
	// 	$("body,html").css("overflow","hidden");
	// });


	//skill expand panel
	$(".expand-icon").on("click",function(){
		var $left_mask = $(this).parent().find(".left-mask");
		var $right_mask = $(this).parent().find(".right-mask");
		
		$left_mask.animate({
			left: "-50%"
		},800);
		$right_mask.animate({
			right: "-50%"
		},800);
		$(this).fadeOut(1000);

	})


	//timeline
	$(window).scroll(function(){
		var scroll_top = $(window).scrollTop();

		var $nodes = $(".timeline-container .timeline-node");
		$nodes.each(function(){
			var node_top = $(this).offset().top;
			if(scroll_top>node_top-300) {
				$(this).find(".timeline-progress").addClass("timeline-active");
			} else {
				$(this).find(".timeline-progress").removeClass("timeline-active");
			}
		})
	});
	// $(".expand-icon").trigger("click");




	//animate skill panel
	// $('#skill').on('click','.down-icon,.up-icon',function(){
	// 	if($(this).hasClass('down-icon')) {
	// 		$(this).closest('.hidding-panel').removeClass('show-it');
	// 		var $hidden_panel = $(this).closest('.hidding-panel');
	// 		setTimeout(function(){
	// 			$hidden_panel.find('.skill-progress').css('width','0');
	// 		},500)
	// 	} else {
	// 		$(this).closest('.hidding-panel').addClass('show-it');
	// 		var $hidden_panel = $(this).closest('.hidding-panel');
	// 		setTimeout(function(){
	// 			$hidden_panel.find('.progress-animating').progressAnimating();
	// 		},500)
	// 	}
	// });


	$('#skill .skill-icon').one('click',function(){

		var $target_nodes = $(this).closest(".skill-item").find(".skill-bar");
		$target_nodes.progressAnimating();

	});

	//trigger to click skill icon
	$(window).scroll(function(){
		var scroll_top = $(window).scrollTop();

		var $nodes = $("#skill .skill-item");
		$nodes.each(function(){
			var node_top = $(this).offset().top;
			if(scroll_top>node_top-280 && scroll_top<node_top+280) {
				$(this).find(".skill-icon").trigger("click");
			} 
		})
	});	
	



	//animation gallery for works
	$(".animate-gallery").find(".gallery-item").addClass("show-item");

	positionItem();
	$(window).resize(checkWindowSize);
	//setInterval(checkWindowSize,750);
	$(".animate-gallery").on("click",".tab-container a",function(e){
		e.preventDefault();
		$(".animate-gallery a[data-keyword]").removeClass("tab-selected");
		var keyword = $(this).data("keyword");
		$(this).addClass("tab-selected");
		filterItem(keyword);

	})


	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});


	$("[data-target]").each(function(){

		var target_section = $(this).attr("data-target");
		// alert(target_section);
		var target_top = $("#"+target_section).offset().top;

		$(this).click(function(){
			$("html,body").animate({
				scrollTop:target_top
			},750);			
		})


	})


})



