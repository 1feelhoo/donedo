const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("input-modal");
const submitBtn = document.getElementById("submit-btn");

const classList = document.getElementsByClassName("close");
const colseBtn = classList[0];

const showModal = () => {
  modal.style.display = "block";
};

const colseModal = () => {
  modal.style.display = "none";
};

// colse modal func
addBtn.addEventListener("click", showModal);
colseBtn.addEventListener("click", colseModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// done do list add func
submitBtn.addEventListener("click", () => {
  colseModal();
  const classList = document.getElementsByClassName("donedo-card-add");
  const cardAddBtn = classList[0];
  const cardParent = cardAddBtn.parentNode;
  const newCardLi = document.createElement("li");
  const getDoneDoContent = document.getElementById("donedo-content");
  const categaryIconList = [
    '<i class="fas fa-dumbbell"></i>',
    '<i class="fas fa-book"></i>',
    '<i class="fas fa-cookie-bite"></i>',
    '<i class="fab fa-playstation"></i>'
  ];

  let listLength = document.getElementsByClassName("donedo-card").length;

  newCardLi.className = "donedo-card";
  newCardLi.innerHTML =
    `<div class="donedo-item-container">
    <div class="donedo-content">` +
    (listLength + 1) +
    `. ` +
    getDoneDoContent.value +
    `</div>
    <div class="donedo-categary">
      <div class="donedo-category-icon">
        운동
        <i class="fas fa-dumbbell"></i>
      </div>
      <button class="delete-btn">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>`;

  getDoneDoContent.value = null;
  cardParent.insertBefore(newCardLi, cardAddBtn);
});
