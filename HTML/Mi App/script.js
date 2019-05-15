$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	});

//$('.owl-carousel').owlCarousel({
//    margin:10,
//    loop:true,
//    autoWidth:true,
//    items:4
//})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});