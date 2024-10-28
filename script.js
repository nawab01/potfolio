const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}

const dynamicText = document.querySelector("h2 span");
const words = ["Designer!", "Developer!", "Gamer!", "Tech Enthusiast!", "Tinkerer!"];

function createCustomElement(anchorText, anchorLink){
    var aTag = document.createElement("a");
    aTag.href = anchorLink;
    aTag.innerHTML = anchorText;
    return aTag;
}
  
var parent = document.getElementById('explore');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function generateNewColor() {
    let lvl = 250;
    let colr = Math.floor(Math.random()*lvl)<<16 | Math.floor(Math.random()*lvl)<<8 | Math.floor(Math.random()*lvl);
    return '#' + colr.toString(16).padStart(6, "0");
}

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        
        // Generate new color when switching to a new word
        if (!isDeleting) {
            document.getElementById('wordie').style.color = generateNewColor();
        }
        
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();