//SET INTERVAL THAT BEGINS ONCE THE PAGE IS LOADED
document.addEventListener("DOMContentLoaded", function(){
  showHolidayCountdowns();
  showCountdown();
  setInterval(() => {
    updateCounters();
    
  }, 1000)
});

//DEADLINE GENERATOR THAT PERFORMS A COUNTDOWN
function getRemainTime(deadline){
  let now = new Date(),
  remainTime = (new Date(deadline) - now + 1000) / 1000,
  remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
  remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24))
  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
}; 

// ARRAY WHERE THE OBJECTS ARE LOCATED BY DEFAULT
 const holidayCountdownList = [
  new Timer("Dec 25 2023 00:00:01", "Christmas", "ch-newDay", "ch-newHour", "ch-newMinute", "ch-newSecond"),
  new Timer("Oct 31 2023 00:00:01", "Halloween", "ha-newDay", "ha-newHour", "ha-newMinute", "ha-newSecond")  
]; 

// ARRAY WHERE THE CREATED OBJECTS ARE ADDED
const countdownList = [ 
];

// FUNCTION THAT ALLOWS DISPLAYING ON SCREEN THE COUNTS OF THE OBJECTS BY DEFAULT
function showHolidayCountdowns(){
  let text = "";
  for(const holidayCountdown of holidayCountdownList){
   const holidayRemain = getRemainTime(holidayCountdown.deadline);
   text += createCard(holidayRemain, holidayCountdown);
  }
  document.getElementById("containerHoliday").innerHTML = text;
}

// FUNCTION THAT ALLOWS DISPLAYING ON SCREEN THE COUNTS OF THE CREATED OBJECTS
function showCountdown(){ 
  let text = "";
  for(const countdown of countdownList){
    const newDatesRemain = getRemainTime(countdown.deadline);
    text += createCard(newDatesRemain, countdown);
  }
  document.getElementById("containerNewCountdown").innerHTML = text;
}

// FUNCTION THAT CREATES THE OBJECT AND ADDS IT TO "COUNTDOWNLIST" ARRAY
function Create(){
  const form = document.forms["form"];
  const name = form["name"];
  const month = form["optionMonth"];
  const day= form["optionDay"];
  const year = form["optionYear"];
  let text = `<div id="newDay" class="container_info-selected">You must fill in all of the fields</div>`;

  if (!month.value || !day.value || !year.value || name.value=="") {
    document.getElementById("validation").innerHTML = text;
    console.log("holi");
    setTimeout(() => {
      document.getElementById("validation").innerHTML = " ";
    }, 4000);
  }else{
    const newCountdownObject = new Timer(`${month.value} ${day.value} ${year.value} 00:00:01`,`${name.value}`);
    console.log(name);
    console.log(name.value);
    countdownList.push(newCountdownObject);
    form.reset();
    showCountdown();
  }
};
// FUNCTION THAT INSERTS THE HTML TEMPLATE
function createCard(remainTime, timer){
  if(timer.idCountdown == 0 || timer.idCountdown == 1){
    let text = `
    <div class="container_countdowns-new">
      <div class="container_countdowns-header">
        <p class="timer_name"><span>${timer.name}</span> Countdown</p>
      </div><!--container_countdowns-head-->
      <div class="timer_info">
        <div class="timer_info-remain">
          <div id="newDays-${timer.idCountdown}" class="timer_clock">${remainTime.remainDays}</div>
          <p>Days</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newHours-${timer.idCountdown}" class="timer_clock">${remainTime.remainHours}</div>
          <p>Hours</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newMinutes-${timer.idCountdown}" class="timer_clock">${remainTime.remainMinutes}</div>
          <p>Minutes</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newSeconds-${timer.idCountdown}" class="timer_clock">${remainTime.remainSeconds}</div>
          <p>Seconds</p>
        </div>
      </div> <!--timer_info-->
    </div> <!--container_countdowns-new-->
`;
return text;
  } else{
    let text = `
    <div class="container_countdowns-new">
      <div class="container_countdowns-header">
        <p class="timer_name"><span>${timer.name}</span> Countdown</p>
        <span class="timer_delete" onClick="deleteCountdown(${timer.idCountdown})">delete</span>
      </div> <!--container_countdowns-head-->
      <div class="timer_info">
        <div class="timer_info-remain">
          <div id="newDays-${timer.idCountdown}" class="timer_clock">${remainTime.remainDays}</div>
          <p>Days</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newHours-${timer.idCountdown}" class="timer_clock">${remainTime.remainHours}</div>
          <p>Hours</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newMinutes-${timer.idCountdown}" class="timer_clock">${remainTime.remainMinutes}</div>
          <p>Minutes</p>
        </div>
        <div class="timer_space">:</div>
        <div class="timer_info-remain">
          <div id="newSeconds-${timer.idCountdown}" class="timer_clock">${remainTime.remainSeconds}</div>
          <p>Seconds</p>
        </div>
      </div> <!--timer_info-->
    </div> <!--container_countdowns-new-->
`;
return text;
  }
};

// UPDATES THE INFORMATION OF EACH COUNTER
function updateCounters(){
  const mainCountdownList = holidayCountdownList.concat(countdownList);

  for(counterInfo of mainCountdownList){
    const remainTimeResult = getRemainTime(counterInfo.deadline);
    updateInfo(counterInfo.idCountdown, remainTimeResult);
    if(remainTimeResult.remainTime <= 1){
      clearInterval(counterInfo.idCountdown)
    }
  }
};

// SELECT THE HTML ID'S TO BE UPDATED IN THE UPDATECOUNTERS() FUNCTION
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

// FUNCTION THAT RESETS THE SETINTERVAL TO ZERO WHEN THE COUNTER HAS REACHED ITS END
function clearInterval(id){
  const days = document.getElementById(`newDays-${id}`);
  const hours = document.getElementById(`newHours-${id}`);
  const minutes = document.getElementById(`newMinutes-${id}`);
  const seconds = document.getElementById(`newSeconds-${id}`);
  days.innerHTML = "00";
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}

// FUNCTION THAT DELETES THE INDEX FROM THE SELECTED ARRAY
function deleteCountdown(id){
  const i = countdownList.findIndex((countdown) => {
    return countdown.idCountdown == id;
  });
  countdownList.splice(i, 1);
  showCountdown();
};
