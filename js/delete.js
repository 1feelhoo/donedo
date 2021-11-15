var cardList = document.querySelectorAll("#delete.delete-btn");

console.log(cardList);

for (let i = 0; i < cardList.length; i++) {
  cardList[i].addEventListener("click", () => {
    const card =
      cardList[i].parentElement.parentElement.parentElement.parentElement;
    card.remove();
  });
}
