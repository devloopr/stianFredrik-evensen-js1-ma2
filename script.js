// question 1

const myFunctionExpression = function() {
  console.log("Stian Fredrik Evensen");
};

// question 2

const buttonSelector = document.querySelector(".btn");

function logTheClick() {
  console.log("I was clicked!");
}

buttonSelector.addEventListener("click", logTheClick);

// question 3

const textInput = document.querySelector("#firstName");

function keyWasReleased(event) {
  console.log(event.key);
}

textInput.addEventListener("keydown", keyWasReleased);

// question 4

const button = document.querySelector("button");

function hoverOnMouse() {
  button.classList.add("hover");
}

button.addEventListener("mouseover", hoverOnMouse);

// question 5

const mouseOutButton = document.querySelector("[data-animal='dog']");

function mouseOut() {
  mouseOutButton.classList.remove("hover");
}

mouseOutButton.addEventListener("mouseout", mouseOut);

// question 6

const listSelections = document.querySelectorAll("li");

for (let i = 0; i < listSelections.length; i++) {
  listSelections[i].addEventListener("mouseover", dataAttributes);
}
function dataAttributes(event) {
  console.log(event.target.dataset.animal);
}

// question 7

const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepName) {
  console.log(sheepName);
});

// question 9

function timer() {
  console.log("hello");
  if (counter === 5) {
    clearInterval(stopTimer);
  }
  counter++;
}

let counter = 0;

const stopTimer = setInterval(timer, 500);

// question 10

const counterContainer = document.querySelector("div.container");

function updateText() {
  counterContainer.innerHTML = "Text updated";
}

setTimeout(updateText, 2000);
