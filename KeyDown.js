let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a keydown event listener to the document
container.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
display.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});