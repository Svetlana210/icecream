(() => {
  const refs = {
    openModalBtn: document.querySelector("[read-more-modal-open]"),
    closeModalBtn: document.querySelector("[read-more-modal-close]"),
    modal: document.querySelector("[read-more-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
