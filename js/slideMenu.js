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
