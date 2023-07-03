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

    const userDrawPhrase = [
        "Whiskerclaw, we may be evenly matched, but I won't back down. Prepare for our next encounter!",
        "A draw, Whiskerclaw. Our battles are always intense. I look forward to our next clash of wits!",
        "No winner this time, Whiskerclaw. Our rivalry grows stronger with each round. Until we meet again!",
        "Well fought, Whiskerclaw. Neither of us could claim victory, but our rivalry continues to fuel my determination.",
        "Whiskerclaw, the battle ended in a draw, but our rivalry is far from over. Prepare yourself for the next round!"
      ];
      
      

    const npcDrawPhrase = [
        "A draw? Don't get too confident, human. I'll get you next time.",
        "A stalemate, but I won't settle for it. Prepare for your ultimate defeat!",
        "Impressive, but luck won't save you forever. I'll have my revenge soon.",
        "We're evenly matched, for now. But mark my words, I'll triumph in the end.",
        "A draw? This battle is far from over. I'll keep honing my claws for our next encounter."
      ];
      
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

    const userLosing = [
        ["Better luck next time!", "Oops! Whiskerclaw got the best of me.", "I'll need to step up my game to defeat Whiskerclaw."],
        ["Whiskerclaw is a tough opponent, but I won't give up!", "I may have lost this round, but I'll come back stronger!", "I'll learn from my mistakes and come back stronger!"],
        ["Whiskerclaw's skills are impressive, but I won't give up!", "I'll train harder to defeat Whiskerclaw next time!", "Even though I lost, I'm determined to win the next round!"],
        ["This round didn't go as planned, but I'll bounce back!", "I'll strategize and come back stronger in the next round!", "Whiskerclaw got lucky this time, but I won't let that discourage me!"],
        ["Whiskerclaw's victory won't dampen my spirits! I'll come back stronger!", "I'll analyze my mistakes and improve for the next round!", "Losing this round won't stop me from giving my best in the next one!"]
      ];


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
    const again = document.getElementById('again');
    const scene = document.getElementById('scene');

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
        if(isPlaying){
            scene.classList.add('hidden');
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
    npcPhrase.classList.add('bg-gray-50');
    

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
    play.addEventListener('click', startIt);
    again.addEventListener('click', startIt);
    
    function handleBtnClick(event) {
        let computerSelection = getComputerChoice();
        let alt = event.target.alt
        let div = event.target.textContent
        let playerSelection = alt ? alt : div.toLowerCase();

        npcChoice.innerHTML = `picks <strong>${computerSelection}</strong>.`;
        userChoice.innerHTML = `picks <strong>${playerSelection}</strong>.`;
        userID.classList.add("bg-gray-100",'rounded-full','shadow-sm');

        npcID.classList.add('bg-gray-50');

        rockBtn.classList.add('hidden');
        paperBtn.classList.add('hidden');
        scissorBtn.classList.add('hidden');
        
        setTimeout(() => {
            rockBtn.classList.remove('hidden');
            paperBtn.classList.remove('hidden');
            scissorBtn.classList.remove('hidden');

            userChoice.innerHTML = '';
            userID.classList.remove("bg-gray-100",'rounded-full','shadow-sm');
            npcChoice.innerHTML = '';
            npcID.classList.remove('bg-gray-50');
            
        }, 2000)
        playRound(playerSelection,computerSelection);
    }


    function startIt() {
        rockBtn.addEventListener('click', handleBtnClick);    
        paperBtn.addEventListener('click', handleBtnClick);
        scissorBtn.addEventListener('click', handleBtnClick);
        npcWins = 0;
        userWins = 0;
        isPlaying = true;
        main.classList.remove('grayscale');
        if(scene.classList.contains('hidden')){
            scene.classList.remove('hidden');
            scene.classList.add('flex');
        }
        menu.classList.add("hidden");
        burger.classList.remove("hidden");
        if(again.classList.contains("hidden")) {

        } else {
            again.classList.add("hidden");
            again.classList.remove("flex");

        }
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


    function DrawPhrases(user,npc) {
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
        main.classList.add('grayscale');
        burger.classList.add('hidden');
        isPlaying = false;
        rockBtn.removeEventListener('click', handleBtnClick);    
        paperBtn.removeEventListener('click', handleBtnClick);
        scissorBtn.removeEventListener('click', handleBtnClick);
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
            setTimeout(end,2000);

            
        }

    }
    

    function randomWords(winner,npc, user){
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
        if(myChoice === comp) {
            DrawPhrases(userDrawPhrase, npcDrawPhrase);
            return;

        } else {
            switch(myChoice){
                case 'rock':
                    if(compChoice === 'paper') {
                        myRound--;
                        npcWins++;
                        randomWords(npcWins, npcWinning, userLosing);
                        
                    } else {
                        compRound--;
                        userWins++
                        randomWords(userWins, npcLosing, userWinning);
                    }
                    letsPlay();
                    break;
                case 'paper':
                    if(compChoice === 'scissor') {
                        myRound--;
                        npcWins++;
                        randomWords(npcWins, npcWinning, userLosing);
                    } else {
                        compRound--;
                        userWins++
                        randomWords(userWins, npcLosing, userWinning);
                    }
                    letsPlay();
                    break;
                case 'scissor':
                    if(compChoice === 'rock') {
                        myRound--;
                        npcWins++;
                        randomWords(npcWins, npcWinning, userLosing);
                    } else {
                        compRound--;
                        userWins++
                        randomWords(userWins, npcLosing, userWinning);
                    }
                    letsPlay();
                    break;
    
            }
        }
        

    }

    


    

    
        

    
});