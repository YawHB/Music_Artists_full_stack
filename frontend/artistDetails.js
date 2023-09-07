import { openModal, closeModal, clearModal } from "./modalHelpers.js";
import { updateArtist } from "./CRUD/updateArtist.js";
import { deleteArtist } from "./CRUD/deleteArtist.js";
function artistClicked(artist) {
    openModal();
    clearModal();
    showDialog(artist);
}

function showDialog(artist) {
    const html = /*html*/ `
<div id="show-artist-container">
    <div>
        <img src="${artist.image}"> 
    </div>
    <div>
        <p>${artist.name}</p>
        <p>${artist.birthdate}</p>
        <p>${artist.activeSince}</p>
        <p>${artist.genres}</p>
        <p>${artist.labels}</p>
        <p>${artist.website}</p>
    </div>
    <div class="btns-container">
        <button id="btn-delete">Delete</button>
        <button id="btn-edit">Edit</button>
    </div>
</div>
    
    `;

    document
        .querySelector("#show-artist-dialog")
        .insertAdjacentHTML("beforeend", html);

    document
        .querySelector("#btn-delete")
        .addEventListener("click", () => deleteArtist(artist));
    document
        .querySelector("#btn-edit")
        .addEventListener("click", () => updateArtist(artist));
}

export { artistClicked };
