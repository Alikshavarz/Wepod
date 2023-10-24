var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next =document.querySelector('.next');
var n= 0;
var i;

function disno(){
    for( i=0 ; i<slide.length ; i++){
        slide[i].style.display = 'none' ;
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if( n > slide.length -1){
        n= 0 ;
    }
    disno();
    slide[n].style.display = 'block';
})


prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if( n < 0){
        n= slide.length -1 ;
    }
    disno();
    slide[n].style.display = 'block';
})


setInterval(function(){
    n++;
    if( n > slide.length -1){
        n= 0 ;
    }
    disno();
    slide[n].style.display = 'block';
},5000)

$(document).ready(function(){
    $('.nav-btn').click(function(){
        $('.nav-btn').toggleClass('change')
    })
})

$('.item-list').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')
    
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})

// card

$(document).ready(function(){
    $('.bt-head6').click(function(){
        $('.bt-scroll6').toggleClass('bt-change')
    })
})

$(document).ready(function(){
    $('.bt-head1').click(function(){
        $('.bt-scroll1').toggleClass('bt-change')
    })
})

$(document).ready(function(){
    $('.bt-head2').click(function(){
        $('.bt-scroll2').toggleClass('bt-change')
    })
})

$(document).ready(function(){
    $('.bt-head3').click(function(){
        $('.bt-scroll3').toggleClass('bt-change')
    })
})

$(document).ready(function(){
    $('.bt-head4').click(function(){
        $('.bt-scroll4').toggleClass('bt-change')
    })
})

$(document).ready(function(){
    $('.bt-head5').click(function(){
        $('.bt-scroll5').toggleClass('bt-change')
    })
})




// end of card