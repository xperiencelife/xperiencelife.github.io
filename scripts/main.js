let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/image.jpg') {
      myImage.setAttribute('src', 'images/image3.jpg');
    } else {
      myImage.setAttribute('src', 'images/image.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Tout sur l’actualité musicale du Kongo Central,' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Tout sur l’actualité musicale du Kongo Central, ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});

