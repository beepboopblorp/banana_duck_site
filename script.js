const submitbtn = document.getElementById('submitbtn');
if (submitbtn) {
  submitbtn.addEventListener("click", submit);
}

let inputname = document.getElementById('yourname');
let inputemail = document.getElementById('youremail');
let inputq = document.getElementById('yourquestion');

function submit() {
  if (inputname.value && inputemail.value && inputq.value) {
    console.log(inputname.value);
    console.log(inputemail.value);
    console.log(inputq.value);
  }
}

const loginbtn = document.getElementById('loginbtn');
if (loginbtn) {
  loginbtn.addEventListener("click", login);
}

username = document.getElementById('adminuser');
password = document.getElementById('adminpass');

function login() {
  if (username.value && password.value) {
    console.log(username.value);
    console.log(password.value);
  }
}