
const slideList = [{
    img: "images/img1.jpg",
    text: '...grain...'
},
{
    img: "images/img2.jpg",
    text: '...rain...'
},
{
    img: "images/img3.jpg",
    text: '...water...'
}
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]


const time = 3000;
let active = 0;
let indent = 0;



const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    //pobiera indeks aktywnej kropki i usuwa na nim klasę active

    dots[active].classList.add('active');
    //ustawia klasę active na elemencie aktywnym i odpowiadającej mu kropce

}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    //console.log('pyk');
    changeDot()
}

function left() {

    if (active == 0) active = slideList.length - 1;
    else
        active--;

    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    console.log('pyk');
    changeDot();
    stopper = setInterval(changeSlide, time);
    //console.log(stopper);
}

function right() {

    active++;

    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    //console.log('pyk');
    changeDot();
    stopper = setInterval(changeSlide, time); //nie może być deklaracji!
    //console.log(stopper);
}


function keyChangeSlide(e) {

    if (e.keyCode == 37) {

        clearInterval(stopper);
        // console.log(stopper);

        left();
    }

    if (e.keyCode == 39) {

        clearInterval(stopper);
        //console.log(stopper);

        right();
    }

}


let stopper = setInterval(changeSlide, time); //musi być LET, do tego przypisuje funkcja lewo() i prawo()
//tylko tak ten setinterval jest widziany jako 1 ten sam setinterval, ktory mozna zatrzymać


// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide);