document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissor"];
  let isPlaying = false;

  let myRound = 5;
  let compRound = 5;
  let myChoice = "";
  let compChoice = "";
  let npcWins = 0;
  let userWins = 0;

  //GET
  const npcPhrase = document.getElementById("npcPhrase");
  const selection = document.getElementById("selection");
  const again = document.getElementById("again");
  const scene = document.getElementById("scene");
  //new
  const menu = document.getElementById("menu");
  const play = document.getElementById("play");
  play.innerHTML = "Play";

  const npcLife = document.getElementById("npcLife");

  //user
  const userLife = document.getElementById("userLife");
  const userChoice = document.getElementById("userChoice");

  const rockBtn = document.getElementById("rockBtn");
  const paperBtn = document.getElementById("paperBtn");
  const scissorBtn = document.getElementById("scissorBtn");

  const burger = document.getElementById("burger");
  burger.addEventListener("click", function () {
    if (isPlaying) {
      scene.classList.add("hidden");
      play.innerHTML = "Resume";
      burger.innerHTML = "X";
      selection.appendChild(newGame);
    } else {
      burger.classList.add("hidden");
      play.innerHTML = "Play";
    }
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
      burger.innerHTML = "&#9776;";
      scene.classList.remove("hidden");
    }
  });

  //CREATE
  const rockImg = document.createElement("img");
  const paperImg = document.createElement("img");
  const scissorImg = document.createElement("img");
  const randImg = document.createElement("img");
  const choiceImg = document.createElement("img");
  const compFace = document.createElement("img");
  const npcLifeText = document.createElement("p");
  const newGame = document.createElement("button");

  newGame.textContent = "New Game";
  newGame.classList.add(
    "text-3xl",
    "mt-5",
    "hover:text-cyan-500",
    "hover:text-4xl",
    "transition-all"
  );

  newGame.addEventListener("click", startIt);

  //Src
  rockImg.src = "src/img/rock.png";
  paperImg.src = "src/img/paper.png";
  scissorImg.src = "src/img/scissor.png";
  compFace.src = "src/img/cat/angel.png";

  rockImg.setAttribute("alt", "rock");
  paperImg.setAttribute("alt", "paper");
  scissorImg.setAttribute("alt", "scissor");

  //TEXT CONTENT

  //ATTRIBUTES
  randImg.id = "blackImg";
  choiceImg.id = "blackImg";

  //npc

  //npc.get
  const npc = document.getElementById("npc");
  const npcID = document.getElementById("npcID");
  const npcICON = document.getElementById("npcICON");
  const npcPhraseText = document.getElementById("npcPhraseText");
  const npcCred = document.getElementById("npcCred");

  //npc.create
  const npcIMG = document.createElement("img");

  //npc.class
  npc.style.backgroundImage = 'url("src/img/battlefield.png")';
  npcIMG.src = "src/img/cat/whiskerclaw.png";
  npcIMG.classList.add("w-1/3", "h-2/3");
  npcPhrase.classList.add("bg-gray-50");

  //npc.append
  npcICON.appendChild(npcIMG);
  npcLife.appendChild(npcLifeText);

  //user

  //user.get
  const userID = document.getElementById("userID");
  const userBTNS = document.getElementById("userBTNS");
  const userPhrase = document.getElementById("userPhrase");
  //user.create

  //user.class

  //user.append

  //EVENT LISTENERS
  play.addEventListener("click", startIt);
  again.addEventListener("click", startIt);

  function handleBtnClick(event) {
    let computerSelection = getComputerChoice();
    let alt = event.target.alt;
    let div = event.target.textContent;
    let playerSelection = alt ? alt : div.toLowerCase();

    npcChoice.innerHTML = `picks <strong>${computerSelection}</strong>.`;
    userChoice.innerHTML = `picks <strong>${playerSelection}</strong>.`;
    userID.classList.add("bg-gray-100", "rounded-full", "shadow-sm");

    npcID.classList.add("bg-gray-50");

    rockBtn.classList.add("hidden");
    paperBtn.classList.add("hidden");
    scissorBtn.classList.add("hidden");

    setTimeout(() => {
      rockBtn.classList.remove("hidden");
      paperBtn.classList.remove("hidden");
      scissorBtn.classList.remove("hidden");

      userChoice.innerHTML = "";
      userID.classList.remove("bg-gray-100", "rounded-full", "shadow-sm");
      npcChoice.innerHTML = "";
      npcID.classList.remove("bg-gray-50");
    }, 2000);
    playRound(playerSelection, computerSelection);
  }

  function startIt(event) {
    let choose = event.target.innerHTML;
    console.log(choose);
    if (choose === "Play" || choose === "New Game") {
      compRound = 5;
      myRound = 5;
    }
    rockBtn.addEventListener("click", handleBtnClick);
    paperBtn.addEventListener("click", handleBtnClick);
    scissorBtn.addEventListener("click", handleBtnClick);

    npcWins = 0;
    userWins = 0;
    isPlaying = true;
    main.classList.remove("grayscale");
    if (scene.classList.contains("hidden")) {
      scene.classList.remove("hidden");
      scene.classList.add("flex");
    }
    menu.classList.add("hidden");
    burger.classList.remove("hidden");
    if (again.classList.contains("hidden")) {
    } else {
      again.classList.add("hidden");
      again.classList.remove("flex");
    }
    randomStartingWords();
    burger.innerHTML = "&#9776";
    letsPlay();
  }

  function randomStartingWords() {
    const npcRandomIndex = Math.floor(Math.random() * npcStartingWords.length);
    const npcChoice = npcStartingWords[npcRandomIndex];
    const userRandomIndex = Math.floor(
      Math.random() * userStartingWords.length
    );
    const userGetChoice = userStartingWords[userRandomIndex];
    npcPhraseText.innerHTML = npcChoice;
    userPhrase.innerHTML = userGetChoice;
  }

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    return randomChoice;
  }

  function DrawPhrases(user, npc) {
    const userIndex = Math.floor(Math.random() * user.length);
    const npcIndex = Math.floor(Math.random() * npc.length);

    userPhrase.innerHTML = user[userIndex];
    npcPhraseText.innerHTML = npc[npcIndex];
  }

  function newRound() {
    myRound = 0;
    compRound = 0;
    letsPlay();
  }

  function addPlayBtn() {
    rockBtn.appendChild(rockImg);
    paperBtn.appendChild(paperImg);
    scissorBtn.appendChild(scissorImg);
  }

  function end() {
    again.classList.remove("hidden");
    again.classList.add("flex");
    main.classList.add("grayscale");
    burger.classList.add("hidden");
    isPlaying = false;
    rockBtn.removeEventListener("click", handleBtnClick);
    paperBtn.removeEventListener("click", handleBtnClick);
    scissorBtn.removeEventListener("click", handleBtnClick);
  }
  function letsPlay() {
    let npcLifeLeft = "";
    let userLifeLeft = "";
    for (let i = 0; i < compRound; i++) {
      npcLifeLeft += "\u2665 ";
    }
    for (let i = 0; i < myRound; i++) {
      userLifeLeft += "\u2665 ";
    }
    npcLifeText.textContent = npcLifeLeft;
    userLife.innerHTML = userLifeLeft;

    addPlayBtn();
    if (myRound === 0 || compRound === 0) {
      setTimeout(end, 2000);
    }
  }

  function randomWords(winner, npc, user) {
    let roundIndex = winner - 1;
    let userWords = user[roundIndex];
    let npcWords = npc[roundIndex];

    const wordIndex = Math.floor(Math.random() * 3);

    const npcWordSelected = npcWords[wordIndex];
    const userWordSelected = userWords[wordIndex];

    userPhrase.innerHTML = userWordSelected;
    npcPhraseText.innerHTML = npcWordSelected;
  }

  function playRound(me, comp) {
    myChoice = me;
    compChoice = comp;
    if (myChoice === comp) {
      DrawPhrases(userDrawPhrase, npcDrawPhrase);
      return;
    } else {
      switch (myChoice) {
        case "rock":
          if (compChoice === "paper") {
            myRound--;
            npcWins++;
            randomWords(npcWins, npcWinning, userLosing);
          } else {
            compRound--;
            userWins++;
            randomWords(userWins, npcLosing, userWinning);
          }
          letsPlay();
          break;
        case "paper":
          if (compChoice === "scissor") {
            myRound--;
            npcWins++;
            randomWords(npcWins, npcWinning, userLosing);
          } else {
            compRound--;
            userWins++;
            randomWords(userWins, npcLosing, userWinning);
          }
          letsPlay();
          break;
        case "scissor":
          if (compChoice === "rock") {
            myRound--;
            npcWins++;
            randomWords(npcWins, npcWinning, userLosing);
          } else {
            compRound--;
            userWins++;
            randomWords(userWins, npcLosing, userWinning);
          }
          letsPlay();
          break;
      }
    }
  }
});
