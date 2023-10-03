
let newMonth = document.getElementById("newMonth");
let newDay = document.getElementById("newDay2");
let newYear = document.getElementById("newYear");

let month = document.getElementById("optionMonth");
let day = document.getElementById("optionDay");
let year = document.getElementById("optionYear");

let dayClock = document.getElementById("newHour");

let createButton = document.getElementById("createButton");
const containerCountdown = document.querySelector(".contenedor-hollidays");
let countdownList = [];



createButton.addEventListener("click", addToCountdownList);

function addToCountdownList(){
  console.log("holi");
  fillContainer();
  
}

function fillContainer(countdownList){
  const newContent = `<div class="contenedor-timer3">
  <div class="timer-info">
    <div class="timer-days">
      <div id="newDay" class="timer-clock">00</div>
      <p>Days</p>
    </div>

    <div class="timer-space">:</div>

    <div class="timer-days">
      <div id="newHour" class="timer-clock">00</div>
      <p>Hours</p>
    </div>

    <div class="timer-space">:</div>

    <div class="timer-days">
      <div id="newMinute" class="timer-clock">00</div>
      <p>Minutes</p>
    </div>

    <div class="timer-space">:</div>

    <div class="timer-days">
      <div id="newSecond" class="timer-clock">00</div>
      <p>Seconds</p>
    </div>
  </div>
</div>`;
  const element = document.createElement("div");
  element.innerHTML = newContent;
  containerCountdown.appendChild(element.firstChild)

}

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

/*
function Clear(){
  dayClock.innerHTML = "00";

}
*/
