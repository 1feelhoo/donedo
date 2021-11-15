// menu close btn 
const colseMenuBtn = classList[1];

const showMenuBtn = document.getElementsByClassName("head-menu-btn")[0];
const menu = document.getElementById("slide-menu");
let isClick = false;

showMenuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    showMenuBtn.style.display = "none";
    console.log(colseMenuBtn);
    colseMenuBtn.style.display = "block";
});

colseMenuBtn.addEventListener("click", () => {
  console.log("colse click");
  menu.style.display = "none";
  showMenuBtn.style.display = "block";
  colseMenuBtn.style.display = "none";
});


// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.body.style.backgroundColor = "white";
// }