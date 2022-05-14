let slider = document.getElementById('slider');
let radioButtons = document.getElementsByClassName('radio-button');
let slides = document.getElementsByClassName('slider-block');

let currentSlide = 0;

start();

if (localStorage.getItem("currentSlide")) {
    currentSlide = localStorage.getItem("currentSlide");
}
setRadioButton();
changePosition();

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', chooseSlide);
}

function start() {
    window.setInterval(setNextSlide, 7000);
}

function setNextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    setRadioButton();
    changePosition();
}

function changePosition() {
    let position = -currentSlide * 1120 + 'px';
    slider.style.left = position;
    localStorage.setItem('currentSlide', currentSlide);
}

function setRadioButton() {
    radioButtons[currentSlide].checked = true;
}

function chooseSlide(e) {
    currentSlide = e.target.value - 1;

    setRadioButton();
    changePosition();
}