const slides = document.getElementsByClassName("hero-page-info");
const radioButtons = document.getElementsByName("recipe");

let slideIndex = 0;

if (localStorage.getItem("slideIndex")) {
    slideIndex = localStorage.getItem("slideIndex") - 1;
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', (event) => {
        slideIndex = event.target.value;
        setSlide();
    });
}

showSlides();


function showSlides() {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    setRadioButton();
    setSlide();

    setTimeout(showSlides, 7000); // Change image every 7 seconds
} 
function setRadioButton() {
    radioButtons[slideIndex-1].checked = true;
}
function setSlide() {
    clearSlider();
    slides[slideIndex-1].style.display = "flex";
    localStorage.setItem("slideIndex", slideIndex);
} 

function clearSlider() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}
