//Welcome animation
const text = document.querySelector(".welcome");

const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
//creates timer
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  //gets each span element
  const span = text.querySelectorAll("span")[char];
  // adds class fade to each span
  span.classList.add("fade");
  char++;
  //if we've reached the end, stop executing
  if (char === splitText.length) {
    complete();
    return;
  }
}
// stops and clears timer
function complete() {
  clearInterval(timer);
  timer = null;
}

// creates mouseover gray for project box;
const boxes = document.querySelector(".project-box");
const boxes2 = document.querySelectorAll(".project-box");
const overlayBox = document.querySelectorAll(".project-overlay");

for (let i = 0; i < boxes2.length; i++) {
  boxes2[i].addEventListener("mouseover", function () {
    boxes2[i].style.backgroundColor = "lightgray";
    boxes2[i].style.boxShadow = "10px 10px 8px 10px darkgray";
    overlayBox[i].style.visibility = "visible";
  });
  boxes2[i].addEventListener("mouseout", function () {
    boxes2[i].style.backgroundColor = "white";
    boxes2[i].style.boxShadow = "10px 10px 8px 10px #d3d3d3";
    overlayBox[i].style.visibility = "hidden";
  });
}
// creates overlay with link for project box
