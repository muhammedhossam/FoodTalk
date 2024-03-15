window.onload = () => {
  // to-top bottom
  let buttomTop = document.getElementsByClassName("top-bottom");
  console.log(buttomTop[0]);
  buttomTop[0].addEventListener("click", function () {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.onscroll = () => {
    window.scrollY > 680
      ? (buttomTop[0].style = `display = Block;`)
      : (buttomTop[0].style = `display: none;`);
  };
};

// function to creat the imgaes
let result = document.querySelector(".result");

function creatImages(name) {
  let img = document.createElement("img");

  // add attripute and items
  img.classList = "box";
  img.setAttribute("src", name);
  result.appendChild(img);
}
let mainBox = document.getElementById("add-img");
// add photos that are add
let images = new Array();
if (localStorage.getItem("pic")) {
  mainBox.style = "display: block";
  let nameValue = localStorage.getItem("pic");
  let bom = JSON.parse(nameValue);
  let num = JSON.parse(nameValue).length - 1;
  for (i = 0; i <= num; i++) {
    creatImages(bom[i].name, bom[i].id);
    images.push(bom[i]);
  }
}
if (result.innerHTML == "") {
  mainBox.style = "display: none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// i love you fofa'
