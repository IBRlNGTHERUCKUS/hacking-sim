const html2 = document.querySelector("html");
//const para = document.querySelector("p");
//no clue why this doesn't work 

function printText(){
    const para = document.querySelector("p");
    para.textContent += "hello";
    
}


document.addEventListener("keydown",  printText, false);