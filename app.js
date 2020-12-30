"useStrict";

//Buttons and other classes

const btnOne = document.querySelector(".optionOne");
const btnTwo = document.querySelector(".optionTwo");
const paragraf = document.querySelector(".paragrafOne");
const gameScreen = document.querySelector(".One");

//Images

let url = "https://images5.alphacoders.com/102/1022372.jpg";

let url2 =
  "https://i.pinimg.com/originals/7c/cb/04/7ccb0464671e0f8b391407ae58dfe050.jpg";

let url3 =
  "https://i.pinimg.com/originals/a9/b8/fe/a9b8fef5a48ef222c9d6ae9564bbb9bb.jpg";

let url4 =
  "https://img.gurugamer.com/resize/740x-/2019/06/16/cyberpunk20772-4978.jpg";

let url5 = "https://i.ytimg.com/vi/VFNAJC7H96M/maxresdefault.jpg";

let url6 =
  "https://i.pinimg.com/originals/c9/48/68/c94868267611bc1fde76574be34a6610.jpg";

let url7 = "https://pbs.twimg.com/media/DdxrD3DXkAEC3ZJ.jpg";

let url8 =
  "https://www.onlineunitedstatescasinos.com/wp-content/uploads/2020/04/Cyberpunk-City-Online-Slot-Intro-Game.jpg";

let url9 =
  "https://cdna.artstation.com/p/assets/images/images/020/058/164/large/stanislav-kemezh-screen-1.jpg?1566197986";

let funeral = "https://i.ytimg.com/vi/YOHlVCRNwyU/maxresdefault.jpg";

let newimg = "https://i.redd.it/8wk4f2yryqey.jpg";

let gamble =
  "https://geeks.bet/wp-content/uploads/Cyberpunk-2077-Multiplayer-Mode.jpg";

//Character stats
const cyberHunter = { stamina: 10, strenght: 15, health: 25 };
const cyberMage = { stamina: 15, strenght: 10, health: 30 };

//playing mechanic
let playing = true;

//Function for changing inner text and image

const imgTxtChange = function (img, text, color, size = "30px") {
  paragraf.innerText = text;
  gameScreen.style.backgroundImage = `url(${img})`;
  paragraf.style.textAlign = "center";
  paragraf.style.fontSize = size;
  paragraf.style.color = color;
  paragraf.style.fontWeight = 700;
  //style.backgroundImage = `url(${url})`;
};

// Function for rolling die
const rollDie = function () {
  return Math.floor(Math.random() * 25) + 1;
};
let randomNumber = rollDie();

//Function for reseting the game

const resetGame = function () {
  paragraf.innerText =
    "You go to No Tell motel in search for your girlfrind who works there.You enter a room. You see a guy dressed in chicken in front of you,there is blood all over the room. You pull out your knife. Do you want to fight or run?";
  gameScreen.style.backgroundImage = `url(${newimg})`;
  paragraf.style.fontSize = "30px";
};

//************************************************************************************/

//If mage was selected

btnOne.addEventListener("click", function () {
  btnOne.innerText = "Next";
  imgTxtChange(
    url8,
    "You have choosen the CyberHunter. Well, all i gotta say is good luck with hunting sir.",
    "blue"
  );
  btnTwo.classList.add("noneDisplay");
  //Calling the first room function so next slide can open
  btnOne.addEventListener("click", firstVictim);
});

//First room, first victim

const firstVictim = function () {
  imgTxtChange(
    newimg,
    "You go to your fist hunting, you enter a hotel and you see a man you are searching for coming towards you with axe, you will?",
    "red",
    "45px"
  );
  btnTwo.classList.remove("noneDisplay");
  btnOne.innerText = "Fight";
  btnTwo.innerText = "Run";
  btnOne.addEventListener("click", firstFight);
  btnTwo.addEventListener("click", choiceRun);
};

//First choice, fight

const firstFight = function () {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "red";
  imgTxtChange(
    url4,
    "You choose to fight. Now you roll die, if you have less than 13 you lose, if you have more than 13 you win. If you have 13 you win, and you get 10000 $",
    "black"
  );
  btnOne.textContent = "Roll die";
  btnTwo.classList.add("noneDisplay");
  btnOne.addEventListener("click", firstFightRollDie);
};

//First choice - fight,  roll die

let randomRoll = rollDie();

const firstFightRollDie = function () {
  btnOne.textContent = "Next";
  imgTxtChange(gamble, `You got ${randomRoll}`, "blue", "70px");
  btnOne.addEventListener("click", howMuchWasRollDie);
  document.body.style.backgroundImage = `url(https://wallpaperaccess.com/full/3703011.jpg)`;
};

//If die was more than 13, less or equal

const howMuchWasRollDie = function () {
  btnOne.classList.add("noneDisplay");
  if (randomRoll > 13) {
    imgTxtChange(
      url,
      "You go outside and live happy ever after",
      "silver",
      "55px"
    );
  } else if (randomRoll < 13) {
    imgTxtChange(funeral, "Goodbye");
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
  } else {
    imgTxtChange(
      url5,
      "You found 10000$ near body, you are ritch bitch now, you bought yourself new bike, and you live life of your dreamns",
      "black"
    );
  }
};

//Mage second choice, run

const choiceRun = function () {
  imgTxtChange(
    url3,
    "You choose to run like a pussy, you managed to escape and hide in a trash bin near you. Now you are all dirty and smell like shit. After few minutes you exit the trash bin and look around you, it looks clear, but after few steps you feel cold gun on the back of your head. You turn around and you see man that you runned away from.",
    "blue",
    "30px"
  );
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "green";
  btnTwo.addEventListener("click", secondChoiceRun);
  btnOne.addEventListener("click", firstFight);
};

const secondChoiceRun = function () {
  btnOne.classList.add("noneDisplay");
  btnTwo.classList.add("noneDisplay");
  imgTxtChange(
    url9,
    "You run but you can't run forever man, this time you did it, but you have to FIGHT TO SURVIVE",
    "red"
  );
};
