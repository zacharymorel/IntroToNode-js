const moment = require('moment');
moment().format();

const chalk = require('chalk');



function secsofday(){
  let htos = +moment().format('HH') * 3600;
  let mtos = +moment().format('mm')* 60;
  let secs = +moment().format('ss');
  return htos + mtos + secs;
}

let dayLight = '';

function DayLightSavings() {
  if (moment().isDST() === true) {
    dayLight = chalk.rgb(150, 167, 100)('is')
  } else {
    daylight = chalk.rgb(160, 71, 65)('is not')
  }
  return dayLight;
}

let leapYear = '';

function isLeapYear() {
  if (moment().isLeapYear() === true) {
    leapYear = chalk.rgb(150, 167, 100)('is')
  } else {
    leapYear = chalk.rgb(160, 71, 65)('is not')
  }
  return leapYear;
}


console.log(`It is ${chalk.rgb(116, 158, 179)(moment().format("dddd, MMMM  Do YYYY, h:mm:ss a"))}!`);
console.log(`It is the ${chalk.rgb(162, 120, 156)(moment().format("DDDo"))} day of the year!`);
console.log(`It is ${chalk.rgb(131, 179, 165)(secsofday())} seconds into the day!`);
console.log(`It ${DayLightSavings()} during DayLight Savings Time!`);
console.log(`It ${isLeapYear()} a leap year!`);













//
