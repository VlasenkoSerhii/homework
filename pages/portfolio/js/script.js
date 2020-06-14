$(document).ready(function(){
	$(document).ready(function(){
  		$('.header__slider').slick({
    	arrows:false,
    		dots:true,
    		slidesToShow:1,
    		autoplay:true,
    		infinite:true,
    		autoplaySpeed:5000,
    		pauseOnFocus:false,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		draggable:true,
		swipe:true,
		touchThreshold:5,				
		touchMove:true,
		waitForAnimate: true

  		});
	});
	$('.comments__slider').slick({
		arrows:false,
		dots:true, 
		adaptiveHeight: false,					
		infinite:true,					
		autoplay:true,
		autoplaySpeed:5000, 					
		pauseOnFocus:false,
		pauseOnHover:false,
		pauseOnDotsHover:false,
		draggable:true,
		swipe:true,
		touchThreshold:5,				
		touchMove:true,
		waitForAnimate: true			
	});
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__ul').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu_a').click(function(event){
	$('.header__burger, .header__ul').removeClass('active');
	$('body').removeClass('lock');
})
});