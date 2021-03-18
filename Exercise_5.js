//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

for (year = 2014 ; year <= 2050 ; year++){

let date = new Date(year, 0)
if(date.getDay() === 0){
    console.log(`1st January is being fall on sunday: ${year}`)
}
} 

  



