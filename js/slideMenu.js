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
