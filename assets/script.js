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

var word;
var guess;
var guesses = [];
var lives;
var counter;
var space;

var showLives = document.getElementById("myLives");

var buttons = function () {
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
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        result();
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
};


comments = function () {
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




var words = [
    "its-a-small-world",
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
    "peter-pans-flight"
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
console.log("Javascript");