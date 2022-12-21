/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let hunger, nap, level, health, petName, excitement;

/*------------------------ Cached Element References ------------------------*/

const feed = document.getElementById("feed");
const playBtn = document.getElementById("play");
const lvl = document.getElementById("charLevel");
const hungerMsg = document.getElementById("hunger-level");
const excitementMsg = document.getElementById("excitement-level");
const nameBtn = document.getElementById("name-button");
const img = document.getElementById("my-image");
const hungerBar = document.getElementById("hunger-fill");
const exciteBar = document.getElementById("excitement-fill");
const randomBtn = document.getElementById("random");
const barInfo = document.getElementById("barInfo");
const riskLog = document.getElementById("risk-log");
const resetBtn = document.getElementById("reset");

/*----------------------------- Event Listeners -----------------------------*/

feed.addEventListener("click", eat);
playBtn.addEventListener("click", play);
nameBtn.addEventListener("click", getName);
randomBtn.addEventListener("click", getRandomBuff);
resetBtn.addEventListener("click", resetGame);

/*-------------------------------- Functions --------------------------------*/

function init() {
  hunger = 10;
  excitement = 10;
  level = 1;
  health = 100;
  music();
  hungerTime();
  excitementTime();
  levelUp();
  render();
}

function render() {
  getName();
}

function resetGame() {
  location.reload();
}

function getName() {
  let inputValue = document.getElementById("name-input");
  let petName = inputValue.value;
  document.getElementById("pet-name").textContent = `Name: ${petName}`;
  inputValue.value = "";
  if (petName) {
    document.getElementById("start-info").innerHTML = "";
    init();
  }
}

function eat() {
  if (hunger !== 0) {
    hunger += 1;
  } else {
    return;
  }
  levelUp();
}

function play() {
  if (excitement !== 0) {
    excitement += 1;
  } else {
    return;
  }
  levelUp();
}

function music() {
  var audio = new Audio("./assets/backgroundMusic.mp3");
  audio.loop = true;
  audio.volume = 0.3;
  audio.play();
}

function levelUp() {
  if (level < 4) {
    if (hunger > 40 && hunger < 70 && excitement > 40 && excitement < 70) {
      lvl.textContent = `Level: 2`;
      img.src = "./assets/2_slime_idle.png";
      img.classList.add("animate__animated", "animate__flip");
      console.log("LEVEL UP!");
    }
    if (hunger > 70 && hunger < 100 && excitement > 70 && excitement < 100) {
      lvl.textContent = `Level: 3`;
      img.src = "./assets/3_slime_idle.png";
      img.classList.add("animate__animated", "animate__flip");
      console.log("LEVEL UP!");
    }
    if (hunger > 100 && excitement > 100) {
      lvl.textContent = `Level: 4`;
      img.classList.add("animate__animated", "animate__flip");
      console.log("LEVEL UP!");
      confetti.start(1500);
      winGame();
    }
  }
}

function hungerTime() {
  const test = setInterval(() => {
    if (hunger >= 100) {
      hunger = 100;
    }
    if (hunger !== 0) {
      hunger -= 1;
      hungerMsg.textContent = `Hunger: ${hunger}`;
      hungerBar.style.width = `${hunger}%`;
      // console.log("Hunger: ", hunger);
      if (hunger === 0 || excitement === 0) {
        barInfo.parentNode.removeChild(barInfo);
        gameOver();
      }
    } else {
      return;
    }
  }, 1000);
}

function excitementTime() {
  setInterval(() => {
    if (excitement >= 100) {
      excitement = 100;
    }
    if (excitement !== 0) {
      excitement -= 1;
      excitementMsg.textContent = `Excitement: ${excitement}`;
      exciteBar.style.width = `${excitement}%`;
      // console.log("Excitement", excitement);
      if (excitement === 0 || hunger === 0) {
        gameOver();
        return;
      }
    } else {
      return;
    }
  }, 1000);
}

function getRandomBuff() {
  const randomNumber = Math.floor(Math.random() * 4);

  switch (randomNumber) {
    case 0:
      hunger = hunger + 10;
      riskLog.textContent = `LOG: +5 towards hunger! Phew!`;
      console.log("hunger = hunger + 5");
      break;
    case 1:
      hunger = hunger - 5;
      riskLog.textContent = `LOG: -5 towards hunger...😢`;
      console.log("hunger = hunger - 5");
      break;
    case 2:
      excitement = excitement + 10;
      riskLog.textContent = `LOG: +5 towards excitement! Yay!`;
      console.log("excitement = excitement + 5");
      break;
    case 3:
      excitement = excitement - 5;
      riskLog.textContent = `LOG: -5 towards excitement...😢`;
      console.log("excitement = excitement - 3");
      break;
  }
}

function gameOver() {
  excitementMsg.textContent = "";
  hungerMsg.textContent = "";
  lvl.textContent = "GAME OVER!";
  lvl.classList.add("animate__animated", "animate__heartBeat");
  lvl.style.fontSize = "40px";
}

function winGame() {
  barInfo.parentNode.removeChild(barInfo);
  let winAudio = new Audio("./assets/yay.wav");
  winAudio.volume = 0.3;
  winAudio.play();
}
