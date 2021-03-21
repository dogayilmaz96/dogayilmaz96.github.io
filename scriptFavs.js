"use strict";

const modals = document.querySelector(".modals");
const firstModal = document.querySelector(".firstModal");
const secondModal = document.querySelector(".secondModal");
const thirdModal = document.querySelector(".thirdModal");
const forthModal = document.querySelector(".forthModal");
const fifthModal = document.querySelector(".fifthModal");
const sixthModal = document.querySelector(".sixthModal");
const seventhModal = document.querySelector(".seventhModal");
const eightModal = document.querySelector(".eightModal");
const ninethModal = document.querySelector(".ninethModal");

const overlay = document.querySelector(".overlay");

const btnOpenModal = document.querySelector(".show-modal");
const btnOpenModal2 = document.querySelector(".show-modal2");
const btnOpenModal3 = document.querySelector(".show-modal3");
const btnOpenModal4 = document.querySelector(".show-modal4");
const btnOpenModal5 = document.querySelector(".show-modal5");
const btnOpenModal6 = document.querySelector(".show-modal6");
const btnOpenModal7 = document.querySelector(".show-modal7");
const btnOpenModal8 = document.querySelector(".show-modal8");
const btnOpenModal9 = document.querySelector(".show-modal9");

const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  document.querySelector(".modals").style.display = "none";
  overlay.classList.add("hidden");
  location.reload();
};

btnOpenModal.addEventListener("click", function () {
  console.log("button clicked");
  firstModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnOpenModal2.addEventListener("click", function () {
  secondModal.classList.remove("hidden");
  console.log("button clicked");
  overlay.classList.remove("hidden");
});
btnOpenModal3.addEventListener("click", function () {
  console.log("button clicked");
  thirdModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal4.addEventListener("click", function () {
  console.log("button clicked");
  forthModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal5.addEventListener("click", function () {
  console.log("button clicked");
  fifthModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal6.addEventListener("click", function () {
  console.log("button clicked");
  sixthModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal7.addEventListener("click", function () {
  console.log("button clicked");
  seventhModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal8.addEventListener("click", function () {
  console.log("button clicked");
  eightModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnOpenModal9.addEventListener("click", function () {
  console.log("button clicked");
  ninethModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modals.classList.contains("hidden")) {
    closeModal();
  }
});
