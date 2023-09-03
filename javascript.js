let i = 0;
let speed = 50;
let txt = "first ";

const phrases = ["Running var ", "if not", "then() ", "hacking,x running."];

function getRandomPhrase() {
    let rand = Math.floor(Math.random() * phrases.length);
    return phrases[rand];
  }

function typeWriter() {
    if (i < txt.length) {
        document.querySelector("p").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        i = 0;
        txt = getRandomPhrase()
    }
}
document.addEventListener("keydown",  typeWriter, false);