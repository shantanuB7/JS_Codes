function check() {
    
    if(document.getElementById("monthly-2").checked) {
        document.getElementById("front").style.display = "block";
        document.getElementById("back").style.display = "none";
        document.querySelector(".switch").style.left = "2px";


    } else {
        document.getElementById("back").style.display = "block";
        document.getElementById("front").style.display = "none";
        document.querySelector(".switch").style.left = "94px";


    }  
}

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scrollup").style.display = "block";
  } else {
    document.querySelector(".scrollup").style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = '0'
}