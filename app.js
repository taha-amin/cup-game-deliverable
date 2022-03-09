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
    let correctSpot = getRandomHidingSpot();

    handleGuess('one', correctSpot);
});

cupButtonTwo.addEventListener('click', () => {
    let correctSpot = getRandomHidingSpot();

    handleGuess('two', correctSpot);
});

cupButtonThree.addEventListener('click', () => {
    let correctSpot = getRandomHidingSpot();

    handleGuess('three', correctSpot);
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
function handleGuess(userGuess, correctSpot) {
  //First remove the ball cup from hiding places
    cupOne.classList.remove('ball-cup');
    cupTwo.classList.remove('ball-cup');
    cupThree.classList.remove('ball-cup');

  //increment guesses
    totalGuesses++;

    const correctCupEl = document.getElementById(`cup-${correctSpot}`);
    correctCupEl.classList.add('ball-cup');

  //if statement: if user is correct, increment correct gueses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }

  //update DOM to reflect the new state
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
