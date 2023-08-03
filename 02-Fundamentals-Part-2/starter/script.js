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

//UZUN FONKSİYON YAZIMI

// function yasHesapla(dogumYili) {
//   let yas = 2023 - dogumYili;
//   return yas;
// }

// let yas1 = yasHesapla(1985);
// console.log(yas1);
// let yas2 = yasHesapla(1979);
// console.log(yas2);

//KISA FONKSİYON YAZIMI

// const yashesap1 = (yil1) => 2023 - yil1;
// const yas2 = yashesap1(1985);
// const yas3 = yashesap1(1979);
// console.log(yas2);
// console.log(yas3);

//UZUN EMEKLİLİK FONKSİYON YAZIMI

// const emekliligeKalan = function yasHesapla(dogumYili, adi) {
//   const yas = 2023 - dogumYili;
//   const kalan = 60 - yas;
//   return `${adi} Bey, ${yas} yaşındasınız ve emekliliğinize ${kalan} yıl kaldı.`;
// };

// console.log(emekliligeKalan(1985, "Mustafa"));
// console.log(emekliligeKalan(1979, "Kerim"));

//KISA EMEKLİLİK FONKSİYON YAZIMI

// const emekliligeKalan = (dogumYili, adi) => {
//   const yas = 2023 - dogumYili;
//   const kalan = 60 - yas;

//   return `Sayın ${adi} Bey, yaşınız ${yas} olup emekliliğe kalan süreniz ${kalan} yıldır. İyi günler !`;
// };

// console.log(emekliligeKalan(1985, "Mustafa"));
// console.log(emekliligeKalan(1979, "Kerim"));

//KULLANICIDAN VERİ GİRİŞİ İLE KISA EMEKLİLİK FONKSİYON YAZIMI !!!!!!!!!!!!(GELİŞTİRİLMESİ LAZIM)!!!!!!!!!!!!!!!

// const dogumYili = prompt("Lütfen doğum yılınızı giriniz");
// const adi = prompt("Lütfen adınızı giriniz");
// const emekliligeKalan = (dogumYili, adi) => {
//   const yas = 2023 - dogumYili;
//   const kalan = 60 - yas;

//   return `Sayın ${adi} Bey, yaşınız ${yas} olup emekliliğe kalan süreniz ${kalan} yıldır. İyi günler !`;
// };

// alert(emekliligeKalan(dogumYili, adi));

// const dogumYili2 = prompt("Lütfen doğum yılınızı giriniz");
// const adi2 = prompt("Lütfen adınızı giriniz");
// alert(emekliligeKalan(dogumYili2, adi2));

// FUNCTION İÇİNDE FUNCTION KONUSUNA İLERİDE TEKRAR BAK!!!!!!!!!!!!

// CHALLENGE #5

// const ortHesapla = (sayi1, sayi2, sayi3) => {
//   const ort1 = (sayi1 + sayi2 + sayi3) / 3;
//   return ort1;
// };
// const scoreDolphins = ortHesapla(96, 108, 89);

// const scoreKoalas = ortHesapla(88, 91, 110);

// if (scoreDolphins > scoreKoalas) {
//   console.log(
//     `Dolphins win the trophy. (${Math.floor(scoreDolphins)} vs ${Math.floor(
//       scoreKoalas
//     )})`
//   );
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(
//     `Koalas win the trophy. (${Math.floor(scoreDolphins)} vs ${Math.floor(
//       scoreKoalas
//     )})`
//   );
// } else console.log("Both win the trophy");

// CHALLENGE #6 UZUN

// function tipHesapla(bill) {
//   if (bill < 300 && bill > 50) {
//     let tip = bill * 0.15;
//     return tip;
//   } else {
//     let tip = bill * 0.2;
//     return tip;
//   }
// }

// const bills = [125, 555, 44];

// let tip1 = tipHesapla(bills[0]);
// let tip2 = tipHesapla(bills[1]);
// let tip3 = tipHesapla(bills[2]);
// console.log(tip1, tip2, tip3);

// const tips = [];
// tips.push(tip1, tip2, tip3);

// //tips.push(tip1, tip2, tip3, ...bills);  array içine array ekleme
// console.log(tips);

// const total = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]];
// console.log(total);

// CHALLENGE #6 KISA

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);
