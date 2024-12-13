const btnLeft = document.querySelector('.btn-left'),
    btnRight = document.querySelector('.btn-right'),
    slider = document.querySelector('#slider')
console.log(slider);
sliderSection = document.querySelectorAll(".slider-section");
console.log(sliderSection);


btnLeft.addEventListener('click', moveToLeft);
btnRight.addEventListener('click', moveToRight);


let operacion = 0;
let widthImg = 100 / sliderSection.length;
console.log(widthImg);

function moveToRight() {

    operacion = operacion + widthImg

    if (operacion / 100 == 1) {
        slider.style.transform = `translateX(0%)`;
        operacion = 0;
        slider.style.transition = "none"
        return
    }

    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "all ease .9s"

}

function moveToLeft() {
    console.log(operacion)
    operacion = operacion - widthImg
    console.log(operacion);

    if (operacion == -widthImg) {
        console.log(-(widthImg));
        console.log((sliderSection.length - 1) * (widthImg));
        slider.style.transform = `translateX(-${(sliderSection.length - 1) * (widthImg)}%)`;
        operacion = (sliderSection.length - 1) * (widthImg)
        slider.style.transition = "none"
        return;
    }

    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = "all ease .9s"

}
setInterval(() => {
    moveToRight()
}, 5000);


/************************boton menu ***************/


const btnHamburguesa = document.querySelector(".btn-hambur");
console.log(btnHamburguesa.children[0]);
let menu = document.querySelector('.mobile-header');
let body=document.querySelector('body');
console.log(body);

btnHamburguesa.addEventListener('click', () => {


    menu.classList.toggle('open');
    // btnHamburguesa.children[0].classList.remove('fa-burger');
    // btnHamburguesa.children[0].classList.add('fa-x')

    if (menu.classList[1] != 'open') {
        btnHamburguesa.children[0].classList.remove('fa-x');
        btnHamburguesa.children[0].classList.add('fa-burger')
        body.style.overflow='visible';
    }else{
        btnHamburguesa.children[0].classList.remove('fa-burger');
        btnHamburguesa.children[0].classList.add('fa-x')
        body.style.overflow='hidden';

    }

    console.log(menu.classList);
    console.log(btnHamburguesa.children[0].classList);
})