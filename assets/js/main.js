var nav = document.querySelector('nav');
window.onscroll = function() {

var scrollPosition = window.scrollY;
var threshold = 10;
var firstsec = 700;


if(scrollPosition < firstsec){
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';

}
if (scrollPosition > threshold) {
        
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';
        if(scrollPosition > firstsec){
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.774)';
        }

    }else{
    
    nav.style.boxShadow = 'none';
        
    
}

    
}