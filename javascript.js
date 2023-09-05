let i = 0;
let speed = 50;
let txt = "initializing hackerman.exe\n";

const phrases = ["running code.exe", "injecting mainframe procedures", "finding root access...", "terminal entry granted", ];

function getRandomPhrase() {
    let rand = Math.floor(Math.random() * phrases.length);
    return phrases[rand];
  }

function typeWriter() {
    if (i < txt.length) {
        document.querySelector("p").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.querySelector("p").innerHTML += "<br>";
        i = 0;
        txt = getRandomPhrase()
    }
}
document.addEventListener("keydown",  typeWriter, false);