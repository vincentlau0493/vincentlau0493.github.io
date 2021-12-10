function positionItem(){

	var itemWidth = $(".animate-gallery").find(".gallery-item:first-child").width();
	var itemHeight = $(".animate-gallery").find(".gallery-item:first").height();


	var galleryWidth = $(".animate-gallery").find(".gallery-container").width();
	var itemTotal = $(".animate-gallery").find(".gallery-item.show-item").length;

	var columnTotal = 0;
	var rowTotal = 0;

	var row = -1;
	var col = -1;

	if(galleryWidth<itemWidth+itemHorizontalSpace) {
		columnTotal = 1;

	} else {
		columnTotal = Math.floor(galleryWidth / (itemWidth+itemHorizontalSpace));		
	}


	$(".animate-gallery").find(".gallery-item.show-item").each(function(index){
		var itemLeft = 0;
		var itemTop = 0;

		col = index % columnTotal
		if(col != 0 ) {
			itemLeft = col*(itemWidth+itemHorizontalSpace);
			itemTop = row*(itemHeight+itemVerticalSpace);
		} else {
			row++;
			itemLeft = 0;
			itemTop = row*(itemHeight+itemVerticalSpace);
		}

		$(this).css("display","block").animate({
			left:itemLeft,
			top:itemTop,
			opacity:1
		},500);
		//$(this).animate({left:itemLeft},250);


	});
	rowTotal = row+1;
	//reset container
	var newWidth = columnTotal*(itemWidth+itemHorizontalSpace)-itemHorizontalSpace;
	var newHeight = rowTotal*(itemHeight+itemVerticalSpace)-itemVerticalSpace;
	$(".animate-gallery").find(".item-container").css({width:newWidth,height:newHeight});
	//reset tag container
	$(".animate-gallery").find(".tab-container").css("width",newWidth);


}


function checkWindowSize(){
	console.log('check');
	var itemWidth = $(".animate-gallery").find(".gallery-item:first-child").width();

	var galleryWidth = $(".animate-gallery").find(".gallery-container").width();
	var containerWidth = $(".animate-gallery").find(".item-container").width();
	// console.log("galleryWidth",galleryWidth);
	// console.log("containerWidth",containerWidth);
	if(galleryWidth< containerWidth || containerWidth <(galleryWidth+itemWidth)) {



		positionItem();
	}	
}


function filterItem(keyword) {
	var $target = $(".animate-gallery").find(".gallery-item");
	if(keyword=="all") {
		$target.addClass("show-item");
	} else {
		$target.each(function(){
			var tags = $(this).data("tag");
			if(tags.indexOf(keyword) != -1) {
				$(this).addClass("show-item");
			} else {
				$(this).removeClass("show-item").css("display","none");
			}
		});		
	}
	positionItem();

}