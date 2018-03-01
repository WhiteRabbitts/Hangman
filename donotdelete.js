var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var words;
var guess;
var guesses = [];
var lives;
var counter;
var space;

var showLives = document.getElementById("myLives");

function buttons() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");
    for (var i = 0; i < alphabet.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i];
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
};
var result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < words.length; i++) {
        correct.setAttribute("id", "my-word");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        if (words[i] === "_") {
            guess.innerHTML = "_";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }

};


var comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over.  See ya real soon!";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHTML = "Good golly miss Molly, you won!";
        }
    }
};



console.log("javascript");



buttons();
comments();
console.log("Javascript");

guesses = [ ];
lives = 10;
counter = 0;
space = 0;
comments();





play = function ( ) {
var categories = [
    ["its-a-small-world",
    "space-mountain",
    "test-track",
    "tower-of-terror",
    "star-tours",
    "spaceship-earth",
    "peoplemover",
    "dinosaur",
    "flight-of-passage",
    "kilimanjaro-safaris",
    "jungle-cruise",
    "haunted-mansion",
    "expedition-everest",
    "toy-story-mania",
    "peter-pans-flight"]
];

  
chosenCategory = categories[Math.floor(Math.random() * categories.length)];
word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
word = word.replace(/\s/g, "-");
console.log(word);
buttons();

geusses = [ ];
lives = 10;
counter = 0;
space = 0;
result();
comments();
selectCat();
canvas();
}

play();