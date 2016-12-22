$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#navdef');
   var offset = startchange.offset();
    
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
	  
	  var screenwidth = $(document).width();
	  if (screenwidth < 990){
	  	$('#navdef').css('background-color', 'rgba(0,0,0,0.7)');
	  }
	  
     
	 else{ 	 
	 	if(scroll_start > offset.top) {
          $('#navdef').css('background-color', 'rgba(0,0,0,0.7)');		  
       } else {
          $('#navdef').css('background-color', 'transparent');
       }
	 }
	 
	 
   });
});





$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





$(document).ready(function () {
     $("#header1").delay(1000).fadeIn(2000); 
});

$(document).ready(function () {
     $("#header2").delay(2000).fadeIn(2000); 
});

    
	/*	
$(document).ready(function(){
        $('.carousel').carousel({dist:0});
        window.setInterval(function(){$('.carousel').carousel('next')},7000)
     });


$('.carousel.carousel-slider').carousel({full_width: true});
*/

$(document).ready(function(){
      $('.carousel').carousel();
    });

 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });



