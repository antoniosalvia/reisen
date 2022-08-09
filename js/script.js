'use strict'

const button = document.getElementById('button');
const price = document.getElementById('price');
const hurryUp = document.getElementById('hurryUp');
const counter = document.getElementById('counter');

let timerA;
let timerB;
let panicNumber = 10;
let panicInterval;

button.addEventListener('click', showPrice);

// FUNCTION DECLARATION
function showPrice() {
    // price.classList.remove('price');
    price.classList.toggle('price');
    price.classList.add('showPrice');
};

function timerFunction() {
    clearTimeout(timerA);
    clearTimeout(timerB);

    counter.innerHTML = panicNumber;

    timerA = setTimeout(function() {
        hurryUp.classList.remove('hurryUp');

        timerB = setTimeout(function() {
        
        panicInterval = setInterval(() => {   
            if(panicNumber >= 4){
                panicMaker();
            }
        }, 1000)

        }, 4000);
        
    }, 4000); 
};

function panicMaker() {
    panicNumber--;
    counter.innerHTML = panicNumber;
};

timerFunction();

