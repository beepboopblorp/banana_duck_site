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

let username = document.getElementById('adminuser');
let password = document.getElementById('adminpass');

function login() {
  if (username.value === 'adminUsername' && password.value === 'babanaduckie') {
    document.getElementById('loginsuccess').innerHTML = `
      <p> Login Successful! Press CONTINUE to proceed. </p>
      <a href="questions.html" id="qpagelink"> Continue </a>`;
  } else {
    document.getElementById('loginsuccess').innerHTML = `
    <p> Incorrect username or password. Please try again. </p>`;
  }
}