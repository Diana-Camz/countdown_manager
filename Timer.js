class Timer {
  static countdowns = 0;
  constructor(deadline, name){
    this.deadline = deadline;
    this.name = name;
    this.idCountdown = Timer.countdowns++;
    }
}
