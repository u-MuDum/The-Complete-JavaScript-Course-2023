// let country = "Türkiye";
// let population = 85000000;
// let continent = "Asia";

// console.log(population);
// console.log(country);
// console.log(continent);

//CHALLENGE #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = Math.floor(massMark / heightMark ** 2);
// const BMIJohn = Math.floor(massJohn / heightJohn ** 2);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is (${BMIMark}) higher than John's! (${BMIJohn})`);
// } else {
//   console.log(`John's BMI is (${BMIJohn}) higher than Mark's! (${BMIMark})`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else console.log("Both win the trophy");

// const age = 14;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${drink}.`);

const bill = 525;
// const tip15 = bill * 0.15;
// const tip20 = bill * 0.2;

const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(bill, tip);
console.log(bill + tip);

console.log(`Efendim hesabınız ${bill + tip} TL'dir.`);
