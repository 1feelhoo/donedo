// colse modal func
addBtn.addEventListener("click", showModal);
colseBtn.addEventListener("click", colseModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
