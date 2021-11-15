let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

// header
year.innerText = yyyy;
monthDay.innerText = String(mm) + "/" + String(dd);

// calendar

const dayList = document.getElementsByClassName("day");
//const calenderMonth = doucment.getElementById("calender-month");
let startDay = new Date(String(yyyy)+"-"+String(mm)+"-01").getDay();

//calenderMonth.innerText = String(mm) + "월";

const arr1 = [1, 3, 5, 7, 8, 10, 12];
const arr2 = [2, 4, 6, 9, 11];

for (let i=7+startDay; i<38+startDay; i++){
  dayList[i].innerText = i-6-startDay;
}