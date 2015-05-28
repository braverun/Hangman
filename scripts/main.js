(function(){
'use strict';

//Document elements
var $display = document.querySelector('.display');


//Possible words
var words = [
  'javascript',
  'monkey',
  'llama',
  'albino',
  'pancake',
  'tigerlilly',
  'giraffe',
  'panda',
  'chemicals',
  'snowcone',
];

//Pick a random word
var randomWord = words[Math.floor(Math.random()*words.length)];


//Keeps Track of Game State
//Handles Player Input
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
}



var remainingLetters = randomWord.length;

while(remainingLetters > 0) {
  //Displays correct guesses
  $display.innerText = answerArray;
  //Prompts player for guess
  var guess = prompt('Guess a letter! (or click "Cancel" to stop playing.)');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Please enter a single letter.');
  } else {
    for (var j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  $display.innerText = answerArray;
}



}());
