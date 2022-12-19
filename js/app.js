/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let hunger, sleepiness, level, health, petName;

/*------------------------ Cached Element References ------------------------*/

const feed = document.getElementById("feed");
const destroyCode = document.getElementById("play");
const msg = document.getElementById("message");
const hungerMsg = document.getElementById("hunger-level");
const excitementMsg = document.getElementById("excitement-level");
const nameBtn = document.getElementById("name-button");
const img = document.getElementById("my-image");

/*----------------------------- Event Listeners -----------------------------*/

feed.addEventListener("click", eat);
destroyCode.addEventListener("click", play);
nameBtn.addEventListener("click", getName);

/*-------------------------------- Functions --------------------------------*/
// init();

function init() {
  hunger = 10;
  excitement = 10;
  level = 1;
  health = 100;
  music();
  hungerTime();
  excitementTime();
  render();
}

function render() {
  getName();
}

function getName() {
  let inputValue = document.getElementById("name-input");
  let petName = inputValue.value;
  document.getElementById("pet-name").textContent = petName;
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
}

function play() {
  if (excitement !== 0) {
    excitement += 1;
  } else {
    return;
  }
}

function music() {
  var audio = new Audio("./assets/backgroundMusic.mp3");
  audio.loop = true;
  audio.play();
}

// function health() {}

function hungerTime() {
  setInterval(() => {
    if (hunger !== 0) {
      hunger -= 1;
      hungerMsg.textContent = `Hunger: ${hunger}`;
      console.log("Hunger: ", hunger);
      if (hunger === 0) {
        gameOver();
      }
    } else {
      return;
    }
  }, 500);
}

function excitementTime() {
  setInterval(() => {
    if (excitement !== 0) {
      excitement -= 1;
      excitementMsg.textContent = `Excitement: ${excitement}`;
      console.log("Excitement", excitement);
      if (excitement === 0) {
        gameOver();
        return;
      }
    } else {
      return;
    }
  }, 500);
}

function evolve() {
  if(excitementTime)
  setTimeout(function () {
    img.src = "./assets/testSprite2.gif";
  }, 5000);
}

function gameOver() {
  excitementMsg.textContent = "";
  hungerMsg.textContent = "";
  msg.textContent = "GAME OVER!";
}
