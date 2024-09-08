let nav = document.querySelector("nav");
var logo =document.getElementById("navLogo");
var up_icon=document.querySelector(".up-icon");
window.addEventListener("scroll",function()
{
    if(window.scrollY >50)
    {
        nav.classList.remove("defultNav");
        nav.classList.add("whiteNav");
        logo.src="./images/restaurant-2-dark.png";
        console.log("done")
        nav.style.backgroundColor="white";
    }
    else
    {
        nav.classList.remove("whiteNav");
        nav.classList.add("defultNav");
        logo.src="./images/restaurant-2-light.png";
        console.log("done")

        nav.style.backgroundColor="transparent";
    }
    if(window.scrollY>200)
    {
        up_icon.style.display="block";
    }
    else
    {
        up_icon.style.display="none";
    }
})

let loginAndRegister=document.querySelector(".loginAndRegister");
let account=document.querySelector(".account");
let loginAndRegisterSidepar=document.querySelector(".loginAndRegisterSidepar");
let accountSidepar=document.querySelector(".accountSidepar");

    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        loginAndRegister.style.display="flex";
        account.style.display="none";
        loginAndRegisterSidepar.style.display="flex";
        accountSidepar.style.display="none";
    }
    else
    {
        console.log("innone")
        loginAndRegister.style.display="none";
        account.style.display="block";
        loginAndRegisterSidepar.style.display="none";
        accountSidepar.style.display="block";
    }
