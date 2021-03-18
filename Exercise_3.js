//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

let areaOfTriangle = (a , b , c) => {

let side = (a + b + c) / 2;
let findOutTriangle = Math.sqrt(side * (side - a)*(side - b)*(side - c));
console.log(findOutTriangle);

}
areaOfTriangle(5, 6, 7)