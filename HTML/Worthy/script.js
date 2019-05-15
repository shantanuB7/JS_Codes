$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});


window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('navbar')
    
    if(document.body.scrollTop > 50) {
        
        nav.style.background = "rgba(0,0,0,0.95)";
        nav.style.padding = "5px 0";
    } else {
        nav.style.background = "rgba(0,0,0,0.10)";
        nav.style.padding = "10px 0";

    }
    
    
})

$(document).on('click', 'ul li', function(){
            $(this).addClass('active').siblings().removeClass('active');
        })