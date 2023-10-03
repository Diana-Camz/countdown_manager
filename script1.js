
let newMonth = document.getElementById("newMonth");
let newDay = document.getElementById("newDay2");
let newYear = document.getElementById("newYear");

let month = document.getElementById("optionMonth");
let day = document.getElementById("optionDay");
let year = document.getElementById("optionYear");

let dayClock = document.getElementById("newHour");

class getDate {
  constructor(valor){
    this.valor = valor;
  }
  
  getMonth(){
    let option = this.valor;
    let optionSelected = option.options[option.selectedIndex];
    newMonth.innerHTML = optionSelected.text;
    console.log(optionSelected.text);
  }

  getDay(){
    let option = this.valor;
    let optionSelected = option.options[option.selectedIndex];
    newDay.innerHTML = optionSelected.text;
    console.log(optionSelected.text);
  }

  getYear() {
    let option = this.valor;
    let optionSelected = option.options[option.selectedIndex];
    newYear.innerHTML = optionSelected.text;
    console.log(optionSelected.text);
   
  
  }
}


const display1 = new getDate(month);
const display2 = new getDate(day);
const display3 = new getDate(year);




function Create(deadline) {
  //let dateString = document.getElementById("newDateString");
  let fecha = `${month.value} ${day.value} ${year.value} 00:00:001`;
  deadline = fecha;
  //dateString.innerHTML = fecha;
  const button1 = document.getElementById("clearButton");

  //console.log(deadline);
  const countdownVariable = countdown(`${deadline}`, "newDay", "newHour", "newMinute", "newSecond");

  button1.disabled = true;
  

  return countdownVariable;
  
}

const createInfo = Create;
console.log(createInfo);

