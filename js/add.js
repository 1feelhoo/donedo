const submitBtn = document.getElementById("submit-btn");

// done do list add func
submitBtn.addEventListener("click", () => {
  const classList = document.getElementsByClassName("donedo-card-add");
  const cardAddBtn = classList[0];
  const cardParent = cardAddBtn.parentNode;
  const newCardLi = document.createElement("li");
  const getDoneDoTitle = document.getElementById("donedo-title");
  const getDoneDoContent = document.getElementById("donedo-content");
  const categaryList = document.getElementsByName("category");
  const categaryIconList = [
    '<i class="fas fa-dumbbell"></i>',
    '<i class="fas fa-book"></i>',
    '<i class="fas fa-cookie-bite"></i>',
    '<i class="fab fa-playstation"></i>'
  ];

  // 한 일 작성 안했을 떄 작성하라고 알려주기
  if (getDoneDoTitle.value === "") {
    alert("한 일을 작성해주세요!");
    return;
  } else if (getDoneDoContent.value === "") {
    alert("리뷰를 작성해주세요!");
    return;
  }

  // check된 값 찾기
  let categaryValue = "";
  for (let i = 0; i < categaryList.length; i++) {
    if (categaryList[i].checked === true) {
      categaryValue = categaryList[i].value + " " + categaryIconList[i];
      categaryList[i].checked = false;
    }
  }

  let listLength = document.getElementsByClassName("donedo-card").length;
  newCardLi.className = "donedo-card";
  newCardLi.innerHTML =
    `<div class="donedo-item-container">
    <div class="donedo-content">` +
    (listLength + 1) +
    `. ` +
    getDoneDoTitle.value +
    `</div>
    <div class="donedo-categary">
      <div class="donedo-category-icon">` +
    categaryValue +
    `
      </div>
      <div>
      <button class="delete-btn" id="delete">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    </div>
    
  </div>`;

  getDoneDoTitle.value = null;
  getDoneDoContent.value = null;
  colseModal();
  cardParent.insertBefore(newCardLi, cardAddBtn);

  const delScript = document.createElement("script");
  delScript.setAttribute("src", "./js/delete.js");
  document.body.appendChild(delScript);
});
