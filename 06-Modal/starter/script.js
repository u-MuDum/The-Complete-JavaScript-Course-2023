"use strict";

//DOM tanımlama
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Açma ve kapatma fonksiyonlarını tanımlama
const addHidden = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
const removeHidden = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

//Butonlara basarak pencereyi açma ve kapatma
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", removeHidden);
overlay.addEventListener("click", addHidden);
btnCloseModal.addEventListener("click", addHidden);

//ESC tuşu ile pencereyi kapatma
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    addHidden();
  }
});
