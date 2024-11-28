var nav = document.querySelector('nav');
window.onscroll = function() {

    var scrollPosition = window.scrollY;
    var threshold = 10;
    var firstsec = 700;


    if(scrollPosition < firstsec){
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';

    }
    if (scrollPosition > threshold) {
            nav.style.transition = ' all .5s ease-in-out';
            nav.style.boxShadow = 'rgba(0, 0, 0, 0.01) 0px 14px 28px, rgba(0, 0, 0, 0.1) 0px 10px 10px';
            if(scrollPosition > firstsec){
                nav.style.backgroundColor = 'white';
            }

        }else{
        
        nav.style.boxShadow = 'none';
            
        
    }
}

var togBtn = document.querySelector(".toggle-btn");
var sideBar = document.querySelector(".SideNav");
togBtn.addEventListener("click" , ()=>{
    sideBar.classList.toggle("ActiveSideBar");
});


var sidebtns = document.querySelectorAll('.sidebtn');
sidebtns.forEach(function(sidebtn) {
    sidebtn.addEventListener('click', function() {
    sideBar.classList.toggle('ActiveSideBar');

  });
});


