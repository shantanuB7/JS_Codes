window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-up").style.display = "block";
  } else {
    document.querySelector(".scroll-up").style.display = "none";
  }
}


window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('navbar')
    
    if(document.body.scrollTop > 50) {
        
        document.querySelector(".navi").style.top = "-40px";
        document.querySelector(".navi").style.background = "#000";
        document.querySelector(".navbar-brand").style.top = "-5px";
    } else {
        document.querySelector(".navi").style.top = "0";
        document.querySelector(".navbar-brand").style.top = "-46px";
        document.querySelector(".navi").style.background = "rgba(0,0,0,0.6)";

    }
    
    
})