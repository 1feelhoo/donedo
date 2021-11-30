let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

// header
year.innerText = yyyy;
monthDay.innerText = String(mm) + "/" + String(dd);

// calendar
const dayList = document.getElementsByClassName("day");
const calenderMonth = document.getElementById("calender-month");
const prevMonth = document.getElementsByClassName("prev-month")[0];
const nextMonth = document.getElementsByClassName("next-month")[0];

const showCal = (mm) => {
  let startDay = new Date(String(yyyy)+"-"+String(mm)+"-01").getDay();
  calenderMonth.innerText = String(mm) + "월";

  switch(parseInt(mm)) {
    case 1: case 3:
    case 5: case 7:
    case 8: case 10:
    case 12:
      for (let i=7+startDay; i<38+startDay; i++){
        dayList[i].innerText = i-6-startDay;
        if(i-6-startDay === parseInt(dd)){
          dayList[i].style.backgroundColor="#f7dfc6";
        }
      }
      break;
    case 2: case 4:
    case 6: case 9:
    case 11:
      for (let i=7+startDay; i<37+startDay; i++){
        dayList[i].innerText = i-6-startDay;
        if(i-6-startDay === parseInt(dd)){
          dayList[i].style.backgroundColor="#f7dfc6";
        }
      }
      break;
    default:
      dayList[i].innerText = "error";
  }
}

showCal(mm);

prevMonth.addEventListener("click", () => {
  console.log("click!")
  if(parseInt(mm) === 1) {
    yyyy = yyyy - 1
    mm = 12;
  } else {
    mm = mm - 1;
  }
  showCal(mm);
});

nextMonth.addEventListener("click", () => {
  if(parseInt(mm) === 12) {
    yyyy = yyyy + 1
    mm = 1;
  } else {
    mm = mm + 1;
  }
  showCal(mm);
});



