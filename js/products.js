let imageIndex;
var container = document.querySelector(".contanir");
let products=[];
async function getData() {
    try {
        let response = await fetch("https://badrelgammal.github.io/json/menu.json");
        products = await response.json();
        let cartona = ``;
        for (let i = 0; i < products.length; i++) {
            cartona += `
                <div class="item">
                    <img src="${products[i].images[1]}" alt="">
                    <div class="caption">
                        <h3>${products[i].name}</h3>
                        <div class="bordr"></div>
                        <p>${products[i].description}</p>
                        <button onclick="gobageproduct(${i});" class="btnInf btn btn-primary me-md-2" type="button">More info</button>
                    </div>
                </div>
            `;
        }
        container.innerHTML += cartona;
        initializeLightBox();
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}
getData();
function initializeLightBox() {
    var lightBoxContainer = document.getElementById("lightBoxContanir");
    var imgs = Array.from(document.querySelectorAll(".item img"));
    var index = -1;

    imgs.forEach(function(img) {
        img.addEventListener('click', function(event) {
            lightBoxContainer.style.display = "flex";
            lightBoxItem.style.backgroundImage = `url(${event.target.src})`;
            index = imgs.indexOf(event.target);
            imageIndex=imgs.indexOf(event.target);
        });
    });

    document.getElementById('closeButton').addEventListener('click', closeClick);
    document.getElementById('nextButton').addEventListener('click', nextClick);
    document.getElementById('prevButton').addEventListener('click', prevClick);

    function closeClick() {
        lightBoxContainer.style.display = "none";
    }

    function nextClick() {
        index = (index + 1) % imgs.length;
        updateLightBoxImage();
    }

    function prevClick() {
        index = (index - 1 + imgs.length) % imgs.length;
        updateLightBoxImage();
    }

    function updateLightBoxImage() {
        var src = imgs[index].getAttribute("src");
        imageIndex=index;
        lightBoxItem.style.backgroundImage = `url(${src})`;
    }

    document.addEventListener("keydown", function(e) {
        if (e.code === "ArrowRight") nextClick();
        else if (e.code === "ArrowLeft") prevClick();
        else if (e.code === "Escape") closeClick();
    });
}
function gobageproduct(index) {
    imageIndex = index;
    sessionStorage.setItem('imageIndex', imageIndex);
    window.location.href = `../Html/product.html`;
}
window.onload = function() {
    let imageIndex = sessionStorage.getItem('imageIndex');
    if (imageIndex >= 0 && imageIndex < products.length) {
        let product = products[imageIndex];
        displayProduct(product);
    }
}
function displayProduct(product) {
    if (!product) {
        console.log("Product not found");
        return;
    }

    let carton = `
        <div class="image" >
        <img class="bigImage" src="${product.images[0]}" alt="">
        <div class="smallimges">
            <img onclick="switchImage(this.src);" class="img1" src="${product.images[0]}" alt="">
            <img onclick="switchImage(this.src);" class="img2" src="${product.images[1]}" alt="">
            <img onclick="switchImage(this.src);" class="img3" src="${product.images[2]}" alt="">
            <img onclick="switchImage(this.src);" class="img4" src="${product.images[3]}" alt="">
        </div>
        </div>
        <div class="caption" >
        <h3>${product.name}</h3> 
        <p>${product.description}</p>
        <p>price :  ${product.price}$</p>
        </div>
    `;
    document.querySelector(".contanerproduct").innerHTML = carton;

}
let bigImage = document.querySelector(".bigImage");

function switchImage(sorc) {
    bigImage.src = sorc;
}
var btnInfo=document.querySelector(".btnInfo");
console.log(btnInfo);
btnInfo.addEventListener('click',function()
{
    gobageproduct(imageIndex);
})

var searchItem=document.querySelector(".searchInput");

function search(value)
{
    var cartoona=``;
    for(var i=0 ;i<products.length;i++)
    {
        
        if(products[i].name.toLowerCase().includes(value.toLowerCase()))
        {
            cartoona+=`
                <div class="item">
                    <img src="${products[i].images[1]}" alt="">
                    <div class="caption">
                        <h3>${products[i].name}</h3>
                        <div class="bordr"></div>
                        <p>${products[i].description}</p>
                        <button onclick="gobageproduct(${i});" class="btnInf btn btn-primary me-md-2" type="button">More info</button>
                    </div>
                </div>
            `
        }
    }
    document.querySelector('.contanir').innerHTML=cartoona;
}



