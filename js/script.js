$('.slider').slick({
	infinite: true,
	autoplay: true,
  	// autoplaySpeed: 2000,
  	dots:false,
  	arrows:false
});
$(document).on("scroll",function(){
  if
  ($(document).scrollTop()> 10){
    $("#navbar").addClass('shrink')
    
  }  else
    {
      $("#navbar").removeClass("shrink")
   
    }
  
  
});
$(function() {
  setTimeout(function() {
    $('.container').addClass('fadeIn');
  }, 300);
});