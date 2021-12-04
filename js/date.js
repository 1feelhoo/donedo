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

const showCal = (yyyy, mm) => {
    let startDay = new Date(String(yyyy)+"-"+String(mm)+"-01").getDay();
    let lastDay = -1;
    calenderMonth.innerText = String(yyyy) + "년" + String(mm) + "월";

    // 월마다 달력 초기화
    for(let i = 0; i < dayList.length; i++){
        dayList[i].innerText = "";
        dayList[i].style.backgroundColor="transparent ";
    }

    switch(parseInt(mm)) {
        case 1: case 3:case 5: case 7: case 8: case 10: case 12: lastDay = 31; break;
        case 4: case 6: case 9: case 11: lastDay = 30; break;
        case 2: lastDay = 28; break;
        default:
            break;
    }

    // 날짜 삽입
    for (let i=startDay; i<lastDay+startDay; i++){
        let d = (i-startDay+1);
        dayList[i].innerHTML = "<span>" + d + "</span>";
    }

    // 오늘 날짜 표시
    if(yyyy === today.getFullYear() && mm === today.getMonth()+1){
        dayList[parseInt(today.getDate())+startDay-1].style.backgroundColor="#f7dfc6";
    }
}

showCal(yyyy, mm);

prevMonth.addEventListener("click", () => {
  if(parseInt(mm) === 1) {
    yyyy = yyyy - 1
    mm = 12;
  } else {
    mm = mm - 1;
  }

  showCal(yyyy, mm);
});

nextMonth.addEventListener("click", () => {
  if(parseInt(mm) === 12) {
    yyyy = yyyy + 1
    mm = 1;
  } else {
    mm = mm + 1;
  }
  showCal(yyyy, mm);
});



