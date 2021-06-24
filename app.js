const navLinks = document.querySelectorAll(".nav-links");
console.log(navLinks);
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navList = document.querySelector(".navList");
navLinksArray = Array.from(navLinks);
let Count = 0;
navLinks.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    console.log();
    const arrowDown = ele.target.nextElementSibling;
    const dropDown = ele.target.nextElementSibling.nextElementSibling;
    if (Count == 0) {
      arrowDown.style.transform = "rotate(180deg)";
      arrowDown.style["transition-duration"] = "0.4s";
      dropDown.style.display = "block";
      dropDown.style.transform = "scaleY(100%)";
      dropDown.style["transition-duration"] = "0.4s";
      Count = 1;
    } else {
      arrowDown.style.transform = "rotate(0deg)";
      arrowDown.style["transition-duration"] = "0.4s";
      dropDown.style.transform = "scaleY(0)";
      dropDown.style["transition-duration"] = "0.4s";
      dropDown.style.display = "none";
      Count = 0;
    }
  });
});
let hamburgerCount = 0;
hamburgerMenu.addEventListener("click", function (e) {
  const menu = e.target.parentNode;
  e.target.remove();
  console.log(e.target);

  if (hamburgerCount == 0) {
    const image = document.createElement("img");
    image.src = "./images/icon-close.svg";
    menu.appendChild(image);
    navList.style.transform = `scaleY(100%)`;
    navList.style["transition-duration"] = "0.4s";
    hamburgerCount = 1;
    e.stopPropagation();
  } else {
    const image = document.createElement("img");
    image.src = "./images/icon-hamburger.svg";
    menu.appendChild(image);
    hamburgerCount = 0;
    navList.style.transform = `scaleY(0)`;
    navList.style["transition-duration"] = "0.4s";
    e.stopPropagation();
  }
});
