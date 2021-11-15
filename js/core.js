// date
const year = document.getElementById("year");
const monthDay = document.getElementById("month-day");

// btn
const addBtn = document.getElementById("add-btn");
const modal = document.getElementById("input-modal");
const submitBtn = document.getElementById("submit-btn");

// find close buttons
const classList = document.getElementsByClassName("close");
// modal close btn
const colseBtn = classList[0];

// menu close btn 
const colseMenuBtn = classList[1];

// menu btn
const showMenuBtn = document.getElementsByClassName("head-menu-btn")[0];
const menu = document.getElementById("slide-menu");



// modal
const showModal = () => {
  modal.style.display = "block";
};

const colseModal = () => {
  modal.style.display = "none";
};