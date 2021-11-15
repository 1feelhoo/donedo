<<<<<<< HEAD
const menuBtn = document.getElementsByClassName("head-menu-btn")[0];
const menu = document.getElementById("slide-menu");

menuBtn.addEventListener("click", () => {
  console.log("ck");
  menu.style.display = "flex";
});

// menu.addEventListener("mouseout", () => {
//   console.log("out");
//   menu.style.display = "none";
// });
=======
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


// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.body.style.backgroundColor = "white";
// }
>>>>>>> 5759ca0 (삭제 방식 수정, 모달 반응형으로 적용, 메뉴창 완성)
