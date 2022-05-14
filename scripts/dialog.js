const dialog = document.querySelector('dialog');
const showButton = document.getElementById('show');
const savedButton = document.getElementById('saved');

if (sessionStorage.getItem('showButton')) {
    showButton.style.display = sessionStorage.getItem('showButton');
}

if (sessionStorage.getItem('savedButton')) {
    savedButton.style.display = sessionStorage.getItem('savedButton');
}


document.getElementById('show').onclick = function() {
    showButton.style.display = 'none';
    savedButton.style.display = "block";

    sessionStorage.setItem('showButton', 'none');
    sessionStorage.setItem('savedButton', 'block');

    dialog.showModal();
    setTimeout(close , 5000);
};

document.getElementById('close').onclick = function() {
  dialog.close();
};

function close() {
    dialog.close();
}