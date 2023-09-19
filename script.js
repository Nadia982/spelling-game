// To do next: 
// 1) enable choice of different voices/volume/rate/pitch
// 3) enable typing of words on desktops
// 4) add a visual depiction of lives remaining with heart emojis
// 5) option to turn on animation/confetti (default should be "no confetti")
// 6) smoother page transitions
// 7) add a link to my portfolio - made with <3 by []
// 8) option to turn on/off reading of words from start screen and game screen
// 9) easy and hard modes - hard mode requires user to input letters in correct order
// 10) about/contact pages

// Object containing words and definitions
const options = {
  bible: "holy book for Christians",
  border: "dividing line between two countries",
  bold: "brave, or bright in colour",
  boarder: "a pupil who stays at school overnight",
  borough: "name for different local areas in London",
  bowled: "'threw', but in a ball game",
  buffer:
    "Something that provides a space or barrier to reduce impact between two things",
  category: "type",
  climb: "to ascend a steep or vertical surface",
  collectable: "valuable item",
  comb: "this isn't a brush, but you can use it to brush your hair",
  commercial: "relating to business",
  community: "group of people, often living near each other",
  compatible: "if two people get on well then they are ____",
};

//Initial references
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const speakWordBtn = document.getElementById("speak-word-button");
const letterContainer = document.getElementById("letter-container");
const userInpSectionChances = document.getElementById(
  "user-input-section-chances"
);
const userInpSectionWord = document.getElementById("user-input-section-word");
const resultText = document.getElementById("result");
// let word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;

//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);


//Block all the buttons
const blocker = () => {
  // let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
  //Read random word out loud
  // speechSynthesis.getVoices();
  let voices = window.speechSynthesis.getVoices();
  // console.log(voices);
  let msg = new SpeechSynthesisUtterance();
  // msg.voice = voices[3]; 
  msg.text = randomWord;

  window.speechSynthesis.speak(msg);
});

//Replay word when clicking "replay the word" button

speakWordBtn.addEventListener("click", () => {
  //Read random word out loud
  let voices = window.speechSynthesis.getVoices();
  let msg = new SpeechSynthesisUtterance();
  msg.text = randomWord;
  window.speechSynthesis.speak(msg);
});

//Stop game
const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate word function
const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInpSectionWord.innerText = "";
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint"><span>Definition: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += `<span class="inputSpace">_</span>`;
  });

  //Display each element as span
  userInpSectionWord.innerHTML = displayItem;
};

//Initial function
const init = () => {
  //Show remaining chances
  const showChances = () => {
    let heartsLeft = new Array(lossCount);
    heartsLeft.fill('<ion-icon class="heart" name="heart"></ion-icon>');
    userInpSectionChances.innerHTML = 
    `<div id="chanceCount">Chances Left: ${lossCount} &nbsp ${heartsLeft.join(" ")}</div>`;
    }
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSectionWord.innerHTML = "";
  letterContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  generateWord();
  showChances();

  //Creating letter buttons

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);

    //Character button onClick
    button.addEventListener("click", () => {
      message.innerText = `Correct Letter`;
      message.style.color = "#008000";
      let charArray = randomWord.toUpperCase().split("");
      let inputSpace = document.getElementsByClassName("inputSpace");

      const disableLetterButtons = () => {
        let allLetters = document.querySelectorAll(".letters");
        let allLettersArray = Array.from(allLetters);
        console.log(allLettersArray);
        allLettersArray.forEach((button) => (button.disabled = true));
      };
      //If array contains clicked value, replace the matched dash with letter
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //If character in array is same as clicked button, add "correct" class
          if (char === button.innerText) {
            button.classList.add("correct");
            //replace dash with letter
            inputSpace[index].innerText = char;
            //increment counter
            winCount++;
            //if winCount = word length

            if (winCount === charArray.length) {
              message.innerHTML = `The word was <span>"${randomWord}"</span>. You won!`;
              disableLetterButtons();
            }

            setTimeout(() => {
              if (winCount === charArray.length) {
                var defaults = {
                  spread: 360,
                  ticks: 120,
                  gravity: 0,
                  decay: 1,
                  startVelocity: 3,
                  shapes: ["star"],
                  colors: ["FFE40011", "FFBD0011", "E8940011", "FFCA6C11", "FDFFB822"],
                };

                function shoot() {
                  confetti({
                    ...defaults,
                    particleCount: 100,
                    scalar: 1.5,
                    shapes: ["star"],
                  });
                }
                setTimeout(shoot, 10);
              }
            }, 0);

            
              if (winCount === charArray.length) {
                setTimeout(() => {
                startBtn.innerText = "New word";
                //block all buttons
                blocker();
              }, 3000);
              }
            
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount--;
        showChances();
        // document.getElementById(
        //   "chanceCount"
        // ).innerText = `Chances Left: ${lossCount}`;
        message.innerText = `Incorrect letter`;
        message.style.color = "#ff0000";
        if (lossCount <= 0) {
          disableLetterButtons();
        }
        
          if (lossCount <= 0) {
            message.innerHTML = `The word was <span>"${randomWord}"</span>. Better luck next time!`;
            setTimeout(() => {
            startBtn.innerText = "Restart";
            blocker();
          }, 3000);
          }
        
      }
      //Disable clicked buttons
      button.disabled = true;
    });
    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

window.onload = () => {
  init();
};
