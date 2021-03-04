const text = document.querySelector(".welcome");
console.log(text);
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
