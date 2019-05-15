window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('navbar')
    
    if(document.body.scrollTop > 50) {
        
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent')
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored')
    }
    
    
})

