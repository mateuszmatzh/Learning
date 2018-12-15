/*********************************** 

function helloWorld() {
  const colorName = window.prompt("Which color do you like?");

if (colorName) {
  const bodyElement = document.getElementsByTagName("body");
  bodyElement[0].style.backgroundColor = colorName;
  }
}
helloWorld();

/*********************************** 

function helloWorld2() {
  const agreeQuestion = window.confirm('Czy chcesz odpowiedziec na wiecej pytan?');
    if (agreeQuestion) {
      const name = window.prompt('Jak sie nazywasz?');
      window.alert('Siema ' + name);
    }
}
helloWorld2();

/***********************************

function setUrl() {
  const url = window.prompt('Podaj adres url');
  // window.location.href = url;
  window.open(url);
}
setUrl();

/***********************************
 
  container[0].style.backgroundColor = 'red';

/***********************************/
 
function changeBackground(){
  const firstP = document.getElementsByClassName('paragraph')[0];
  const lastP = document.getElementById('paragraphID');
    firstP.style.backgroundColor = 'green';
    lastP.style.backgroundColor = 'red';
}
changeBackground();

/***********************************

// Wywolywanie elementow po parentach:

let children = container.getElementsByTagName('p');
console.log(children);

/***********************************

// Console.log element po class i id: */

let element = document.querySelector('#h2element');
console.log('e', element); 
  // 'e' to dodatkowy znacznik, ktory pomaga polapac sie w konsoli

element = document.querySelector('.h2element');
console.log('e', element);

element = document.querySelector('h2');
console.log('e', element);

/***********************************

let container = document.getElementById('container');
let firstChild.style.border = '2px solid red';
let parent = container.parentElement;
parent.style.border = '3px solid green';

/***********************************/

function searchElement() {
  const element = document.getElementById('h2element');
  console.log('previous', element.previousSibling);
  console.log('previous e', element.previousElementSibling);
  console.log('next', element.nextSibling);
  console.log('next e', element.nextElementSibling);
}
searchElement();

/***********************************/

// Dodaj 2 elementy z tagiem p w #container. P1 na poczatek i p2 na koniec.
function createChildren(){
  const container = document.getElementById('container');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const firstChild = container.firstElementChild;
    container.appendChild(p1);
    container.insertBefore(p2, firstChild);
}
createChildren();

/***********************************/

// Dodanie tekstu do <p>
let blabla = document.createTextNode('Bla bla blah');
  console.log(blabla);
let firstChild = document.getElementById('container').firstElementChild;
  console.log(firstChild);
firstChild.appendChild(blabla);
  // tekst pojawia sie w <p>

// Dodanie tekstu do <h1>
  function setText(){
    const header = document.getElementById('greeting');
    let text = document.createTextNode('Hello!!!');
    header.appendChild(text);
  }
  setText();
    // metoda nie usuwa tekstu, wylacznie dodaje

/***********************************/

// Stworz div, w ktorym umiescisz paragraf. Dodaj tam swoje imie i nazwisko.
function setName(){
  const divElement = document.createElement('div');
  const paragraphElement = document.createElement('p');
  const container = document.getElementById('container');
    container.appendChild(divElement);
    divElement.appendChild(paragraphElement);
    paragraphElement.textContent = 'Mateusz Iwanczuk';
}
setName();

/***********************************

// Zapytaj uzytkownika o ulubiony kolor. Ustaw ten kolor jako kolor ramki 3px body.

function setColor() {
  const color = window.prompt("Which color do you prefer?");
  const body = document.querySelector('body');

  if (color) {
    body.style.border = '3px solid ' + color;
    // body.style.border = `3px solid ${color}`;
  }
}
  setColor();

/***********************************

function setForm(){
  const name = window.prompt('What\'s your name?');
  const email = window.prompt('What\'s your email?');

  if (name && email) {
    const inputName = document.getElementById('input__name');
    const inputMail = document.getElementById('input__email')
    const form = document.querySelector('form');
  
    inputName.value = name;
    inputMail.value = email;
    // form.submit();
  }
}
setForm();

/***********************************/

function onContainerClick(){
  console.log('no siema');
}
const container = document.getElementById('container');
container.addEventListener('click', onContainerClick);

function onEventClick(event) {
  console.log(event);
}
container.addEventListener('click', onEventClick);
  // wyswietla informacje o event'cie

/***********************************/

/* Dodaj element z czerwonym tlem, ktory bedzie zmienial
  kolor na zielony po najechaniu na niego kursorem. 
  Kolor czerwony powinien powracac, gdy kursor bedzie poza elementem. */

function createBox () {
  const container = document.getElementById('container');
  const box = document.createElement('div');
  container.appendChild(box);
  box.style.backgroundColor = 'red';
  box.style.height = '100px';
  box.style.width = '400px';

  box.addEventListener('mouseover', setGreen);
  box.addEventListener('mouseleave', setRed);
}

function setGreen (event) {
  event.target.style.backgroundColor = 'green';
}

function setRed (event) {
  event.target.style.backgroundColor = 'red';
}

createBox();
setGreen();











