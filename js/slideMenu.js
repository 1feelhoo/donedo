// menu close btn 
const colseMenuBtn = classList[1];

const showMenuBtn = document.getElementsByClassName("head-menu-btn")[0];
const menu = document.getElementById("slide-menu");

showMenuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    showMenuBtn.style.display = "none";
    colseMenuBtn.style.display = "block";
});

colseMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  showMenuBtn.style.display = "block";
  colseMenuBtn.style.display = "none";
});
