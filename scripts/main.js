(function(){
'use strict';


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
  alert(answerArray.join(' '));
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

}


}());
