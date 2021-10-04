const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("input-modal");
const classList = document.getElementsByClassName("close");
const colseBtn = classList[0];

const showModal = () => {
  modal.style.display = "block";
};

const colseModal = () => {
  modal.style.display = "none";
};

addBtn.addEventListener("click", showModal);
colseBtn.addEventListener("click", colseModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
