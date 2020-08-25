
jQuery(document).ready(function()
{
	jQuery('.galleryImage').hover(
		function()
		{
		
		jQuery(this).find('img').animate({width:316,height:309, marginTop:-309, marginLeft:0},600);
		   
		 },
		 function()
		 {
			 
			 jQuery(this).find('img').animate({width:316,height:309, marginTop:0, marginLeft:0},900);
			 
		 });
});

                       
                   
