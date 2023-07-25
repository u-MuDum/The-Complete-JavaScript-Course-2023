// let country = "Türkiye";
// let population = 85000000;
// let continent = "Asia";

// console.log(population);
// console.log(country);
// console.log(continent);

//CHALLENGE #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = Math.floor(massMark / heightMark ** 2);
const BMIJohn = Math.floor(massJohn / heightJohn ** 2);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is (${BMIMark}) higher than John's! (${BMIJohn})`);
} else {
  console.log(`John's BMI is (${BMIJohn}) higher than Mark's! (${BMIMark})`);
}
