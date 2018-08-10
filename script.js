
$(document).ready( function (){


	var height = 995;
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		$('.logo-2').css("opacity", $(window).scrollTop()/height);
		$('.logo-1').css("opacity", 1-$(window).scrollTop()/height);

	});


	console.log("YAY");
});