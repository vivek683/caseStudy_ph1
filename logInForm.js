
function redirect() {
    alert("Login Successful!!");
    setTimeout(e => {
        window.location.href = "foundation.html";
    },
        0000);
}

document.getElementById("form").addEventListener("submit", e => {
    if (document.getElementById("userName").value != "admin") {
        alert("Please enter username as admin");
        e.preventDefault();
    }
    else if (document.getElementById("Password").value != 12345) {
        alert("Please enter password as 12345");
        e.preventDefault();
    }
    else {
        redirect();
    }
})


