const span = document.querySelector(".span");
let text = "Find your dream house.";
const splitText = text.split("");
let characterIndex = 0;
let index = 0;
function insertText() {
  characterIndex++;
  span.innerHTML += splitText[index].slice(0, 1);

  if (characterIndex === splitText[index].length) {
    index++;
    characterIndex = 0;
  }

  if (index === splitText.length) {
    index = 0;
    span.innerHTML = "";
  }

  setTimeout(() => {
    insertText();
  }, 300);
}
setTimeout(() => {
  insertText();
}, 2000);
