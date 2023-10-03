let newMonth = document.getElementById("newMonth");
let newDay = document.getElementById("newDay2");
let newYear = document.getElementById("newYear");

//SET INTERVAL PARA CUANDO CARGE LA PAGINA
document.addEventListener("DOMContentLoaded", function(){
  showHolidayCountdowns();
  showCountdown();
  setInterval(() => {
    updateCounters();
    
  }, 1000)
});

//GENERADOR DEADLINE QUE REALIZA CUENTA REGRESIVA 
function getRemainTime(deadline){
  let now = new Date(),
  remainTime = (new Date(deadline) - now + 1000) / 1000,
  remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
  remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24))
//console.log(remainTime);
  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
}; 

// ARRAY DONDE SE ENCUENTRAN LOS OBJETOS POR DEFAULT
 const holidayCountdownList = [
  new Timer("Dec 25 2023 00:00:01", "Christmas", "ch-newDay", "ch-newHour", "ch-newMinute", "ch-newSecond"),
  new Timer("Oct 31 2023 00:00:01", "Halloween", "ha-newDay", "ha-newHour", "ha-newMinute", "ha-newSecond")  
]; 

// ARRAY DONDE SE AGREGAN LOS OBJETOS CREADOS
const countdownList = [ 
  new Timer("Oct 2 2023 00:00:01","Prueba", "newDay", "newHour", "newMinute", "newSecond")
];

// FUNCION QUE PERMITE MOSTRAR EN PANTALLA LOS CONTADORES DE LOS OBJETOS CREADOS
function showHolidayCountdowns(){
  let text = "";
  
  for(const holidayCountdown of holidayCountdownList){
   const holidayRemain = getRemainTime(holidayCountdown.deadline);
   text += createCard(holidayRemain, holidayCountdown);
   
  }
  document.getElementById("holidayContainer").innerHTML = text;
}

// FUNCION QUE PERMITE MOSTRAR EN PANTALLA LOS CONTADORES DE LOS OBJETOS CREADOS
function showCountdown(){ 
  let text = "";
  for(const countdown of countdownList){
    const newDatesRemain = getRemainTime(countdown.deadline);
    text += createCard(newDatesRemain, countdown);
  }
  document.getElementById("newCountdown-container").innerHTML = text;
}

function Create(){
  const forma = document.forms["form"];
  const name = forma["name"];
  const month = forma["optionMonth"];
  const day1= forma["optionDay"];
  const year = forma["optionYear"];
  

 const newCountdownObject = new Timer(`${month.value} ${day1.value} ${year.value} 00:00:01`,`${name.value}`, "ch-newDay", "newHour", "newMinute", "newSecond");

  countdownList.push(newCountdownObject);
  month.selectedIndex = 0; 
  day1.selectedIndex = 0;
  year.selectedIndex = 0;
  
  showCountdown();
  
};

function createCard(remainTime, timer){
  const text = `
    <div class="contenedor-timer3">
      <p class="timer-title"><span>${timer.name}</span> Countdown</p>
        <div class="timer-info">
          <div class="timer-days">
            <div id="newDays-${timer.idCountdown}" class="timer-clock">${remainTime.remainDays}</div>
            <p>Days</p>
          </div>
          <div class="timer-space">:</div>
          <div class="timer-days">
            <div id="newHours-${timer.idCountdown}" class="timer-clock">${remainTime.remainHours}</div>
            <p>Hours</p>
          </div>
          <div class="timer-space">:</div>
          <div class="timer-days">
            <div id="newMinutes-${timer.idCountdown}" class="timer-clock">${remainTime.remainMinutes}</div>
            <p>Minutes</p>
          </div>
          <div class="timer-space">:</div>
          <div class="timer-days">
            <div id="newSeconds-${timer.idCountdown}" class="timer-clock">${remainTime.remainSeconds}</div>
            <p>Seconds</p>
          </div>
        </div>
    </div>
`
return text;
};

//ACTUALIZA LA INFO DE CADA CONTADOR
function updateCounters(){
  const mainCountdownList = holidayCountdownList.concat(countdownList);

  for(counterInfo of mainCountdownList){
    const remainTime = getRemainTime(counterInfo.deadline);
    updateInfo(counterInfo.idCountdown, remainTime);
  }
}

//SELECCIONA LOS HTML-ID'S PARA QUE SE ACTUALICEN EN LA FUNCION UPDATECOUNTERS()
function updateInfo(id, remainTime){
  const days = document.getElementById(`newDays-${id}`);
  const hours = document.getElementById(`newHours-${id}`);
  const minutes = document.getElementById(`newMinutes-${id}`);
  const seconds = document.getElementById(`newSeconds-${id}`);
  days.innerHTML = remainTime.remainDays;
  hours.innerHTML = remainTime.remainHours;
  minutes.innerHTML = remainTime.remainMinutes;
  seconds.innerHTML = remainTime.remainSeconds;
}