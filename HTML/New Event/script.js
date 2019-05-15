$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: false,
    autoplay: true,
    items: 4
});


window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('navbar')
    
    console.log(document.body.scrollTop)
    
    if(document.body.scrollTop > 50) {
        
        nav.classList.add('back');
        
    } else {
        nav.classList.remove('back')
    }
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".go-top").style.display = "block";
  } else {
    document.querySelector(".go-top").style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = '0'
}