let name = document.getElementById("name");
let email = document.getElementById("email");
let Subject = document.getElementById("Subject");
let message = document.getElementById("message");

let btnA = document.getElementById("btnA");

let feedbacks;
if (localStorage.getItem("feedbacks") === null) {
    feedbacks = [];
} else {
    feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    displayFeedback();
}

// دالة للتحقق من أن الحقول غير فارغة
function checkEmpty() {
    return name.value === "" || email.value === "" || Subject.value === "" || message.value === "";
}

function addFeedback() {
    if (checkEmpty()) {
        alert("Please fill in all fields!");
        return; // إيقاف العملية إذا كانت الحقول فارغة
    }

    let feedback = {
        name: name.value,
        email: email.value,
        subject: Subject.value,
        message: message.value
    };

    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    clearForm();
    displayFeedback();
}

// وظيفة لمسح الحقول بعد الإرسال
function clearForm() {
    name.value = "";
    email.value = "";
    Subject.value = '';
    message.value = '';
}

function displayFeedback() {
    let displayCon = '';
    for (let i = 0; i < feedbacks.length; i++) {
        displayCon += `<tr>
            <td>${i + 1}</td>
            <td>${feedbacks[i].name}</td>
            <td>${feedbacks[i].email}</td>
            <td>${feedbacks[i].subject}</td>
            <td>${feedbacks[i].message}</td>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = displayCon;
}

