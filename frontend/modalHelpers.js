function openModal() {
    const modal = document.querySelector("#show-artist-dialog");
    modal.showModal();
}

function closeModal() {
    const modal = document.querySelector("#show-artist-dialog");
    modal.close();
}

function clearModal() {
    const modal = document.querySelector("#show-artist-dialog");
    modal.innerHTML = "";
}

const dialog = document.querySelector("#show-artist-dialog");

export { openModal, closeModal, clearModal, dialog };
