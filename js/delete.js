<<<<<<< HEAD
var cardList = document.querySelectorAll("#delete.delete-btn");

console.log(cardList);

for (let i = 0; i < cardList.length; i++) {
  cardList[i].addEventListener("click", () => {
    const card =
      cardList[i].parentElement.parentElement.parentElement.parentElement;
    card.remove();
  });
}
=======
var cardList;

setInterval(() => {
  cardList = document.querySelectorAll("#delete.delete-btn");
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", () => {
      const card =
        cardList[i].parentElement.parentElement.parentElement.parentElement;
      card.remove();
    });
  }
}, 1000);




>>>>>>> 5759ca0 (삭제 방식 수정, 모달 반응형으로 적용, 메뉴창 완성)
