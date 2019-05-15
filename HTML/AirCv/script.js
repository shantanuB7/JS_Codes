window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    var nav = document.getElementById("navbar");
    
    
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("custom-navbar")
    document.querySelectorAll(".nav-link")[0].style.color = "#515769";
    document.querySelectorAll(".nav-link")[1].style.color = "#515769";
    document.querySelectorAll(".nav-link")[2].style.color = "#515769";
    document.querySelectorAll(".nav-link")[3].style.color = "#515769";
    document.querySelectorAll(".nav-link")[4].style.color = "#515769";
    document.querySelector(".logo-main").style.display = "none";
    document.querySelector(".logo-dark").style.display = "block";
    
  } else {
    nav.classList.remove("custom-navbar");
    
    document.querySelectorAll(".nav-link")[0].style.color = "#fff";
    document.querySelectorAll(".nav-link")[1].style.color = "#fff";
    document.querySelectorAll(".nav-link")[2].style.color = "#fff";
    document.querySelectorAll(".nav-link")[3].style.color = "#fff";
    document.querySelectorAll(".nav-link")[4].style.color = "#fff";
    
    document.querySelector(".logo-main").style.display = "block";
    document.querySelector(".logo-dark").style.display = "none";
    

  }
}
