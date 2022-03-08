// import functions and grab DOM elements
// grabbing CUP BUTTON ELEMENTS
const cupButtonOne = document.getElementById('cup-one-button');
const cupButtonTwo = document.getElementById('cup-two-button');
const cupButtonThree = document.getElementById('cup-three-button');

//grabbing CUP PICTURE ELEMENTS
const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

//grabbing TOTAL WINS, LOSSES, AND GUESSES ELEMENTS
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// let state
let correctGuesses = 0;
let totalGuesses = 0;


//set event listeners
cupButtonOne.addEventListener('click', () => {

});

cupButtonTwo.addEventListener('click', () => {

});

cupButtonThree.addEventListener('click', () => {

});

//create function with random hiding spot
function getRandomHidingSpot() {
  const hidingPlaces = [
    'one',
    'two',
    'three'
  ];

  const index = Math.floor(Math.random() * hidingPlaces.length);
  return hidingPlaces[index];
}

//create function that handles guesses


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
