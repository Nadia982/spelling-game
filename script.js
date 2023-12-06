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
  // sixth set of spellings (from 1 Dec 2023)
  bridal: "relating to a female on her wedding day" ,
  bridle: "something people put over a horse's head and nose to direct the horse when someone is riding it",
  which: "a question word used when you are asking someone to select something", 
  witch: "noun: a mythical character that rides a broomstick and casts spells",
  unsocial: "not willing to mix with other people; keeping to yourself", 
  antisocial: "behaving in a way that can annoy or harm others", 
  waist: "noun: circumference of the trunk of your body (above your stomach and below your ribcage", 
  waste: "verb: to misuse things; noun: items that are going to be disposed of",
  wreck: "verb: to ruin something; noun: something that has been ruined, or a ship that can no longer sail", 
yacht: "noun: a kind of ship used for holidays or long journeys at sea. Can often be luxurious",
weather: "noun: sunny, windy, rainy etc.", 
whether: "used when mentioning two different options", 
autumn: "noun: the season between summer and winter", 
breakthrough: "noun: when you have a good idea or make a lot of progress", 
biscuit: "noun: a delicious snack; often eaten together with a cup of tea" 


  // 2016 sample paper - paper 2
  // mission: "Meaning 1 - abstract noun: an assignment or job given to a person or group. Meaning 2 - concrete noun: the people who carry out the assignment",
  // lose: "verb: to misplace something",
  // loose: "adjective: something (especially clothing) that is not tight-fitting, or not tightly fixed in its place",
  // sign: "Meaning 1 - noun: a thing or gesture that indicates the location of something else. Meaning 2 - verb: to write one's name", 
  // country: "noun: a nation or territory",
  // gymnastics: "noun: a type of exercise that involves somersaults, flips, cartwheels, leaps, balancing and stretching", 
  // edible: "adjective: something that is capable of being eaten",  
  // sleigh: "Meaning 1 - noun: a sledge that can be used to slide on snow. Meaning 2 - verb: to ride on a sledge", 
  // delicious: "adjective: tasty", 
  // cent: "noun: 1/100 of a dollar", 
  // scent: "noun: a pleasant smell or perfume", 
  // sent: "verb: past participle of 'send'. Synonym: transmitted", 
  // illusion: "noun: an optical trick", 
  // parachute: "Meaning 1 - noun: a large cloth that pilots use to slow their descent if they have to eject from a plane. Meaning 2 - verb: the act of descending using this large cloth.", 
  // abundance: "noun: plenty", 
  // unavoidably: "adverb: unpreventably", 
  // ominous: "adjective: a sign that makes it seem that something bad is about to happen", 
  // dissolve: "verb: when a solid or powder becomes part of a liquid",
  // draw: "verb: to sketch or create an image on paper ",
  // drawer: "noun: a part of a piece of furniture that you can pull out to store small items",
  // position: "Meaning 1 - noun: the place where something is. Meaning 2 - verb: when you put something in a particular place", 
  // possession: "Noun: something that belongs to you",
 
// fifth set of spellings. Spellings were set in November 2023.
// fictitious: "adjective: invented, made up",
// obedient: "adjective: someone who does what other people say",
// practise: "verb: to repeat something over and over again until you can do it well",
// practice: "noun: a training session, often for sport",
// preference: "noun: liking one option better than another",
// ridiculous: "adjective: strange or absurd",
// seam: "noun: the edges of an item of clothing",
// seem: "verb: to appear to be a certain way",
// subtle: "adjective: gentle or not obvious",
// thorough: "adjective: detailed or careful",
// torturous: "adjective: painful or difficult",
// transference: "noun: the act of transferring something",
// unofficial: "adjective: not officially allowed",

// 2023 sample paper??? (check date)
// official: "Meaning 1 - adjective: the correct way of doing something. Meaning 2 - noun: a person who has official duties",
// obey: "verb: to do what someone says",
// misunderstood: "adjective: when something is not interpreted correctly"

  //Fourth set of spellings 
// fancy: "elaborate or expensive",
// furious: "very angry",
// gnome: "a type of garden ornament", 
// handkerchief: "a piece of cloth that is used to blow your nose", 
// hospitable: "welcoming to guests", 
// hour: "60 minutes",
// independent: "able to manage by yourself",
// infer: "to work something out from other information you are given",
// lessen: "verb: to decrease",
// lesson: "noun: a time for learning, especially at school", 
// license: "verb: the act of allowing someone to do something", 
// licence: "noun: a certificate that allows you to do something e.g. a driving licence",
// limb: "arm or leg", 
// misunderstood: "misinterpreted", 
// nutritious: "healthy; containing vitamins and minerals",

