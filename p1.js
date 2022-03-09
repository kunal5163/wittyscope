'use strict';
let spreadSheetData = [];
fetch('https://script.google.com/macros/s/AKfycbwYzLUPtNbmF-uzU1aYXKNjk1QJpcurcsQdFbsiI8F6J3V7Y6io/exec')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        spreadSheetData.push(data);

    }
    );
/*hide scrollbar on scroll*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}
/*hie on click on link*/

/*sliding navbar*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ele');
    const navEle = document.querySelectorAll(`.nav-ele a`)
    /*onclick burger*/
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        /*ease nav elements transition*/
        navEle.forEach((ele, index) => {
            if (ele.style.animation) {
                ele.style.animation = ''
            } else {
                ele.style.animation = `navEleFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        /*burger transition*/
        burger.classList.toggle('toggle');
    });
}
const navEle = document.querySelectorAll(`.nav-ele a`)
navSlide();
/*working of cards*/
var card = document.querySelectorAll('.card');
var vs = function () {
    this.classList.add('is-flipped');
};
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', vs);
}
/*randomly select message*/
function myFunction() {
    /*set timeout*/
    setTimeout(function () {
        /*randomly select array index*/
        let arrayIndex = Math.trunc(Math.random() * spreadSheetData[0].data.length);
        console.log(arrayIndex);
        console.log(spreadSheetData[0].data[arrayIndex][1]);
        /*get message on click*/
        let messageBox = document.querySelector('#message-box');
        let bGH = document.querySelector('#get-horroscope');
        let message = document.querySelector('#message-horroscope');
        bGH.addEventListener('click', function () {
            bGH.classList.add('hidden');
            messageBox.classList.remove('hidden');
            message.textContent = spreadSheetData[0].data[arrayIndex][1];
            for (let i = 0; i < card.length; i++) {
                card[i].classList.add('is-flipped');
            }
            setTimeout(function(){
            window.location.reload(1);
         }, 5000);
        });
       
    }, 3000);
}
myFunction()


/*working of button get horroscope*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});





















