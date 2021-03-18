//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

const covertCelsiusToFahrenheit = ( Fahrenheit ) => {

let temperature   = (5/9) * (Fahrenheit - 32);
let frah = (9 * temperature + (32 * 5) / 5);

console.log(temperature,frah )




}
covertCelsiusToFahrenheit(34)