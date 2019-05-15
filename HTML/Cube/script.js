$(function(){
            $("#nav").load("nav.html");
            $("#products").load("products.html");
            $("#testimonials").load("testimonials.html")
            }); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80  ) {
    document.getElementById("back2top").style.display = "block";
  } else {
    document.getElementById("back2top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