//year 3 and 4 words
// accident: "unfortunate incident which may result in injury or damage",
// accidently: "verb: the act of having an unfortunate incident",
// actual: "real or existing now",
// actually: "really happening",
// address: "location of a place",
// although: "however",
// answer: "a response, reply or reaction to something",
// appear: "be visible or on show",
// arrive: "be at a place or time",
// believe: "accept that something is true",
// bicycle: "two-wheeled vehicle",
// breath: "one puff of air in the lungs",
// breathe: "continuously inhaling and exhaling",
// build: "to develop and grow- a building, a relationship etc.",
// busy : "already doing something",
// business: "a company or things to discuss", 
// calendar: "an open diary to keep important dates",
// caught: "found doing something",
// centre: "the middle",
// century: "100 years",
// certain: "very sure",
// circle: "round shape or a small group",
// complete: "entire, whole",
// consider: "think about",
// continue: "carry on with",
// decide: "choose something",
// describe: "use words to talk about features or appearances",
// different: "not the same",
// difficult: "hard, not easy",
// disappear: "hide or be out of view",
// early: "arrive before expected time",
// earth: "our planet",
// eight: "number between 7 and 9",
// eighth: "number place in a line",
// enough: "plenty",
// exercise: "being physical or working out",
// experience: "done something before",
// experiment: "do something to see what happens",
// extreme: "very or ultra",
// famous: "well known",
// favourite: "most loved",
// February: "month between January and March",
// forward: "unafraid to say feelings",
// forwards: "to move in the right direction",
// fruit: "sweet healthy treat containing pips or seeds",
// grammar: "rules of writing",
// group: "collection of people or things",
// guard: "keep and eye on something",
// guide: "show the way",
// heard: "listened to words or sounds",
// heart: "organ that pumps blood around your body or a shape",
// height: "measurement of length",
// history: "something that has already happened or a lesson at school",
// imagine: "to think about something that hasn't happpened",
// important: "vital or much needed",
// increase: "grow or get bigger",
// interest: "something that you like or want to know more about",
// island: "a small place with no land borders",
// knowledge: "information collected in your brain",
// learn: "listen and find out new information",
// length: "long side of an object or measurement",
// libary: "collection of books",
// material: "fabric or textile",
// medicine: "pills or liquid to make you feel better",
// mention: "talk about",
// minute: "60 seconds",
// natural: "not man-made",
// naughty: "badly behaved",
// notice: "spot a difference in something",
// occasion: "an event",
// occasionally: "sometimes happening",
// often: "happening alot",
// opposite: "completely different from something or someone else",
// ordinary: "normal or usual",
// particular: "precise or exact",
// peculiar: "strange or odd",
// perhaps: "maybe or might",
// popular: "well liked or occuring often",
// position: "place or location of something",
// possess: "have something",
// possession: "an object belonging to you or someone else",
// possible: "can happen or might be",
// potatoes: "starchy root vegetables",
// pressure: "overly full or under stress",
// probably: "very likely",
// promise: "say you'll definitely do something",
// purpose: "reason for doing something",
// quarter: "one in four",
// question: "to ask something",
// recent: "new or just done",
// regular: "often or normal",
// reign: "to have power",
// remember: "not forgetting",
// sentence: "string of words",
// separate: "individual or not attached",
// special: "particularly lovely or precious",
// straight: "not bent",
// strange: "odd or unusual",
// strength: "strong or powerful",
// suppose: "maybe, perhaps",
// surprise: "unexpected occurence",
// therefore: "however",
// though: "however",
// thought: "had a think about",
// through: "coming out of the other side",
// various: "lots of different objects",
// weight: "how heavy something is",
// woman: "a lady",
// women: "two or more ladies"

  // Third set of spellings
    // deceiving: "tricking", 
    // defensible: "a thing or idea that can be defended", 
    // defer: "to postpone or delay", 
    // definite: "certain", 
    // delicious: "tasty; good to eat",
    // dependable: "reliable",
    // design: "a plan or blueprint",
    // determined: "committed to doing something",
    // divisible: "capable of being divided",
    // doubt: "uncertainty",
    // dumb: "unable to speak",
    // elegancy: "gracefulness; beauty",
    // equip: "prepare or stock up", 
    // expectancy: "hope; probability",
    // extravagancy: "excess or wastefulness" 

  // Second set of spellings  
  // compliancy: "the state of being willing to do what someone else wants",
  // comprehensible: "capable of being understood",
  // conceitedly: "doing something in an unpleasantly proud way",
  // conscience: "a person's sense of right and wrong",
  // conscious: "awake and aware of your surroundings",
  // constructible: "something that can be built",
  // controversy: "a subject that people have strong opposing views on",
  // convenience: "the state of being easy to do",
  // convertible: "something that can change in appearance or how it works",
  // correspond: "to match up with, or to write to",
  // criticise: "to state the faults of a person or thing",
  // crucial: "very important; vital",
  // crumb: "a tiny piece of food",
  // debt: "money you have borrowed from someone else",
  // t: "t",
  // u: "u",
  // "computer-aided": "helped by a computer",

  // First set of spellings  
  // bible: "holy book for Christians",
  // border: "dividing line between two countries",
  // bold: "brave, or bright in colour",
  // boarder: "a pupil who stays at school overnight",
  // borough: "name for different local areas in London",
  // bowled: "'threw', but in a ball game",
  // buffer:
  //   "Something that provides a space or barrier to reduce impact between two things",
  // category: "type",
  // climb: "to ascend a steep or vertical surface",
  // collectable: "valuable item",
  // comb: "this isn't a brush, but you can use it to brush your hair",
  // commercial: "relating to business",
  // community: "group of people, often living near each other",
  // compatible: "if two people get on well then they are ____",
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
let word = document.getElementById("word");
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
let voices = window.speechSynthesis.getVoices();
let synth = window.speechSynthesis;

