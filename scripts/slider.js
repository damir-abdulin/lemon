let slideIndex = 0;
let slides = document.getElementsByClassName("hero-page-info");
let radioButtons = document.getElementsByName("recipe");

showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setRadioButton();

  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 

function setRadioButton() {
    radioButtons[slideIndex-1].checked = true;
}