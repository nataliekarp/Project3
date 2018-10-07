var dictionary = ["wizard", "wand", "harry", "voldemort", "dumbeldore", "snitch", "quiddich"];
var word;
var guessesLeft;
var wins = 0;
var games = 0;
var letters;

function startGame () {
    games += 1;
    word = dictionary[Math.floor(Math.random() * dictionary.length)];
    guessesLeft = 12;
    letters = [];
    console.log("word = " + word);
    refresh(getPlaceholder(), wins, guessesLeft, letters);

    document.onkeypress = function (event) {
        event = event || window.event;
        letters += event.key;
        var currentGuess = getPlaceholder();
        if (currentGuess == word) {
            wins += 1;
            startGame();
        }
        guessesLeft -= 1;
        if (guessesLeft == 0) {
            startGame();
        }
        refresh(currentGuess, wins, guessesLeft, getGuessed())
    }
 }   
 
function refresh(placeholder, wins, guessesLeft, guessed) {
    document.getElementById("placeholder").innerText = placeholder;
    document.getElementById("wins").innerText = wins + "/" + games;
    document.getElementById("guesses_left").innerText = guessesLeft;
    document.getElementById("guessed").innerText = guessed;
} 

function getPlaceholder() {
    var result = "";
    var wordLength = word.length;
    for (var i = 0; i < wordLength; i++) {
        result += letters.indexOf(word[i]) == -1 ? "*" : word[i];
    }
    return result;    
}

function getGuessed() {
    var result = "";
    var lettersLength = letters.length;
    for (var i = 0; i < lettersLength; i++) {
        if (word.indexOf(letters[i]) == -1 && result.indexOf(letters[i]) == -1) {
            result += letters[i];
        }    
    }
    return result;    
}