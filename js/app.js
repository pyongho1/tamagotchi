/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let hunger, sleepiness, level, health, petName;

/*------------------------ Cached Element References ------------------------*/

const feed = document.getElementById("feed");
const msg = document.getElementById("message");
const nameBtn = document.getElementById("name-button");

/*----------------------------- Event Listeners -----------------------------*/

feed.addEventListener("click", eat);
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
  hunger += 1;
  msg.textContent = hunger;
}

function music() {
  var audio = new Audio("./assets/backgroundMusic.mp3");
  audio.loop = true;
  audio.play();
}

// function health() {

// }

function hungerTime() {
  setInterval(() => {
    if (hunger !== 0) {
      hunger -= 1;
      console.log("Hunger: ", hunger);
    } else {
      return;
    }
  }, 500);
}

function excitementTime() {
  setInterval(() => {
    if (excitement !== 0) {
      excitement -= 1;
      console.log("Excitement", excitement);
    } else {
      return;
    }
  }, 500);
}
