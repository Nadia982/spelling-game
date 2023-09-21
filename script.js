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
const questionNoContainer = document.querySelector(".question-no-container");
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const speakWordBtn = document.getElementById("speak-word-button");
const speakDefinitionBtn = document.getElementById("speak-definition-button");
const letterContainer = document.getElementById("letter-container");
const userInpSectionChances = document.getElementById(
  "user-input-section-chances"
);
const userInpSectionWord = document.getElementById("user-input-section-word");
const resultText = document.getElementById("result");
// let word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "";
let randomHint = "";
let winCount = 0;
let lossCount = 0;
let questionNo = 0;
let randomArray = [];
for (let i = 0, tempnames = words, len = words.length; i < len; i++) {
  let rnd = Math.floor(Math.random() * tempnames.length);
  randomArray.push(tempnames[rnd]);
  tempnames.splice(rnd, 1);
}

// const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
  // let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start game
startBtn.addEventListener("click", () => {
  const reset = () => {
    let allLetters = document.querySelectorAll(".letters");
    let allLettersArray = Array.from(allLetters);
    allLettersArray.forEach((button) => (button.disabled = false));
    allLettersArray.forEach((button) => button.classList.remove("correct"));
    allLettersArray.forEach((button) => button.classList.remove("incorrect"));
    message.innerText = "";
  };

  reset();
  questionNo++;
  generateWord();

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

//Read word out loud after clicking "Say definition" button

speakWordBtn.addEventListener("click", () => {
  //Read random word out loud
  let voices = window.speechSynthesis.getVoices();
  let msg = new SpeechSynthesisUtterance();
  msg.text = randomWord;
  window.speechSynthesis.speak(msg);
});

//Read definition out loud after clicking "Say definition" button
speakDefinitionBtn.addEventListener("click", () => {
  //Read definition of random word out loud
  let voices = window.speechSynthesis.getVoices();
  let msg = new SpeechSynthesisUtterance();
  msg.text = randomHint;
  window.speechSynthesis.speak(msg);
});

//Stop game
const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate word function
const generateWord = () => {

  // letterContainer = each tile holding the letters of the alphabet on a grid. This code makes the alphabet tiles visible
  letterContainer.classList.remove("hide");
  userInpSectionWord.innerText = "";

  // randomWord = words[generateRandomValue(words)];
  console.log(randomArray);
  randomWord = randomArray[questionNo];
  console.log(randomWord);
  randomHint = options[randomWord];
  console.log(randomHint);
  questionNoContainer.innerHTML = `<div id="questionNo"><span>Question </span>${questionNo} of ${randomArray.length}</div>`;
  hintRef.innerHTML = `<div id="wordHint"><span>Definition: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += `<span class="inputSpace">_</span>`;
  });

  //Display each element as span containing underscored spaces, to be replaced by letters that the player guesses
  userInpSectionWord.innerHTML = displayItem;
};

//Initial function
const init = () => {
  //Show remaining chances
  const showChances = () => {
    let heartsLeft = new Array(lossCount);
    heartsLeft.fill('<ion-icon class="heart" name="heart"></ion-icon>');
    userInpSectionChances.innerHTML = `<div id="chanceCount"><span>Chances left (for this word): ${lossCount}</span><span> ${heartsLeft.join(
      " "
    )}</span></div>`;
  };
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
  //Creating alphabet letter buttons
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
            //confetti
            setTimeout(() => {
              if (winCount === charArray.length) {
                var defaults = {
                  spread: 360,
                  ticks: 120,
                  gravity: 0,
                  decay: 1,
                  startVelocity: 0.5,
                  shapes: ["star"],
                  colors: [
                    "FFE40011",
                    "FFBD0011",
                    "E8940011",
                    "FFCA6C11",
                    "FDFFB811",
                  ],
                };

                function shoot() {
                  confetti({
                    ...defaults,
                    particleCount: 70,
                    scalar: 2,
                    shapes: ["star"],
                  });
                }
                setTimeout(shoot, 50);
              }
            }, 0);

            if (winCount === charArray.length) {
              setTimeout(() => {
                startBtn.innerText = "Next word";
                //block all buttons
                blocker();
              }, 2500);
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
          questionNo++;
          message.innerHTML = `The word was <span>"${randomWord}"</span>. Better luck next time!`;
          setTimeout(() => {
            startBtn.innerText = "New word";
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
