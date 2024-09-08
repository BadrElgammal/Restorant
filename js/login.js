let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');


let lsData = JSON.parse(localStorage.getItem('users'));
let users = [...lsData];
let data = [];

// التحقق من تسجيل الدخول عند تحميل الصفحة
window.onload = function() {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        // إذا كان هناك مستخدم مسجل الدخول في sessionStorage، انتقل إلى الصفحة الرئيسية
        window.location.href = "../index.html";
    }
};

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let formData = new FormData(e.target);
    let dataObject = Object.fromEntries(formData);
    data.push(dataObject);
    
    chickData(dataObject);
});

function chickData(dataObject) {
    let foundUser = false;
    
    users.forEach(function(user) {
        if (user.email === dataObject.email && user.password === dataObject.password) {
            foundUser = true;
            // تخزين بيانات المستخدم عند تسجيل الدخول في sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            window.alert('تم تسجيل الدخول بنجاح!');
            // الانتقال إلى الصفحة الرئيسية
            window.location.href = "../index.html"; 
        }
    });
    
    if (!foundUser) {
        window.alert('خطأ في البريد الإلكتروني أو كلمة المرور. حاول مرة أخرى.');
    }
}
