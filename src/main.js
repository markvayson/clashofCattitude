document.addEventListener("DOMContentLoaded", function() {
    const choices = ['rock', 'paper', 'scissor'];
    
    
    
    let choicesIndex = 0;
    let newIndex = 1;
    let myRound = 0;
    let compRound = 0;
    let myChoice = '';
    let compChoice = '';
    //GET 
    const app = document.getElementById('app');
    const title = document.getElementById('title');
    const disPlay = document.getElementById('disPlay');
    const verSus = document.getElementById('verSus');
    const compDisplay = document.getElementById('compDisplay');


    //CREATE 
    const myDisplay = document.createElement('div');
    const pTitle = document.createElement('p');
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorBtn = document.createElement('button');
    const scores = document.createElement('p');
    const menu = document.createElement('button');
    const tryAgainBtn = document.createElement('button');
    // const inputName = document.createElement('input');
    const play = document.createElement('div');
    const rockImg = document.createElement('img');
    const paperImg = document.createElement('img');
    const scissorImg = document.createElement('img');
    const randImg = document.createElement('img');
    const choiceImg = document.createElement('img');
    const compFace = document.createElement('img');


    //Src 
    rockImg.src = 'src/img/rock.png';
    paperImg.src = 'src/img/paper.png';
    scissorImg.src = 'src/img/scissor.png';
    compFace.src = 'src/img/cat/angel.png';
    


    //TEXT CONTENT
    rockBtn.textContent = choices[0];
    paperBtn.textContent = choices[1];
    scissorBtn.textContent = choices[2];
    menu.textContent = 'Play?';
    pTitle.textContent = choices[0];
    
    //ATTRIBUTES
    rockImg.id = 'blackImg';
    paperImg.id = 'blackImg';   
    scissorImg.id = 'blackImg';
    randImg.id = 'blackImg';
    choiceImg.id = 'blackImg';

    rockBtn.classList.add('button-53');
    paperBtn.classList.add('button-53');
    scissorBtn.classList.add('button-53');

   
    rockBtn.appendChild(rockImg);
    paperBtn.appendChild(paperImg);
    scissorBtn.appendChild(scissorImg);



    pTitle.classList.add('box-border','text-2xl','lg;text-5xl');
    
    
    myDisplay.classList.add('grid','grid-cols-2','col-span-2','order-3','lg:order-1');
    myDisplay.id = 'myDisplay';

    play.id = 'play';
    play.classList.add('flex','h-full', 'place-items-center');

    
    verSus.classList.add('grid','place-items-center','place-self-center');
    scores.classList.add('place-self-center');

    compFace.classList.add('max-w-full' , 'max-h-full');
    randImg.classList.add('max-w-full','max-h-full');
    // inputName.classList.add('placeholder:text-center','text-3xl','p-0','border-0','outline-0','rounded-full', 'box-border');
    // inputName.type = 'text';
    // inputName.placeholder = 'Enter name to play';

    menu.classList.add('text-5xl');
    //APPEND
    title.appendChild(pTitle);

    app.appendChild(disPlay);
    disPlay.appendChild(myDisplay);
    myDisplay.appendChild(play);
    myDisplay.appendChild(choiceImg);

    compDisplay.appendChild(compFace);
    compDisplay.appendChild(randImg);

    // verSus.appendChild(inputName);
    verSus.appendChild(menu);


    //EVENT LISTENERS
    rockBtn.addEventListener('click', handleBtnClick);    
    paperBtn.addEventListener('click', handleBtnClick);
    scissorBtn.addEventListener('click', handleBtnClick);
    menu.addEventListener('click', letsPlay);
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
        let playerSelection = event.target.innerText;
        

        choiceImg.src = `src/img/${playerSelection}.png`;
        hideBtn();
        showImg();
        
        setTimeout(() => {
            showBtn();
            hideImg();
        }, 2000)
        playRound(playerSelection,computerSelection);
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
        play.appendChild(rockBtn);
        play.appendChild(paperBtn);
        play.appendChild(scissorBtn);
    }
    function letsPlay() {
        menu.textContent = '';
        menu.classList.add('order-2');
        scores.textContent = `${myRound} vs ${compRound}`
        
        verSus.appendChild(scores);
        addPlayBtn();
        if(myRound >= 5 || compRound >= 5){
            while(play.firstChild) {
                play.removeChild(play.firstChild);
                tryAgainBtn.textContent = 'Try Again?';
                verSus.appendChild(tryAgainBtn);
                console.log(myRound);
                console.log(compRound);
                if(myRound === 5){
                    compFace.src = 'src/img/cat/tears.png';
                    scores.textContent = `You got ${myRound} wins! Good Job!`;
                  } else {
                    compFace.src = 'src/img/cat/smile.png';
                    scores.textContent = `Computer got ${compRound} wins!`;
                   }
            }
        } else {
            setTimeout(() => {
                compFace.src = 'src/img/cat/angel.png';
            },2000);
        }

    }



    function playRound(me, comp) {
        myChoice = me;
        compChoice = comp;
        randImg.src = `src/img/cat/${compChoice}.png`;
        winSentence = `i got ${myRound} wins because i win`;
        loseSentence = `comp got ${myRound} wins because i lose`;
        if(myChoice === comp) return console.log('draw');
        switch(myChoice){
            case 'rock':
                if(compChoice === 'scissor') {
                    myRound++;
                    compFace.src = 'src/img/cat/tears.png';
                } else {
                    compRound++;
                    compFace.src = 'src/img/cat/smile.png';
                }
                letsPlay();
                break;
            case 'paper':
                if(compChoice === 'rock') {
                    myRound++;
                    compFace.src = 'src/img/cat/tears.png';
                } else {
                    compRound++;
                    compFace.src = 'sr/cimg/cat/smile.png';
                }
                letsPlay();
                break;
            case 'scissor':
                if(compChoice === 'paper') {
                    myRound++;
                    compFace.src = 'src/img/cat/tears.png';
                } else {
                    compRound++;
                    compFace.src = 'src/img/cat/smile.png';
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
    
    
    playTitle(0)

});