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