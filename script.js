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
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
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
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)]; 
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint"><span>Hint: </span>${randomHint}</div>`
    let displayItem = "";
    randomWord.split("").forEach(value => {displayItem += `<span class="inputSpace">_</span>`})
};



//Initial function
const init = () => {
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
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

    })
    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

window.onload = () => {
init();
}
