// Object containing words and hints
const options = {
  bible: "holy book for Christians",
  border: "dividing line between two countries",
  bold: "brave",
  boarder: "a pupil who stays at school overnight",
  borough: "name for different local areas in London",
  bowled: "'threw', but in a ball game",
  buffer: "a space or barrier separating two things",
  category: "type",
  climb: "to go upwards",
  collectable: "valuable item",
  comb: "you can use this to brush your hair",
  commercial: "relating to business",
  community: "group of people, often living near each other",
  compatible: "if two people get on well then they are ____",
};

//Initial references
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSectionChances  = document.getElementById("user-input-section-chances");
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
  let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
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
  hintRef.innerHTML = `<div id="wordHint"><span>Hint: </span>${randomHint}</div>`;
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
  lossCount = 7;
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

            setTimeout(()=>{
              if (winCount === charArray.length) {
                resultText.innerHTML = `The word was <span>"${randomWord}"</span>. You won!`;
                startBtn.innerText = "Restart"
                //block all buttons
                blocker();
              }}, 4000);
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount--;
        document.getElementById("chanceCount").innerText = `Chances Left: ${lossCount}`;
        message.innerText = `Incorrect letter`;
        message.style.color = "#ff0000";
        setTimeout(()=>{
        if(lossCount == 0) {
          word.innerHTML = `The word was <span>${randomWord}</span>`
          resultText.innerHTML = "Game over!"
          blocker();
        }}, 4000);
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
