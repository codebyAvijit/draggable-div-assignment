const container = document.querySelector(".container");
header = container.querySelector("header");

function onDrag({ movementX, movementY }) {
  let fetchStyle = window.getComputedStyle(container);
  let leftValue = parseInt(fetchStyle.left);
  let topValue = parseInt(fetchStyle.top);
  // console.log(leftValue, topValue);
  container.style.left = `${leftValue + movementX}px`;
  container.style.top = `${topValue + movementY}px`;
}

header.addEventListener("mousedown", () => {
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
  header.classList.remove("active");
  header.addEventListener("mousemove", onDrag);
});
