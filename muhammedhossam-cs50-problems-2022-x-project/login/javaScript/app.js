// validation
let userEmail = document.querySelector("[name='email']");
let userpassword = document.querySelector("[name='password']");
let btn = document.querySelector("#btn");

console.log(userEmail);
console.log(btn.outerHTML);
console.log(userpassword);
// not submit
// localStorage.clear();
document.forms[0].onclick = function (event) {
  let nameValid = false;
  let passwordValid = false;
  console.log(userEmail.value);
  console.log(userpassword.value);
  if (userEmail.value !== "" && userEmail.value.length <= 10) {
    nameValid = true;
    userEmail.className = "true";
  } else {
    userEmail.className = "false";
  }
  if (userpassword.value.length >= 8) {
    passwordValid = true;
    userpassword.className = "true";
  } else {
    passwordValid = false;
    userpassword.className = "false";
  }
  if (userEmail.value === "admin" && userpassword.value === "admin") {
    passwordValid = true;
    window.open("file:///D:/Work/foodTalk/adminHome/index.html");
  } else {
    if (nameValid === false || passwordValid === false) {
      event.preventDefault();
    } else {
      window.location.href = "file://D:/work/foodTalk/Home/home.html";
    }
  }
};

// show password
let showPassword = document.getElementById("my-btn");
showPassword.onclick = function (event) {
  event.preventDefault();

  if (this.innerHTML === `<i class="fa-solid fa-eye"></i>`) {
    userpassword.setAttribute("type", "text");
    this.innerHTML = `<i class="fa-solid fa-eye-low-vision"></i>`;
  } else {
    userpassword.setAttribute("type", "password");
    this.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
};

// admin page
