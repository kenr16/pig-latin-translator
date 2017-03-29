var translateWord = function(word) {
  var wordArray = word.split("");
  var translatedWord = "";
  var firstletter = word[0].toLowerCase();
  var vowelArray = ["a", "e", "i", "o", "u", "y"];
  if (!vowelArray.includes(firstletter)) {      //Makes sure that the first letter is NOT a vowel, hence the exclamation point.
    var initialConsonants = [];
    var i = 0;
    while (!vowelArray.includes(word[i]) && i < word.length) {      //Cycles through each letter until the function hits a vowel.
      initialConsonants.push(word[i]);                      //Pushes each consonant into the consonant array.
      i++;
    }
    wordArray.splice(0, initialConsonants.length);           //Splice out a set of consonants of a length corresponding to the number we pushed earlier.
    wordArray.push(initialConsonants);                       //Pushes the initial consonants back onto the end of the word.
    if (initialConsonants[initialConsonants.length - 1].toLowerCase() === "q") {  //Check to see if the last letter of initial consonants is a "q".
      if (wordArray[0] === "u") {
        wordArray.push(wordArray.shift());                      //Taking the first 'u' after the 'q' we detected, and shift it off the front then push it to the end.
      }
    }
  }
  return wordArray.join('') + 'ay';                                  //Converts the array into a string and adds 'ay' to the end.
}


var translateString = function(string) {      //This is the function you pass a full string to.
  var arrayOfTranslatedWords = [];
  var arrayOfWords = string.split(" ");       //Splits the string into an array for modification.
  arrayOfWords.forEach(function(word) {       //For each word in our resulting array do the following:
    arrayOfTranslatedWords.push(translateWord(word)); //Put them into the translate word function, then push the translated word into the arrayOfTranslatedWords.
  });
  return arrayOfTranslatedWords.join(" ");      //Joins the arrayOfTranslatedWords into a string and returns it to the user.
}

var disqualifyTest = function(string) {
  return string.match(/![a-zA-Z]/);
}



$(document).ready(function() {
  $('form').submit(function() {
    var string = $('input#input').val();
    var translatedString = translateString(string);
    var outputElement = $('section#output');
    outputElement.text(translatedString);
    return false;
  });
});
