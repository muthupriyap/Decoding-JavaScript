//9. Write a JavaScript program to calculate days left until next Christmas.

let currentDate = new Date().toLocaleDateString('en-GB',{day : 'numeric', year : 'numeric' , month : 'numeric'});
let date = new Date(Date.UTC(2021, 11 ,25));
let cmas = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
if (currentDate !== cmas){
    let diffDays = (Math.abs(new Date(cmas) - new Date(currentDate)));
    let cmasLiftDays = Math.ceil(diffDays/(1000 * 60 * 60 * 24))
    console.log(`${cmasLiftDays} days left until for christmas celebration `)
}else{
    console.log("Your chrismas celebration mood!")
}