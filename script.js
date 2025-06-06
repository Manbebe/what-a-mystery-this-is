const sentences = [
      "Click text to proceed to next sentence",
      "Hello...",
      "Welcome to my final project",
      "I think it pretty obvious that i used a bit of chat gpt for this but thats beside the point",
      "This websites focus is an interactable little thing where there are many interactables...",
      "That make me say different things and maybe do different things if my creator wants to idk",
      "So please enjoy this little thing cuz even though it might be simple, its cool so yea :)",
      "The buttons will now appear in 3",
      "2",
      "1",
      "0"
    ];

  
    let currentSentence = 0;
    let index = 0;
    let interval;
    let sentence = true;
    const buttonsDiv = document.getElementById('buttons');
    const textDiv = document.getElementById("text");
    const typeSound = document.getElementById("typeSound");

    function typeSentence() {
      if (sentence & index < sentences[currentSentence].length) {
        textDiv.textContent += sentences[currentSentence][index];
        
        // Restart and play the typing sound
        typeSound.currentTime = 0;
        typeSound.play();

        index++;
      } else {
        clearInterval(interval);
      }
    }
    function nextSentence() {
      clearInterval(interval);
      textDiv.textContent = "";
      index = 0;
      currentSentence = (currentSentence + 1) % sentences.length;
      interval = setInterval(typeSentence, 50);
       if (currentSentence === 11) {
        sentence = false;
          buttonsDiv.style.display = "block"; // Show buttons after 6 sentences
        }
    }



    // Start the first sentence
    interval = setInterval(typeSentence, 50);
 


///      "This section of this project will be a message for those who have helped me thoughout the year",
///   "Whether it be my classmates or Mr Coop",
//    "Each and everyone have helped me turn what seemed to be an impossible and complicated task...",
//   "That was turned into a activity that i seemed to enjoy",
//    "I want to thank everyone for helping me",
//     "And coop, you were honestly the goat, im sad that ur leaving tuckahoe im sure we all are",
//    "But enough of my talk lets get into the activity at hand",
//      "its not really a WEBSITE or GAME its more like a quick EXPERIENCE, something where i can do whatever",
//      "-------------------------------------------------------------------------------------------------------",