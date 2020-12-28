"useStrict";

const btnOne = document.querySelector(".optionOne");
const btnTwo = document.querySelector(".optionTwo");
const btnNew = document.querySelector(".newGame");
let paragraf = document.querySelector(".paragrafOne");

let url = "https://images5.alphacoders.com/102/1022372.jpg";

let url2 =
  "https://i.pinimg.com/originals/7c/cb/04/7ccb0464671e0f8b391407ae58dfe050.jpg";

let url3 =
  "https://i.pinimg.com/originals/a9/b8/fe/a9b8fef5a48ef222c9d6ae9564bbb9bb.jpg";

let url4 =
  "https://img.gurugamer.com/resize/740x-/2019/06/16/cyberpunk20772-4978.jpg";

let url5 = "https://i.ytimg.com/vi/VFNAJC7H96M/maxresdefault.jpg";

let url6 =
  "https://i1.wp.com/www.toiletovhell.com/wp-content/uploads/2015/04/bloodborne-youdiedlol2.png?ssl=1";

let newimg = "https://i.redd.it/8wk4f2yryqey.jpg";

let div = document.querySelector(".One");

btnOne.addEventListener("click", function () {
  paragraf.style.backgroundColor = `rgba(164, 193, 218, 0.3)`;
  paragraf.style.color = "yellow";
  paragraf.style.fontWeight = "700";
  paragraf.textContent =
    "You choose to fight. You fought, bravely and won. The guy had an axe and hammer in his hands, but he could not beat you. You are a strong one, thats for shure. You have blood all over you, and you are hurt. You go out, you see three more coming towards you, you will?";
  btnOne.textContent = "Hide";
  btnTwo.textContent = "Run";
  div.style.backgroundImage = `url(${url})`;
  btnTwo.addEventListener("click", function () {
    document.body.style.border = "5px solid red";
    document.body.style.backgroundImage = `url(${url6})`;
    btnOne.textContent = "Game Over";
    btnTwo.textContent = "Game Over";
    div.style.backgroundImage = `url(${url5})`;
    paragraf.textContent =
      "You start running and you come to random people, they all look at you strangely and avoid you. You cry for help and finnaly a women comes to you, she gives you her hand, and when you grab her hand she pulls out her gun, and puts a bullet right between your eyebrows. - Refresh page to start again";
  });

  btnOne.addEventListener("click", function () {
    paragraf.textContent =
      "You hidden in a trash near you. They look around but they didnt found you. You are lucky.You exit trash container you were in. Now you are dirty and you are bleeding. You see a phone booth near, you go there and try to call Police. No one answers, the phone is not working.";
    btnOne.textContent = "Go to other phone booth";
    btnTwo.textContent = "Run towards the crowd";
    div.style.backgroundImage = `url(${url3})`;
    btnOne.addEventListener("click", function () {
      paragraf.textContent =
        "You got to other phone booth, but on the way there the guys that were looking for you found you, and kill you. You are dead. - Refresh page to start again";
      document.body.style.border = "5px solid red";
      btnOne.textContent = "Game Over";
      btnTwo.textContent = "Game Over";
      div.style.backgroundImage = `url(${url4})`;
    });
  });
});

btnTwo.addEventListener("click", function () {
  paragraf.style.backgroundColor = `rgba(164, 193, 218, 0.85)`;
  paragraf.style.color = "black";
  paragraf.style.fontWeight = "700";
  paragraf.textContent =
    "You choose to run like a pussy. You even pulled out your knife, but he managed to catch you in the end and kill you with his axe, you are a dead man now, my son. - Refresh page to start again";
  document.body.style.border = "5px solid red";
  btnOne.textContent = "Game Over";
  btnTwo.textContent = "Game Over";
  div.style.backgroundImage = `url(${url2})`;
});
