window.onscroll = () => {scroller()}

var stickler = document.getElementById('bottom');
var image = document.getElementById('logo-img')
var sticky = stickler.offsetTop;

let scroller = () => {
    if(window.pageYOffset > sticky){
        stickler.classList.add('stick');
        stickler.classList.remove('bottom')
        image.classList.add('image-scroll');
        image.classList.remove('logo-img');
    } else {
        stickler.classList.remove('stick');
        stickler.classList.add('bottom');
        image.classList.add('logo-img');
        image.classList.remove('image-scroll')
    }
}
console.log('freespirit')