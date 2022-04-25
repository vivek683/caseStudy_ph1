function ajax() {
    //Creating an XHR object
    var xhttp = new XMLHttpRequest();
    //Eventlistener
    xhttp.onreadystatechange = function () {
        //condition
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "<br>" + "<span> &emsp; </span>" + `<h1>&emsp;<u>My To-Do List</u></h1>` + "<br>";
            var notCompleted = "";
            for (i = 0; i < response.length; i++) {
                if (response[i].completed == true) {
                    output += "<hr>" + "<li>" + "<span> &emsp; </span>" + `<input type="checkbox" checked disabled>&emsp; ${response[i].title}</input>` + "</li>";
                }
                else {
                    output += "<hr>" + "<li>" + "<span> &emsp; </span>" + `<input type="checkbox" id="check">&emsp; ${response[i].title}</input>` + "</li>";
                    notCompleted += "<hr>" + "<li>" + "<span> &emsp; </span>" + `<input type="checkbox">&emsp; ${response[i].title}</input>` + "</li>";
                }
            }
            document.getElementById("list").innerHTML = output;
            for (i = 0; i < response.length; i++)
            {
               checkBox = document.getElementById('check');
           // Check if the element is selected/checked
           if (checkBox.checked) {
               // Respond to the result
               count++;
               if(count>=5)
               {alert("Checkbox checked!");}
           }
        } 
            
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
function redirect() {
    alert("Logout Successful!!");
    setTimeout(e => {

        location.replace("logInForm.html");
    },
        0000);
}
var count=0;
function check(){
count++;
if (count>=5){
alert("Congrats. 5 Tasks have been Successfully Completed ");
count=0;
}
}

