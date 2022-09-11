const modal = document.querySelector(".modal");
const openModal = document.querySelector(".btn");
const closeModal = document.querySelector(".btn1");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
