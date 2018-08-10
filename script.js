
$(document).ready( function (){

	var height = 995;

	$(window).scroll(function(){
		$('.logo-2').css("opacity", $(window).scrollTop()/height);
		$('.logo-1').css("opacity", 1-$(window).scrollTop()/height);
		$('#phone').css("opacity", $(window).scrollTop()/height);


		$('#upper-left-cluster').css("opacity", 1-$(window).scrollTop()/(height/2));
		$('#top-cluster').css("opacity", 1-$(window).scrollTop()/(height/2));
		$('.window-logo').css("opacity", 1-$(window).scrollTop()/(height));

		$('#top-center').css("opacity", $(window).scrollTop()/height);

	});

});