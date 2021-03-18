//1. Write a JavaScript program to display the current day and time in the following format. 

let getHour = new Date().toLocaleDateString('en-GB',{hour: 'numeric', hour12: true }); // taking hour
let exactHour = getHour.split(',')[1]; // split with time
let getSecond = new Date().toLocaleDateString('en-GB',{second: 'numeric', minute: 'numeric'}) // taking seconds and minute
let getTimeAndHours = (`${exactHour} :${getSecond.split(',')[1]}`); // Concat time and Sec
let getDay = new Date().toLocaleString('en-GB',{ weekday : 'long' }); // taking weekday
console.log(`"Today day is : ${getDay} and time is :${getTimeAndHours} "`); 

