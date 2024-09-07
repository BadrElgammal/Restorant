let like = document.querySelector(".like");
let locations = document.querySelector(".locations");
let ideas = document.querySelector(".ideas");
let comments = document.querySelector(".comments");

function counte(variable, number) {
    let counter = 0;
    let interval = setInterval(function() {
        counter++;
        variable.innerHTML = counter;
        if (counter === number) {
            clearInterval(interval);
        }
    }, 5); 
}

counte(like, 1430);
counte(locations, 64);
counte(ideas, 960);
counte(comments, 420);
document.addEventListener('DOMContentLoaded', function() {
});
