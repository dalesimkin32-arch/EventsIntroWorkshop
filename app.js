console.log(`Halo Whirled`);

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
  button.textContent = "Get Off Me!";
});

button.addEventListener("mouseover", function (event) {
  console.log(event);
  button.textContent = "Stop Tickling";
});

button.addEventListener("mouseleave", function (event) {
  console.log(event);
  button.textContent = "Click me!";
});

button.addEventListener("wheel", function (event) {
  console.log(event);
  button.textContent = "Big Wheels keep on Rollin'";
});
