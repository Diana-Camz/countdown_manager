const getRemainTime = deadline => {
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


const countdown = (deadline, newDay, newHour, newMinute, newSecond) => {
  const day = document.getElementById(newDay);
  const hour = document.getElementById(newHour);
  const minute = document.getElementById(newMinute);
  const second = document.getElementById(newSecond);
  const timerUpdate = setInterval (() => {
  const time = getRemainTime(deadline);
    day.innerHTML = time.remainDays;
    hour.innerHTML = time.remainHours;
    minute.innerHTML = time.remainMinutes;
    second.innerHTML = time.remainSeconds;

    if(time.remainTime <= 1){
      clearInterval(timerUpdate);
    }
  }, 1000)
}

countdown("Dec 25 2023 00:00:01", "ch-newDay", "ch-newHour", "ch-newMinute", "ch-newSecond");
countdown("Oct 31 2023 00:00:01", "ha-newDay", "ha-newHour", "ha-newMinute", "ha-newSecond");