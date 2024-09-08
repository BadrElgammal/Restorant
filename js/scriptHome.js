

const texts = ["Welcome to our French Restaurant!","We're the best restaurant in town.", "Enjoy the best meals!", "Book your table now!"];
const typingSpeed = 100; 
const eraseSpeed = 50; 
const delayBetweenTexts = 1000; 

const typingTextElement = document.querySelector('.typing-text');

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeAndEraseText() {
    
    const currentText = texts[textIndex];
    
    if (!isErasing && charIndex < currentText.length) {
       
        typingTextElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeAndEraseText, typingSpeed);
    } else if (isErasing && charIndex > 0) {
       
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeAndEraseText, eraseSpeed);
    } else {
       
        isErasing = !isErasing;
        if (!isErasing) {
           
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(typeAndEraseText, delayBetweenTexts);
    }
}
window.onload = typeAndEraseText;


function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("openSidebar");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("openSidebar");
}


function navbarMoblile()
{
    if(window.outerWidth<800)
    {
        nav.classList.remove("defultNav");
        nav.classList.add("whiteNav");
        logo.src="./images/restaurant-2-dark.png";
        nav.style.backgroundColor="white";
    }
    else
    {
        nav.classList.remove("whiteNav");
        nav.classList.add("defultNav");
        logo.src="./images/restaurant-2-light2.png";
        nav.style.backgroundColor="transparent";
    }
}
navbarMoblile();
window.onresize = navbarMobile;

up_icon.addEventListener("click",function()
{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})