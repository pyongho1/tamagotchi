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
const hungerBar = document.getElementById("hunger-fill");
const exciteBar = document.getElementById("excitement-fill");

/*----------------------------- Event Listeners -----------------------------*/

feed.addEventListener("click", eat);
destroyCode.addEventListener("click", play);
nameBtn.addEventListener("click", getName);

/*-------------------------------- Functions --------------------------------*/
// init();

function init() {
  hunger = 90;
  excitement = 90;
  level = 1;
  health = 100;
  music();
  hungerTime();
  excitementTime();
  levelUp();
  // getName();
  render();
}

function render() {
  getName();
}

function getName() {
  let inputValue = document.getElementById("name-input");
  let petName = inputValue.value;
  document.getElementById("pet-name").textContent = `${petName}`;
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
  audio.volume = 0.3;
  audio.play();
}

function levelUp() {
  if (hunger > 100 && excitement > 100) {
    level++;
    console.log("LEVEL UP!");
  }
}

function hungerTime() {
  setInterval(() => {
    if (hunger !== 0) {
      hunger -= 1;
      hungerMsg.textContent = `Hunger: ${hunger}`;
      hungerBar.style.width = `${hunger}%`;
      // console.log("Hunger: ", hunger);
      if (hunger === 0) {
        gameOver();
      }
    } else if (hunger < 100) {
      // return;
      console.log(`LEVEL UP ! LVL: ${level}`);
    } else {
      return;
    }
  }, 1000);
}

function excitementTime() {
  setInterval(() => {
    if (excitement !== 0) {
      excitement -= 1;
      excitementMsg.textContent = `Excitement: ${excitement}`;
      exciteBar.style.width = `${excitement}%`;
      // console.log("Excitement", excitement);
      if (excitement === 0) {
        gameOver();
        return;
      }
    } else {
      return;
    }
  }, 1000);
}

function evolve() {
  if (excitementTime)
    setTimeout(function () {
      img.src = "./assets/testSprite2.gif";
    }, 5000);
}

function gameOver() {
  excitementMsg.textContent = "";
  hungerMsg.textContent = "";
  msg.textContent = "GAME OVER!";
}
