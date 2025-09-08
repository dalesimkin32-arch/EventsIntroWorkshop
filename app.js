console.log(`Halo Whirled`);

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

button.addEventListener("mouseover", function (event) {
  console.log(event);
});

button.addEventListener("wheel", function (event) {
  console.log(event);
});

button.addEventListener("dragover", function (event) {
  console.log(event);
});
