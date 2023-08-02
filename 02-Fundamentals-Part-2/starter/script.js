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

// FUNCTION İÇİNDE FUNCTION
