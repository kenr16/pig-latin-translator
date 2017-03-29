var translateWord = function(word) {

  return translatedWord;
}

var translateString = function(string) {

  return translatedString;
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
