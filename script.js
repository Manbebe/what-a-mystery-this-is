const introSentences = [
  "Click text to proceed to next sentence",
  "Hello...",
  "Welcome to my final project",
  "This website focuses on being an interactable little thing...",
  "So please enjoy this :)",
  "The buttons will now appear in 3",
  "2",
  "1",
  "0",
  "Welcome to the experience. Click a button below."
];


const experienceSentences = {
  "button1": "",
  "button2": "Who am I? Well im happy you asked because im not sure, all i know is that im stuck in this void answering questions my creator wants me to, but i have a name, however its REDACTED, sorry.",
  "ld_mode": "",
  "button3": "Well try to observe your surroundings you see anything? Didnt think so, we are in the void right now",
  "button4": "Who are you? how do you not know yourself, but i guess its different here. You are a player and your origin is that you ended up here after my creator wanted to hold you here for...safe keeping."
};
const siteStartTime = Date.now();
let currentSentence = 0;
let index = 0;
let interval;
let isTyping = false;
let isIntro = true;

const textDiv = document.getElementById("text");
const buttonsDiv = document.getElementById("buttons");
const typeSound = document.getElementById("typeSound");
const ambiance = document.getElementById("bg-ambi");

// Typing function
function typeSentence(sentence) {
  isTyping = true;
  textDiv.textContent = "";
  index = 0;

  clearInterval(interval);
  interval = setInterval(() => {
    if (index < sentence.length) {
      textDiv.textContent += sentence[index];
      typeSound.currentTime = 0;
      typeSound.play();
      index++;
    } else {
      clearInterval(interval);
      isTyping = false;
    }
  }, 50);
}

// Intro advance logic
function nextSentence() {
  if (isTyping || !isIntro) return;

  currentSentence++;
  if (currentSentence < introSentences.length) {
    typeSentence(introSentences[currentSentence]);
  } else {
    isIntro = false;
    buttonsDiv.style.display = "flex";
    textDiv.textContent = "Choose an option below to continue.";
  }
  if(currentSentence >= 9){
    buttonsDiv.style.display = "block";
  }
}

// Button trigger for experience mode
function handleButtonClick(id) {
  if (id === "ld_mode") return; // handled separately

  if (id === "button1") {
    const timeSpent = Math.floor((Date.now() - siteStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    const time = `You've been here for ${minutes} minutes and ${seconds} seconds, what cant read a clock? Wait... i forgot to add one`;
    typeSentence(time);
    return;
  }

  const sentence = experienceSentences[id] || "Unknown action.";
  typeSentence(sentence);
}

document.getElementById("ld_mode").addEventListener("click", () => {
  const body = document.body;
  const isLightNow = body.classList.toggle("light-mode");

  if (isLightNow) {
    typeSentence("AHHHHHHHHHH WHO TURNED THE LIGHTS ON IVE BEEN FLASHBANGED");
  } else {
    typeSentence("ah thank god you finally turned the lights back off");
  }
});
window.addEventListener("DOMContentLoaded", () => {
  // Start typing the first intro sentence
  typeSentence(introSentences[0]);

  // Background audio on first click
  document.body.addEventListener('click', () => {
    ambiance.play().catch(() => {});
  }, { once: true });

  // Clicking anywhere to proceed intro
  document.body.addEventListener('click', nextSentence);

  // Hook up other buttons
  document.querySelectorAll("#buttons button").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Don't trigger page click
      handleButtonClick(button.id);
    });
  });
});
