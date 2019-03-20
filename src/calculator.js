
export function monthTranslator(monthInput) {
  let month = monthInput.toLowerCase();

  if (month === "december" || month === "12") {
    return 11;
  } else if (month === "november" || month === "11"){
    return 10;
  } else if (month === "october" || month === "10"){
    return 9;
  } else if (month === "september" || month === "9"){
    return 8;
  } else if (month === "august" || month === "8"){
    return 7;
  } else if (month === "july" || month === "7"){
    return 6;
  } else if (month === "june" || month === "6"){
    return 5;
  } else if (month === "may" || month === "5"){
    return 4;
  } else if (month === "april" || month === "4"){
    return 3;
  } else if (month === "march" || month === "3"){
    return 2;
  } else if (month === "february" || month === "2"){
    return 1;
  } else if (month === "january" || month === "1"){
    return 0;
  }
}

export function dayTranslator(answer) {
  if (answer === 0) {
    return "Sunday";
  } else if (answer === 1){
    return "Monday";
  }
  else if (answer === 2){
    return "Tuesday";
  }
  else if (answer === 3){
    return "Wednesday";
  }
  else if (answer === 4){
    return "Thursday";
  }
  else if (answer === 5){
    return "Friday";
  }
  else if (answer === 6){
    return "Saturday";
  }
}
