let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

year.innerText = yyyy;
monthDay.innerText = String(mm) + "/" + String(dd);
