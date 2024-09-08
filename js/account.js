loggedInUser = sessionStorage.getItem('loggedInUser');
let profile_name = document.querySelector(".profile-name");
let profile_username = document.querySelector(".profile-username");
let profile_email = document.querySelector(".profile-email");
let profile_phone = document.querySelector(".profile-phone");

if (loggedInUser) {
    loggedInUser = JSON.parse(loggedInUser); 
    profile_name.innerHTML = `${loggedInUser.fullName}`;
    profile_username.innerHTML = `${loggedInUser.userName}`;
    profile_email.innerHTML = `${loggedInUser.email}`;
    profile_phone.innerHTML = `${loggedInUser.phoneNumber}`;
}

let logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = "../index.html"; 
});
