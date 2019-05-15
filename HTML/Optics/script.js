window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('nav')
    
    if(document.body.scrollTop > 50) {
        
        nav.classList.add('back');
        
    } else {
        nav.classList.remove('back')
    }
})


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});

$(document).on('click', 'ul li', function(){
            $(this).addClass('active').siblings().removeClass('active');
           // console.log(this);
        })