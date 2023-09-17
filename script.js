// Object containing words and definitions
const options = {
  // bible: "holy book for Christians",
  // border: "dividing line between two countries",
  bold: "brave, or bright in colour",
  // boarder: "a pupil who stays at school overnight",
  // borough: "name for different local areas in London",
  // bowled: "'threw', but in a ball game",
  // buffer:
  //   "Something that provides a space or barrier to reduce impact between two things",
  // category: "type",
  // climb: "to ascend a steep or vertical surface",
  // collectable: "valuable item",
  comb: "this isn't a brush, but you can use it to brush your hair",
  // commercial: "relating to business",
  // community: "group of people, often living near each other",
  // compatible: "if two people get on well then they are ____",
};

//Initial references
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSectionChances = document.getElementById(
  "user-input-section-chances"
);
const userInpSectionWord = document.getElementById("user-input-section-word");
const resultText = document.getElementById("result");
let word = document.getElementById("word");
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
  speechSynthesis.getVoices();
  let voices = window.speechSynthesis.getVoices();
  console.log(voices);
  let msg = new SpeechSynthesisUtterance();
  msg.voice = voices[3]; 
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
  userInpSectionChances.innerHTML = `<div id="chanceCount">Chances Left: ${lossCount}</div>`;
};

//Initial function
const init = () => {
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
              disableLetterButtons();
            }

            setTimeout(() => {
              if (winCount === charArray.length) {
                var defaults = {
                  spread: 360,
                  ticks: 80,
                  gravity: 0,
                  decay: 0.96,
                  startVelocity: 10,
                  shapes: ["star"],
                  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
                };

                function shoot() {
                  confetti({
                    ...defaults,
                    particleCount: 370,
                    scalar: 1.5,
                    shapes: ["star"],
                  });
                }
                setTimeout(shoot, 0);
              }
            }, 0);

            setTimeout(() => {
              if (winCount === charArray.length) {
                resultText.innerHTML = `The word was <span>"${randomWord}"</span>. You won!`;
                startBtn.innerText = "Restart";
                //block all buttons
                blocker();
              }
            }, 4000);
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount--;
        document.getElementById(
          "chanceCount"
        ).innerText = `Chances Left: ${lossCount}`;
        message.innerText = `Incorrect letter`;
        message.style.color = "#ff0000";
        if (lossCount <= 0) {
          disableLetterButtons();
        }
        setTimeout(() => {
          if (lossCount <= 0) {
            word.innerHTML = `The word was <span>${randomWord}</span>`;
            resultText.innerHTML = "Game over!";
            blocker();
          }
        }, 4000);
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
