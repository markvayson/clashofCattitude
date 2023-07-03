document.addEventListener("DOMContentLoaded", function() {
    const choices = ['rock', 'paper', 'scissor'];
    let isPlaying = false;
    
    const npcStartingWords = [
        "Prepare yourself, human. Whiskerclaw is here to test your skills!",
        "Meow-velous! Let the battle commence between us, mortal.",
        "In the realm of Rock, Paper, Scissors, Whiskerclaw reigns supreme!",
        "Your feeble attempts won't be enough to defeat me, hooman. Let's see what you've got!",
        "Ah, another challenger. The Clash of Catitude begins now!"
    ];

    const playerPhrases = [
        "Whiskerclaw, we may be evenly matched, but I won't back down. Prepare for our next encounter!",
        "A draw, Whiskerclaw. Our battles are always intense. I look forward to our next clash of wits!",
        "No winner this time, Whiskerclaw. Our rivalry grows stronger with each round. Until we meet again!",
        "Well fought, Whiskerclaw. Neither of us could claim victory, but our rivalry continues to fuel my determination.",
        "Whiskerclaw, the battle ended in a draw, but our rivalry is far from over. Prepare yourself for the next round!"
      ];
      
      const randomPlayerPhrase = playerPhrases[Math.floor(Math.random() * playerPhrases.length)];


    const whiskerclawPhrases = [
        "A draw? Don't get too confident, human. I'll get you next time.",
        "A stalemate, but I won't settle for it. Prepare for your ultimate defeat!",
        "Impressive, but luck won't save you forever. I'll have my revenge soon.",
        "We're evenly matched, for now. But mark my words, I'll triumph in the end.",
        "A draw? This battle is far from over. I'll keep honing my claws for our next encounter."
      ];
      const randomWhiskerclawPhrase = whiskerclawPhrases[Math.floor(Math.random() * whiskerclawPhrases.length)];


    const userStartingWords = [
        "Prepare yourself, Whiskerclaw! I'm ready to take you on!",
    "Whiskerclaw, your reign ends here! Let's see who triumphs!",
    "I won't back down, Whiskerclaw! Get ready to face defeat!",
    "Whiskerclaw, your claws may be sharp, but my strategy is sharper!",
    "Time to show Whiskerclaw who the true champion is!"
    ];

    const npcWinning = [[
        "Meow-velous! I've claimed the first victory. Don't get too comfortable, human.",
        "You've fallen into my feline trap. The battle has just begun!",
        "Hiss! The superior claws of Whiskerclaw have prevailed in this round."
       ],[
        "I'm one step closer to victory. Your defeat is inevitable, human.",
        "You're no match for my calculated moves. The tide turns in my favor!",
        "Purrfection! I've outsmarted you once again. Can you handle the pressure?"
        ],[
        "You're struggling to keep up, human. My victory is within paw's reach!",
        "I've clawed my way to another triumph. Your defeat grows nearer.",
        "Your feeble attempts amuse me. Prepare for a true display of my power!"
        ],[
        "You're no match for my superior strategy. Your defeat is all but certain.",
        "You're running out of luck, human. The scales tip irreversibly in my favor!",
        "You're at my mercy. Your feeble attempts are like a mouse before a lion!"
        ],[
        "No! The feline foe emerges triumphant once again. You're no match for Whiskerclaw!",
        "You've put up a valiant fight, but my supremacy remains unchallenged. Bow before me!",
        "Hiss and growl! You've fallen short of victory. I am the true conqueror of the battlefield!"]
    ];

    const npcLosing = [[
        "You think you stand a chance against me? Prepare to be crushed, puny human!",
    "I am Whiskerclaw, the unbeatable feline master! Tremble before my claws!",
    "Your feeble attempts to defeat me are laughable! I am the true champion of this game!"],[
        "Did you really think you could outsmart me? I am Whiskerclaw, the ultimate gaming genius!",
"Your defeat is imminent, as I am the superior adversary! Behold the might of Whiskerclaw!",
"Pathetic human, you cannot comprehend the level of skill possessed by Whiskerclaw!"
    ],["My victories over you are a testament to my superior strategy and intellect. Bow down to Whiskerclaw!",
    "You're no match for my cunning, human! Accept your defeat at the paws of Whiskerclaw!",
    "Whiskerclaw always prevails! Your defeat is merely another step in my path to glory!"

    ],["Your futile attempts to defeat me are amusing, but ultimately useless. Whiskerclaw remains supreme!",
    "The more you struggle, the deeper you fall into the clutches of Whiskerclaw's unbeatable prowess!",
    "Your defeat is inevitable, for I am Whiskerclaw, the indomitable champion of this game!"],
    ["Witness the culmination of your failures, human! Whiskerclaw's victory is absolute and undeniable!",
    "You are but a pawn in Whiskerclaw's game, destined to be defeated by my superior skills!",
    "As the final round approaches, know that your defeat is inevitable. Prepare to be forever humbled by Whiskerclaw!"
    ]];

    const userWinning = [[
        "Whiskerclaw, I've only just begun! Prepare for a taste of true defeat!",
        "Your feeble attempts are laughable, Whiskerclaw. Bow before your superior!",
        "The first round is mine, Whiskerclaw. Tremble in the face of my unwavering prowess!"],
        [
        "Whiskerclaw, your hopes dwindle with each passing round. Surrender now and save yourself the embarrassment!",
        "Behold, Whiskerclaw, as I dominate yet again! Your fate is sealed, and victory is mine!",
        "Resistance is futile, Whiskerclaw. The more I win, the more I prove your insignificance!"
    ],[
        "Whiskerclaw, your defeat is becoming routine. Prepare to witness true humiliation in each round!",
        "Pathetic, Whiskerclaw! My superiority grows with every victory. Your defeat is inescapable!",
        "Round after round, Whiskerclaw, you face nothing but defeat at my hands. Accept your fate!"
    ],[
        "Whiskerclaw, the tides have turned against you. You're no match for my relentless determination!",
        "I revel in your defeat, Whiskerclaw! Each round brings you closer to the realization of your inferiority!",
        "Whiskerclaw, the more I conquer, the more your spirit breaks. Prepare for an eternity of defeat!"
    ],[
        "Whiskerclaw, this is your final chance to surrender. Accept your defeat and acknowledge my unrivaled supremacy!",
        "Behold, Whiskerclaw, the indomitable force that crushes you in every round. Your defeat is complete!",
        "As the rounds pass, Whiskerclaw, your defeat is etched into history. Tremble before the victor!"
    ]];

    const userLosing = [[
    "Whiskerclaw, you got lucky this time! But mark my words, I'll come back stronger!",
    "A temporary setback, Whiskerclaw! I won't let this defeat dampen my spirit!",
    "Well played, Whiskerclaw, but don't get too comfortable. I'll be back for vengeance!"

    ],["Whiskerclaw, you may have won this round, but the battle is far from over. I'm just getting started!",
    "Impressive, Whiskerclaw, but I won't let this defeat define me. I'll bounce back with even greater determination!",
    "This defeat fuels my fire, Whiskerclaw! Prepare to face the consequences in the upcoming rounds!"

    ],["Whiskerclaw, you may be ahead for now, but I refuse to accept defeat. I'll turn the tables soon enough!",
    "I won't let this setback break me, Whiskerclaw! I'll rise from this defeat and prove my resilience!",
    "Whiskerclaw, enjoy your temporary victory. But remember, I'm not one to stay down for long!"],[

    ],["Whiskerclaw, your wins won't deter me. I'll learn from this defeat and come back stronger than ever!",
    "This defeat only fuels my determination, Whiskerclaw. Get ready for a fierce comeback in the upcoming rounds!",
    "I refuse to be discouraged, Whiskerclaw! You may have won this round, but I won't let it break my spirit!"],[

    ],["Whiskerclaw, you may have the upper hand for now, but the game isn't over. I'll use this defeat as motivation for future victories!",
    "The final round didn't go in my favor, Whiskerclaw, but I won't let it overshadow the progress I've made throughout the game!",
    "Whiskerclaw, your victory in the last round won't stop me from striving for greatness. I'll return with renewed determination!"
    ]];



    let choicesIndex = 0;
    let newIndex = 1;
    let myRound = 5;
    let compRound = 5;
    let myChoice = '';
    let compChoice = '';
    let npcWins = 0;
    let userWins = 0;








    //GET 
    const app = document.getElementById('app');
    const title = document.getElementById('title');
    const disPlay = document.getElementById('disPlay');
    const compDisplay = document.getElementById('compDisplay');
    const npcPhrase = document.getElementById('npcPhrase');

    //new
    const menu = document.getElementById('menu');  
    const logo = document.getElementById('logo');
    const play = document.getElementById('play');
    play.innerHTML = 'Play';
    
    const npcLife = document.getElementById('npcLife');

    //user
    const userLife = document.getElementById('userLife');
    const userChoice = document.getElementById('userChoice');



    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorBtn = document.getElementById('scissorBtn');

    const burger = document.getElementById('burger');
    burger.addEventListener('click', function() {
        console.log(!isPlaying);
        if(isPlaying){
            play.innerHTML = 'Resume';
            burger.innerHTML = 'X';
        } else {
            burger.classList.add("hidden");
            play.innerHTML = 'Play';

        }
        
        menu.classList.remove("hidden");
    });

    function resume() {
        burger.innerHTML = '&#9776';
        letsplay();
    }
    
    //CREATE 
    const myDisplay = document.createElement('div');
    const pTitle = document.createElement('p');
    const scores = document.createElement('p');
    const tryAgainBtn = document.createElement('button');
    // const inputName = document.createElement('input');
    const rockImg = document.createElement('img');
    const paperImg = document.createElement('img');
    const scissorImg = document.createElement('img');
    const randImg = document.createElement('img');
    const choiceImg = document.createElement('img');
    const compFace = document.createElement('img');
    const npcLifeText = document.createElement('p');


    //Src 
    rockImg.src = 'src/img/rock.png';
    paperImg.src = 'src/img/paper.png';
    scissorImg.src = 'src/img/scissor.png';
    compFace.src = 'src/img/cat/angel.png';
    
    rockImg.setAttribute('alt', 'rock');
    paperImg.setAttribute('alt', 'paper');
    scissorImg.setAttribute('alt', 'scissor');


    //TEXT CONTENT
    pTitle.textContent = choices[0];
    
    //ATTRIBUTES
    randImg.id = 'blackImg';
    choiceImg.id = 'blackImg';





    

    //npc
    
    //npc.get
    const npc = document.getElementById('npc');
    const npcID = document.getElementById('npcID');
    const npcICON = document.getElementById('npcICON');
    const npcPhraseText = document.getElementById('npcPhraseText');
    const npcCred = document.getElementById('npcCred');

    //npc.create
    const npcIMG = document.createElement('img');

    //npc.class
    npc.style.backgroundImage = 'url("src/img/battlefield.png")';
    npcIMG.src = "src/img/cat/whiskerclaw.png"
    npcIMG.classList.add('w-1/3','h-2/3');
    npcPhrase.classList.add('bg-gray-100');
    

    //npc.append
    npcICON.appendChild(npcIMG);
    npcLife.appendChild(npcLifeText);
    





    //user

    //user.get
    const userID = document.getElementById('userID');
    const userBTNS = document.getElementById('userBTNS');
    const userPhrase = document.getElementById('userPhrase');
    //user.create

    //user.class
    

    //user.append

    
    


    



    //EVENT LISTENERS
    rockBtn.addEventListener('click', handleBtnClick);    
    paperBtn.addEventListener('click', handleBtnClick);
    scissorBtn.addEventListener('click', handleBtnClick);
    play.addEventListener('click', startIt);
    tryAgainBtn.addEventListener('click', newRound);
    
    function hideImg(){
        choiceImg.style.display = 'none';
        randImg.style.display = 'none';
    }

    function showImg() {
        choiceImg.style.display = 'block';
        randImg.style.display = 'block';
    }
    
    function hideBtn(){
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorBtn.style.display = 'none';
    }
    function showBtn(){
        rockBtn.style.display = 'block';
        paperBtn.style.display = 'block';
        scissorBtn.style.display = 'block';
    }
    
    function handleBtnClick(event) {
        let computerSelection = getComputerChoice();
        let alt = event.target.alt
        let div = event.target.textContent
        let playerSelection = alt ? alt : div.toLowerCase();

        npcChoice.innerHTML = `picks <strong>${computerSelection}</strong>.`;
        userChoice.innerHTML = `picks <strong>${playerSelection}</strong>.`;
        userID.classList.add("bg-gray-200",'rounded-lg','shadow-sm');

        npcPhrase.classList.add('bg-gray-100');
        npcID.classList.add('bg-gray-200');

        hideBtn();
        showImg();
        
        setTimeout(() => {
            showBtn();
            hideImg();
            userChoice.innerHTML = '';
            userID.classList.remove("bg-gray-200",'rounded-lg','shadow-sm');
            npcChoice.innerHTML = '';
            npcID.classList.remove('bg-gray-200');
            
        }, 2000)
        playRound(playerSelection,computerSelection);
    }


    darkBody();
    function startIt() {
        isPlaying = true;
        menu.classList.add("hidden");
        burger.classList.remove("hidden");
        randomStartingWords();
        if(play.innerHTML === 'Play'){
            compRound = 5;
            myRound = 5;

        }
        burger.innerHTML = '&#9776';
        letsPlay();
    }

    function randomStartingWords() {
        const npcRandomIndex = Math.floor(Math.random() * npcStartingWords.length);
        const npcChoice = npcStartingWords[npcRandomIndex];
        const userRandomIndex = Math.floor(Math.random() * userStartingWords.length);
        const userGetChoice = userStartingWords[userRandomIndex];
        npcPhraseText.innerHTML = npcChoice;
        userPhrase.innerHTML = userGetChoice;

    }

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomChoice = choices[randomIndex];
        return randomChoice;
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
    function letsPlay() {
        let npcLifeLeft = '';
        let userLifeLeft = '';
        for(let i = 0; i < compRound; i++) {
            npcLifeLeft += "\u2665 ";

        };
        for(let i = 0; i < myRound; i++) {
            userLifeLeft += "\u2665 ";

        };
        npcLifeText.textContent = npcLifeLeft;
        userLife.innerHTML = userLifeLeft;
        
        addPlayBtn();
        if(myRound === 0 || compRound === 0){
            if(myRound === 0){
                play.innerHTML = "Give up?";
            }
            if(compRound === 0){
                play.innerHTML = "Rematch?";
            }

            setTimeout(() =>{

            menu.classList.remove('hidden');
            },2000)
        }

    }
    

    function npcWords(){
        let roundIndex = npcWins - 1;
        let npcWords = npcWinning[roundIndex];
        let userWords = userLosing[roundIndex];
        
        const wordIndex = Math.floor(Math.random() * npcWords.length);
        const npcWordSelected = npcWords[wordIndex];
        const userWordSelected = userWords[wordIndex];

        userPhrase.innerHTML = userWordSelected;
        npcPhraseText.innerHTML = npcWordSelected;

        
        
    }
    function userWords() {
        let roundIndex = userWins - 1;
        let userWords = userWinning[roundIndex];
        let npcWords = npcLosing[roundIndex];


        
        const wordIndex = Math.floor(Math.random() * userWords.length);
        const userWordSelected = userWords[wordIndex];
        const npcWordSelected = npcWords[wordIndex];

        userPhrase.innerHTML = userWordSelected;
        npcPhraseText.innerHTML = npcWordSelected;


    }


    function playRound(me, comp) {
        myChoice = me;
        compChoice = comp;
        if(myChoice === comp) {
            let i = 0;
            return ;

        }
        switch(myChoice){
            case 'rock':
                if(compChoice === 'paper') {
                    myRound--;
                    npcWins++;
                    npcWords();
                    
                } else {
                    compRound--;
                    userWins++
                    userWords();
                }
                letsPlay();
                break;
            case 'paper':
                if(compChoice === 'scissor') {
                    myRound--;
                    npcWins++;
                    npcWords();
                } else {
                    compRound--;
                    userWins++
                    userWords();
                }
                letsPlay();
                break;
            case 'scissor':
                if(compChoice === 'rock') {
                    myRound--;
                    npcWins++;
                    npcWords();
                } else {
                    compRound--;
                    userWins++
                    userWords();
                }
                letsPlay();
                break;

        }

    }

    


    

    
        

    
});