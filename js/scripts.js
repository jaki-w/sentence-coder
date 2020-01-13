var sentence = prompt("please enter sentence");

alert(sentence);

var firstLetter =(sentence.charAt(0));
var lastLetter =(sentence.charAt(sentence.length-1));

function firstLast(a,b) {
  return b.toUpperCase() + a.toUpperCase();
};

function newSentence(sentence, firstLast) {
  return sentence + firstLast;
};

console.log();

alert(firstLast(firstLetter, lastLetter));
 