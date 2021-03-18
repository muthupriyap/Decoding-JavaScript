//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let string = 'w3resource';
let splittingValue = (string[string.length - 1]); 
let substr = string.substr(0,string.length-1);
console.log(`${splittingValue}${substr}`);
