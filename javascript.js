const select = document.querySelector("select");
const terminalBox = document.querySelector(".terminalBox");

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
        document.querySelector("p").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.querySelector("p").innerHTML += "<br>";
        i = 0;
        txt = getRandomPhrase()
    }
}

function autoScroll() {
    terminalBox.scrollTop = terminalBox.scrollHeight;
}

function handleKeyPress(){
    typeWriter();
    autoScroll();
}

function changeTheme () {
    if (select.value == 'classic'){
        terminalBox.classList.add('classic');
        terminalBox.classList.remove('MSDOS');
    }
    else if (select.value == 'MSDOS') {
        terminalBox.classList.add('MSDOS');
        terminalBox.classList.remove('classic');

    }
}

select.addEventListener("change", changeTheme)
document.addEventListener("keydown",  handleKeyPress, false);

document.addEventListener("click",  handleKeyPress, false);