//Start game
startBtn.addEventListener("click", () => {
  const play = () => {
    const reset = () => {
      let allLetters = document.querySelectorAll(".letters");
      let allLettersArray = Array.from(allLetters);
      allLettersArray.forEach((button) => (button.disabled = false));
      allLettersArray.forEach((button) => button.classList.remove("correct"));
      allLettersArray.forEach((button) => button.classList.remove("incorrect"));
      message.innerText = "";
    };
    questionNo++;
    reset();
    generateWord();

    controls.classList.add("hide");
    initialFunction();

    //Read random word out loud
    let msg = new SpeechSynthesisUtterance();
    msg.text = randomWord;
    let voiceList = document.querySelector("#voiceList");
    PopulateVoices();
    if (speechSynthesis !== undefined) {
      speechSynthesis.onvoiceschanged = PopulateVoices;
    }
    let selectedVoiceName =
      "Microsoft Sonia Online (Natural) - English (United Kingdom)";
    voices.forEach((voice) => {
      if (voice.name === selectedVoiceName) {
        msg.voice = voice;
      }
    });
    window.speechSynthesis.speak(msg);
  };
  play();
});

function PopulateVoices() {
  voices = synth.getVoices();
  // let selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  voiceList.innerHTML = "";
  voices.forEach((voice) => {
    let listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);
  });

  voiceList.selectedIndex = 111;
}

//Read word out loud after clicking "Say word" button
speakWordBtn.addEventListener("click", () => {
  speakWordBtn.classList.add("glow");
  setTimeout(() => {
    speakWordBtn.classList.remove("glow");
  }, 1500);
  //Read random word out loud
  let msg = new SpeechSynthesisUtterance();
  msg.text = randomWord;
  let voiceList = document.querySelector("#voiceList");
  PopulateVoices();
  if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
  }
  let selectedVoiceName =
    "Microsoft Sonia Online (Natural) - English (United Kingdom)";
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      msg.voice = voice;
    }
  });
  window.speechSynthesis.speak(msg);
});

//Read definition out loud after clicking "Say definition" button
speakDefinitionBtn.addEventListener("click", () => {
  speakDefinitionBtn.classList.add("glow");
  setTimeout(() => {
    speakDefinitionBtn.classList.remove("glow");
  }, 3000);
  let msg = new SpeechSynthesisUtterance();
  msg.text = randomHint;
  let voiceList = document.querySelector("#voiceList");
  PopulateVoices();
  if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
  }
  let selectedVoiceName =
    "Microsoft Sonia Online (Natural) - English (United Kingdom)";
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      msg.voice = voice;
    }
  });
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
  randomWord = randomArray[questionNo - 1];
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
const initialFunction = () => {
  //Show remaining chances
  const showChances = () => {
    let heartsLeft = new Array(lossCount);
    heartsLeft.fill('<ion-icon class="heart" name="heart"></ion-icon>');
    userInpSectionChances.innerHTML = `<div id="chanceCount"><span>Chances left (for this word): ${lossCount}</span><span class="heartSpan"> ${heartsLeft.join(
      " "
    )}</span></div>`;
  };
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  // word.innerText = "";
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
                  startVelocity: 1,
                  shapes: ["star"],
                  colors: [
                    "FFE40002",
                    "FFBD0003",
                    "E8940004",
                    "FFCA6C05",
                    "FDFFB806",
                  ],
                };

                function shoot() {
                  confetti({
                    ...defaults,
                    particleCount: 70,
                    scalar: 1.8,
                    shapes: ["star"],
                  });
                }
                setTimeout(shoot, 50);
              }
            }, 0);

            if (winCount === charArray.length) {
              console.log("questionNo is now " + questionNo);
              console.log(
                "options.length is now " + Object.keys(options).length
              );

              if (questionNo === Object.keys(options).length) {
                console.log("They match!");
                setTimeout(() => {
                  startBtn.innerText =
                    "Game completed! Click here to start a new game.";
                  //block all buttons
                  blocker();
                  startBtn.addEventListener("click", () => {
                    location.replace(location.href);
                  });
                }, 2500);
              } else {
                setTimeout(() => {
                  startBtn.innerText = "Next word";
                  //block all buttons
                  blocker();
                }, 2500);
              }
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
  initialFunction();
};
