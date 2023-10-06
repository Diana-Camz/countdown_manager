class Timer {
  static countdowns = 0;
  constructor(deadline, name, newDay, newHour, newMinute, newSecond){
    this.deadline = deadline;
    this.name = name;
    this.newDay = newDay;
    this.newHour = newHour;
    this.newMinute = newMinute;
    this.newSecond = newSecond;
    this.idCountdown = Timer.countdowns++;
    }
  /*get deadline(){
    return this.deadline;
  }
  set deadline(deadline){
    this.deadline = deadline;
  }
  get newDay(){
    return this.newDay;    
  }
  set newDay(newDay){
    this.newDay = newDay;
  }
  get newHour(){
    return this.newHour;
  }
  set newHour(newHour){
    this.newHour = newHour;
  }
  get newMinute(){
    return this.newMinute;
  }
  set newMinute(newMinute){
    this.newMinute = newMinute;
  }
  get newSecond(){
    return this.newSecond;
  }
  set newSecond(newSecond){
    this.newSecond = newSecond;
  }
 get idCountdown(){
    return this.idCountdown; 
  }; */
}
