"use strict";
let allModalBtnEl = document.querySelectorAll(".modal-btn");
const closeModalBtnEl = document.querySelector(".close-modal");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");

for (let i = 0; i < allModalBtnEl.length; i++) {
  allModalBtnEl[i].addEventListener("click", function () {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
}

const closeModal = function () {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

closeModalBtnEl.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modalEl.classList.contains("hidden")) {
      closeModal();
    }
  }
});
