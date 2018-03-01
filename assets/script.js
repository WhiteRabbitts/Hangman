window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         
    var chosenCategory;    
    var getHint ;
    var word ;              
    var guess ;             
    var geusses = [ ];     
    var lives ;             
    var counter ;           
    var space;              
  
    // Get elements
    var showlives = document.getElementById("mylives");
    
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    
  
    // Create geusses ul
   var  result = function () {
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
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
   var  comments = function () {
      showlives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showlives.innerHTML = "Son of a Nutcracker! - Buddy the Elf"
      }

      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showlives.innerHTML = "Boy, do I hate being right all the time. - Dr. Ian Malcolm";
        }
      }
    };
  


    
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
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
          "peter-pans-flight",
          "tiki-room",
          "kali-river-rapids",
          "seven-dwarfs-mine-train",
          "the-american-adventure",
          "dumbo"]
          
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
    
    
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }
  
  
  