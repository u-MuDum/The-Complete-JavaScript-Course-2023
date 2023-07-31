"use strict";

// function juice() {
//   console.log("Merhaba, bugünkü içeceğimiz 'meyve suyu'");
// }

// juice();
// juice();
// juice();

// function meyveSuyu(elma, visne) {
//   console.log(`Bugünkü içeceğimiz ${elma} elma, ${visne} visneden olusuyor.`);
// }

// meyveSuyu(3, 4);

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function yasHesapla1(dogumYili) {
//   let yas = 2037 - dogumYili;
//   return yas;
// }

// let yas1 = yasHesapla1(1991);
// console.log(yas1);

// let yasHesapla2 = function (dogumYili) {
//   let yas = 2037 - dogumYili;
//   return yas;
// };

// let yas2 = yasHesapla2(1985);
// console.log(yas2);

const emekliligeKalan = (dogumYili, adi) => {
  const yas = 2045 - dogumyili;
  const kalan = 65 - yas;
  return `${adi} Bey, emekliliğinize ${kalan} yıl kaldı.`;
};

console.log(emekliligeKalan(1990, "Mustafa"));
