// function to creat the imgaes
let result = document.querySelector(".result");

function creatImages(name, id) {
  let img = document.createElement("img");
  let button = document.createElement("button");
  let div = document.createElement("div");

  // add attripute and items
  button.textContent = "delete";
  button.setAttribute("id", "delete");
  div.setAttribute("id", id);
  img.classList = "box";
  img.setAttribute("src", name);
  div.appendChild(img);
  div.appendChild(button);
  result.appendChild(div);
}
// localStorage.clear();

// cheak if there is another

let images = new Array();
if (localStorage.getItem("pic")) {
  let nameValue = localStorage.getItem("pic");
  let bom = JSON.parse(nameValue);
  let num = JSON.parse(nameValue).length - 1;
  for (i = 0; i <= num; i++) {
    creatImages(bom[i].name, bom[i].id);
    images.push(bom[i]);
  }
}

// control in the form

let urlInput = document.querySelector("[name = 'url']");
let btnSupmit = document.querySelector("#label");

btnSupmit.addEventListener("click", (event) => {
  let urlValue = urlInput.value;
  if (urlValue == "") {
    event.preventDefault();
  } else {
    event.preventDefault();
    let info = {
      id: Date.now(),
      name: urlValue,
    };
    // push to local storage
    images.push(info);
    localStorage.setItem("pic", JSON.stringify(images));
    // get for the local
    let bom = localStorage.getItem("pic");
    let iformationValue = JSON.parse(bom);
    // creat images
    creatImages(
      iformationValue[JSON.parse(bom).length - 1].name,
      iformationValue[JSON.parse(bom).length - 1].id
    );
    urlInput.value = "";
  }
});
// button to delete
function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("pic", JSON.stringify(arrayOfTasks));
}
let deleteButton = document.querySelectorAll("#delete");
let imgDelete = document.querySelectorAll(".result img");

deleteButton.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    ele.parentElement.remove();
    let del = e.target.parentElement.getAttribute("id");

    images = images.filter((task) => task.id != del);
    console.log(images);

    addDataToLocalStorageFrom(images);
  });
});

// to-top bottom
let buttomTop = document.getElementsByClassName("top-bottom");
buttomTop[0].addEventListener("click", function () {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
document.onscroll = () => {
  window.scrollY > 680
    ? (buttomTop[0].style = `display = Block;`)
    : (buttomTop[0].style = `display: none;`);
};
