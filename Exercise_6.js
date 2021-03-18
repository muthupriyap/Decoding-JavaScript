//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// Used in Webpage
let value = Math.ceil(Math.random()*10);
let promptMsg = prompt('Guess the user input value');
 if(value == promptMsg){
   console.log('Matched the user');
 }else{
   console.log('Not Matched')
 }

 console.log(value,promptMsg )