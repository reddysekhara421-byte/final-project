function loginUser() {

    let id = document.getElementById("studentId").value;
    let password = document.getElementById("password").value;

    if (id === "2500030422" && password === "1234") {

        document.getElementById("login").style.display = "none";
        document.getElementById("website").style.display = "block";

    } else {

        document.getElementById("loginResult").innerHTML =
            "Invalid Student ID or Password";

    }
}

function logout() {
    document.getElementById("website").style.display = "none";
    document.getElementById("login").style.display = "flex";

    document.getElementById("studentId").value = "";
    document.getElementById("password").value = "";
}

function show(page) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(p) {
        p.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}

function answer(option) {

    let result = document.getElementById("result");

    if (option === "JavaScript") {
        result.innerHTML = "Correct Answer!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Wrong Answer!";
        result.style.color = "red";
    }
}