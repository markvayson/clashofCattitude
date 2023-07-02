document.addEventListener("DOMContentLoaded", function() {
    const choices = ['rock', 'paper', 'scissor'];
    
    const npcStartingWords = [
        "Prepare yourself, human. Whiskerclaw is here to test your skills!",
        "Meow-velous! Let the battle commence between us, mortal.",
        "In the realm of Rock, Paper, Scissors, Whiskerclaw reigns supreme!",
        "Your feeble attempts won't be enough to defeat me, hooman. Let's see what you've got!",
        "Ah, another challenger. The Clash of Catitude begins now!"
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
    const userPhrase = document.getElementById('userPhrase');

    //new
    const menu = document.getElementById('menu');  
    const logo = document.getElementById('logo');
    const userChoices = document.getElementById('userChoices');
    const play = document.getElementById('play');
    play.innerHTML = 'Play';
    
    const npcLife = document.getElementById('npcLife');
    const userLife = document.getElementById('userLife');

    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorBtn = document.getElementById('scissorBtn');

    const burger = document.getElementById('burger');
    burger.addEventListener('click', function() {
        menu.classList.remove("hidden");
        // menu.classList.add("rounded-3xl","drop-shadow-2xl","bg-gray-100","flex","flex-col", "absolute" ,"menu", "justify-center" ,"items-center");
        burger.classList.add("hidden");
        play.innerHTML = 'Play';
    });
    
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
    const npcPhraseText = document.createElement('p');
    const userLifeText = document.createElement('p');
    const userPhraseText = document.createElement('p');


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


    rockImg.classList.add();
    paperImg.classList.add();
    scissorImg.classList.add();



    npcLifeText.classList.add('text-2xl','text-red-500');
    npcPhraseText.classList.add('text-lg','text-left','p-2', 'bg-gray-100','h-min', 'rounded-lg','drop-shadow-md');
    userLifeText.classList.add('text-2xl','text-red-500');
    userPhraseText.classList.add('text-lg','text-left','p-2', 'bg-gray-100','h-min', 'rounded-lg','drop-shadow-md');
    



    npcLife.appendChild(npcLifeText);
    userLife.appendChild(userLifeText);

    pTitle.classList.add('box-border','text-2xl','lg;text-5xl');
    
    
    myDisplay.classList.add('grid','grid-cols-2','col-span-2','order-3','lg:order-1');
    myDisplay.id = 'myDisplay';


    
    scores.classList.add('place-self-center');

    compFace.classList.add('max-w-full' , 'max-h-full');
    randImg.classList.add('max-w-full','max-h-full');
    // inputName.classList.add('placeholder:text-center','text-3xl','p-0','border-0','outline-0','rounded-full', 'box-border');
    // inputName.type = 'text';
    // inputName.placeholder = 'Enter name to play';


    //APPEND
    npcPhrase.appendChild(npcPhraseText);
    userPhrase.appendChild(userPhraseText);



    // verSus.appendChild(inputName);


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
        let playerSelection = event.target.alt;
        npcPhrase.appendChild(npcPhraseText);
        userPhrase.appendChild(userPhraseText);

        npcPhraseText.innerHTML = `I choose <strong> ${computerSelection} </strong>.<br>`;
        userPhraseText.innerHTML = `I choose <strong> ${playerSelection} </strong>.<br>`;
        

        choiceImg.src = `src/img/${playerSelection}.png`;
        hideBtn();
        showImg();
        
        setTimeout(() => {
            showBtn();
            hideImg();
            // userPhrase.removeChild(userPhraseText);
            // npcPhrase.removeChild(npcPhraseText);
            
        }, 2000)
        playRound(playerSelection,computerSelection);
    }

    function startIt() {
        menu.classList.add("hidden");
        burger.classList.remove("hidden");
        randomStartingWords();
        letsPlay();
    }

    function randomStartingWords() {
        const npcRandomIndex = Math.floor(Math.random() * npcStartingWords.length);
        const npcChoice = npcStartingWords[npcRandomIndex];
        const userRandomIndex = Math.floor(Math.random() * userStartingWords.length);
        const userChoice = userStartingWords[userRandomIndex];
        npcPhraseText.textContent = npcChoice;
        userPhraseText.textContent = userChoice;

    }

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomChoice = choices[randomIndex];
        return randomChoice;
    }


    function newRound() {
        myRound = 0;
        compRound = 0;
        verSus.removeChild(tryAgainBtn);
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
        userLifeText.textContent = userLifeLeft;
        
        addPlayBtn();
        if(myRound === 0 || compRound === 0){
            if(myRound === 0){
                console.log(`i lose`);
                play.innerHTML = "Give up?";
            }
            if(compRound === 0){
                console.log(`i win`);
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


        const pickNow = `${userWordSelected} <br> (choose again)`;

        npcPhraseText.innerHTML += npcWordSelected;
        userPhraseText.innerHTML += pickNow;
    }
    function userWords() {
        let roundIndex = userWins - 1;
        let userWords = userWinning[roundIndex];
        let npcWords = npcLosing[roundIndex];
        
        const wordIndex = Math.floor(Math.random() * userWords.length);
        const userWordSelected = userWords[wordIndex];
        const npcWordSelected = npcWords[wordIndex];

        const pickNow = `${userWordSelected} <br> (choose again)`;

        npcPhraseText.innerHTML += npcWordSelected;
        userPhraseText.innerHTML += pickNow;

    }
    function playRound(me, comp) {
        myChoice = me;
        compChoice = comp;
        if(myChoice === comp) {
            let x = `I choose <strong> ${myChoice} </strong>. <br> Again!`;
            let y = `I choose <strong> ${compChoice} </strong>. <br> Again!`;
            userPhraseText.innerHTML = x;
            npcPhraseText.innerHTML = y;
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

    
    function checkIf() {
        if (choicesIndex >= choices.length) {
            choicesIndex = 0;
        }

        if (choicesIndex === 2 ) {
            newIndex = 0;
        }
    }


    function titleMinus() {  
        checkIf();
        
        let tilt = 'Clash of Hands ';
        let choice = choices[choicesIndex];
        let newChoice = choices[newIndex];
        let i = choice.length;



        const minus = setInterval(function (){
            pTitle.textContent = tilt + choice.slice(0,i) + newChoice.slice(i,newChoice.length);
            
            if(i === 0) {
                clearInterval(minus);
                newIndex++;
                choicesIndex++;
                playTitle(1);
            }
            i--;
        }, 160)
    }


    function titleAdd() {
        checkIf();
        let tilt = 'Clash of Hands ';
        let choice = choices[choicesIndex];
        let newChoice = choices[newIndex];
        let i = 0;


        const add = setInterval(function() {
            pTitle.textContent = tilt + newChoice.slice(0,i) + choice.slice(i,choice.length);
            if(i === newChoice.length) {
                clearInterval(add);
                newIndex++;
                choicesIndex++;
                playTitle(0);
            }
            i++;
        }, 160)
}

    
        

    function playTitle(e) {
        
        if( e === 0) {
            setTimeout(titleMinus(), 2000)
        }
        if( e === 1) {
            setTimeout(titleAdd(), 2000)
        }
    }
    
    randomStartingWords();
        letsPlay();
});