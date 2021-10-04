let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

const year = document.getElementById("year");
const monthDay = document.getElementById("month-day");

year.innerText = yyyy;
monthDay.innerText = String(mm) + "/" + String(dd);
