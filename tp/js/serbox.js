// JavaScript Document


//services
jQuery(".serBox").hover(
  function () {
	 jQuery(this).children().stop(false,true);
	 jQuery(this).children(".serBoxOn").fadeIn("slow");
     jQuery(this).children(".pic1").animate({right: -110},400);
     jQuery(this).children(".pic2").animate({left: 105},400);
     jQuery(this).children(".txt1").animate({left: -240},400);
     jQuery(this).children(".txt2").animate({right: 40},400);	 
	 }, 
  function () {
	 jQuery(this).children().stop(false,true);
	 jQuery(this).children(".serBoxOn").fadeOut("slow");
	 jQuery(this).children(".pic1").animate({right:105},400);
     jQuery(this).children(".pic2").animate({left: -110},400);
     jQuery(this).children(".txt1").animate({left: 40},400);
     jQuery(this).children(".txt2").animate({right: -240},400);	
  }
);


function serFocus(i) {
	jQuery(".servicesPop").slideDown("normal");
	changeflash(i);
	}
function closeSerPop() {jQuery(".servicesPop").slideUp("fast");}	


var currentindex=1;
function changeflash(i) {	
currentindex=i;
for (j=1;j<=6;j++){
	if (j==i) 
	{jQuery("#flash"+j).fadeIn("normal");
	jQuery("#flash"+j).css("display","block");
	jQuery("#f"+j).removeClass();
	jQuery("#f"+j).addClass("dq");
	}
	else
	{jQuery("#flash"+j).css("display","none");
	jQuery("#f"+j).removeClass();
	jQuery("#f"+j).addClass("no");}
}}
//function startAm(){
//timerID = setInterval("timer_tick()",7000);
//}
//function stopAm(){
//clearInterval(timerID);
//}
function timer_tick() {


    currentindex=currentindex>=3?1:currentindex+1;
	changeflash(currentindex);}
//jQuery(document).ready(function(){
//jQuery(".flash_bar div").mouseover(function(){stopAm();}).mouseout(function(){startAm();});
//startAm();
//});
