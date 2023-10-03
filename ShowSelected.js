let month = document.getElementById("optionMonth");
let day = document.getElementById("optionDay");
let year = document.getElementById("optionYear");

class showSelectedOption {
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

const display1 = new showSelectedOption(month);
const display2 = new showSelectedOption(day);
const display3 = new showSelectedOption(year);