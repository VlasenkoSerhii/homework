function res(){
   var width__slider = $('.block__items').width();
	 $('.header__slider__wrap').height(width__slider/1.6);
	 $('.slide').height(width__slider/1.6);
} res();

$(window).resize(function() {
	res();
});