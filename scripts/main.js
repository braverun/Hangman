(function(){
'use strict';


//Possible Words
var words = [
  'javascript',
  'monkey',
  'llama',
  'albino',
  'pancake',
  'tigerlilly',
  'giraffe',
  'panda',
  'chemical spill',
  'snowcone',
];

var randomWord = words[Math.floor(Math.random()*words.length)];


//Keeps Track of Game State

var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
}

console.log(answerArray);

while(remainingLetters > 0) {

}


//Handles Player Input
}());
