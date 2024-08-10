const generateduck = document.getElementById('generateduck');
const generatebtn = document.getElementById('generatebtn');
const duckname = document.getElementById('duckname');
let randuckname = "";

if (generatebtn) {
  generatebtn.addEventListener("click", generateimg);
}                             

function generateimg() {
  var randnum = Math.random() * 100;
  
  if (generateduck.getAttribute("src") == "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg") {
    document.getElementById('displaymsg').innerHTML = "";
    if (0 <= randnum && randnum < 20) {
      generateduck.src = "https://i5.walmartimages.com/asr/e18733c1-c7f3-49d4-ad5b-c64ddb2be3dc.b9a92a8abf83c86241c428eaf8277075.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF";
      duckname.innerHTML = "Meet Johnny!";
      randuckname = "Johnny";
    }
    else if (20 <= randnum && randnum < 40) {
      generateduck.src = "https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A16PA4301PT17X41Y39D1038641529W24999H24331/views/1,width=550,height=550,appearanceId=16,backgroundColor=B9B87F,noPt=true/banana-duck-mens-t-shirt.jpg";
      duckname.innerHTML = "Meet Amy!";
      randuckname = "Amy";
    }
    else if (40 <= randnum && randnum < 60) {
      generateduck.src = "https://www.kawaiies.com/cdn/shop/products/kawaiies-plushies-plush-softtoy-fluffy-banana-duck-plushie-soft-toy-brown-45in-115cm-423601.jpg?v=1661879757";
      duckname.innerHTML = "Meet Laura!";
      randuckname = "Laura";
    }
    else if (60 <= randnum && randnum < 80) {
      generateduck.src = "https://m.media-amazon.com/images/I/41NO8JoxcLS._AC_UF894,1000_QL80_.jpg";
      duckname.innerHTML = "Meet Oliver!";
      randuckname = "Oliver";
    }
    else {
      generateduck.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhCJVp88WCoKNiNsMZ9wUiWOobhO1uC8Ucg&s";
      duckname.innerHTML = "Meet Taylor!";
      randuckname = "Taylor";
    }
  }
}

const sendbtn = document.getElementById('sendbtn');
if (sendbtn) {
  sendbtn.addEventListener("click", waiting);
}            

let msg = "";
let msgarray = [];
let msgbox = "";
let x = 0;
let typbox = "";

function sendmsg() {
  if (generateduck.getAttribute("src") != "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg") {
    let msg = document.getElementById('send').value;
    msgarray[x] = msg;
    msgbox += `<h3> You: </h3>
      <p> ${msgarray[x]} </p>
      <hr>`;
    document.getElementById('displaymsg').innerHTML = msgbox;
    setTimeout(typing, 2000);
    document.getElementById('send').value = "";
  } else {
    document.getElementById('displaymsg').innerHTML = `<h2 id:'generaterror' style="color:red;"> You must find a banana duck first. </h2>`;
    document.getElementById('send').value = "";
  }
}

let randquack = "";
let randquackans = "";

function quack() {
  while (randquack == randquackans) {
    randquack = "";
    const randquacknum = Math.random();
    if (randquacknum >= 0 && randquacknum < 0.25) {
      randquack = "Quack."
    } else if (randquacknum >= 0.25 && randquacknum < 0.5) {
      randquack = "quack!"
    } else if (randquacknum >= 0.5 && randquacknum < 0.75) {
      randquack = "Quack quack."
    } else {
      randquack = "Quack?!"
  }}
  randquackans = randquack;
}

function waiting() {
  sendmsg();
  setTimeout(sendquack, 5000);
}

function sendquack() {
  if (generateduck.getAttribute("src") != "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg") {
    quack();
    typbox = "";
    document.getElementById('typingbox').innerHTML = ``;
    msgbox += `<h3> ${randuckname}: </h3>
        <p> ${randquackans} </p>
      <hr>`;
    document.getElementById('displaymsg').innerHTML = msgbox;
    ++x;
  }
}

function typing() {
  typbox = `${randuckname} is typing...`;
  document.getElementById('typingbox').innerHTML = typbox;
}