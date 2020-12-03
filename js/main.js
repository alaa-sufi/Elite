/*global "$","console" */
$(document).ready(function () {
    "use strict";
	
	/* start wait div*/
	$(".wait").css("display", "none");
	/*end wait div*/

	/*nav bar select */
	$(".navbar .navbar-nav .nav-link").click(function () {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	/*nav bar select */

	/*to resize a banner and item image*/
    $(".banner, .banner .carousel-item  ").height($(window).height());
	/*to resize a banner and item image*/
	
    /*image height choose*/
	if( $(window).width() >= "768"){$( ".choose .image").height($(".choose .info").innerHeight());}
	else{$(".choose .image").height("400")}
    /*image height choose*/
	
/*scroll*/
	$(window).scroll(function () {
   	/*start -- size navbar*/
        if ($(document).scrollTop() >= 50) {
            $(".navbar").css({ "padding": "0", "opacity": "0.97"});
            $(".navbar .navbar-brand").css({ "font-size": "20px", "padding": "0"});
			$("#arabic").css("border-width","0");
        } 
		else {
            $(".navbar").css({ "padding": "15px 0", "opacity": "1"});
            $(".navbar .navbar-brand").css({ "font-size": "40px", "padding": ".3125rem 0px"});
       		$("#arabic").css("border-width" , "1px");

		}
   /*end -- size navbar*/
    });
/*scroll*/
	
		/*increase number*/
//		$(".statistic").one ("click",function() {
//			 var elt , endNbr,i,speed = 10;
//				function incEltNbr(id) {
//				   elt = $(`#${id}`);
//				   endNbr = Number(elt.attr("data-num"));
//				 incNbrRec(0, endNbr, elt);
//				}
//				function incNbrRec(i, endNbr, elt) {
//	  if (i <= endNbr) {
//		elt.html(i);
//		setTimeout(function() {//Delay a bit before calling the function again.
//		  incNbrRec(i + 1, endNbr, elt);
//		}, speed);
//	  }
//	}
//				incEltNbr("num1"); 
//				incEltNbr("num2"); 
//				incEltNbr("num3"); 
//				incEltNbr("num4");
//		 }) ;
		/*increase number*/
	
/*resize*/
    $(window).resize(function () {
	/*to resize a banner &choose and item image*/
        $(".choose .image").height($(".choose .info").innerHeight());
		$(".banner, .banner .carousel-item  ").height($(window).height());
    	if($(window).width()>="768"){
		$(".choose .image").height($(".choose .info").innerHeight());}
		else{$(".choose .image").height("400")}
	/*to resize a banner &choose and item image*/
	});
/*resize*/

	/*start shuffle*/
	$(".controls a").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		console.log("ok");
	});
		var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
		var mixer = mixitup(containerEl, {
			selectors: {
				target: '[data-ref~="mixitup-target"]'}});
	/*end shuffle*/
	
});