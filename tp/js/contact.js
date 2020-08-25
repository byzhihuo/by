jQuery(function () {
	var contachTop = 100; // 右侧联系我们默认高度
	function Qust_contachScroll (){
		var st = 0;
		if (document.documentElement && document.documentElement.scrollTop) {
			st = document.documentElement.scrollTop;
		} else if (document.body) {
			st = document.body.scrollTop;
		}
		
		var contactTop = jQuery(".qust_contach").offset().top;
		var height = jQuery(".qust_contach").height();
		
		if ( st>80) {
			var top = (document.documentElement.clientHeight  - height)/2+st -80;
			
			jQuery(".qust_contach").stop().animate(
				{
					top: top
				},300,null,function(){
					jQuery("#toTop").stop().animate({
						height:45
					});
				});
		} else {
			var top = (document.documentElement.clientHeight  - height)/2 -80;
			//jQuery(".qust_contach").css({
			//top: top
			//});
			if(top<=0)
			{
				top=contachTop
			}
			jQuery(".qust_contach").stop().animate(
				{
					top: top
				},300,null,function(){
					jQuery("#toTop").stop().animate({
						height:0
					});
				});
		}
	}
	
	function qust_showScroll(){
		var st = 0;
		if (document.documentElement && document.documentElement.scrollTop) {
			st = document.documentElement.scrollTop;
		} else if (document.body) {
			st = document.body.scrollTop;
		}
		
		var contactTop = jQuery(".qust_show").offset().top;
		var height = jQuery(".qust_show").height();
		
		if ( st>80) {
			var top = (document.documentElement.clientHeight  - height)/2+st -80;
			
			jQuery(".qust_show").stop().animate(
				{
					top: top
				},300);
		} else {
			var top = (document.documentElement.clientHeight  - height)/2 -80;
			//jQuery(".qust_contach").css({
			//top: top
			//});
			if(top<=0)
			{
				top=contachTop
			}
			jQuery(".qust_show").stop().animate(
				{
					top: top
				},300);
		}
	}
	
	Qust_contachScroll();
	qust_showScroll();
	jQuery(window).scroll(function () {
		Qust_contachScroll();
		qust_showScroll();
	});
	jQuery(window).resize(function () {
		Qust_contachScroll();
		qust_showScroll();
	});
	
	jQuery(".qst_close").click(function(){
		jQuery(".qust_contach").fadeOut(function(){jQuery(".qust_show").fadeIn();});
		
	});
	jQuery(".qust_show").click(function(){
		
		jQuery(".qust_show").fadeOut(function(){jQuery(".qust_contach").fadeIn();});
	});
	jQuery("#toTop").click(function(){
		jQuery(".qust_contach").stop().animate(
			{
				top: contachTop
			},300);
		jQuery("html, body").animate({ scrollTop: 0 }, 300);			
		
	});
	
	
});
