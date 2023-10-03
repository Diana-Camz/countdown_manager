let newMonth = document.getElementById("newMonth");
let newDay = document.getElementById("newDay2");
let newYear = document.getElementById("newYear");


let dayClock = document.getElementById("newHour");

// ARRAY DONDE SE AGREGAN LOS OBJETOS CREADOS
const countdownList = [
];

// FUNCION QUE PERMITE MOSTRAR EN PANTALLA LOS CONTADORES DE LOS OBJETOS CREADOS
function showCountdown(){
  let text = ""
  for(countdown of countdownList){
    text += `<div class="contenedor-timer3">
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
            </div>`
  }
  document.getElementById("newCountdown-container").innerHTML = text;
}

function Create(){
  /*const forma = document.forms["form"];
  const month = forma["optionMonth"];
  const day= forma["optionDay"];
  const year = forma["optionYear"];*/

  //const countdown1 = countdown(month.value, day.value, year.value).toString();
 //const deadline = `${countdown1} "00:00:01", "newDay", "newHour", "newMinute", "newSecond"`;

  showCountdown();
  //console.log(deadline);
}




