import { openModal, closeModal, clearModal, dialog } from "../modalHelpers.js";
import { endPoint } from "../api.js";

const avatarPicture =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

function createArtistForm() {
    openModal();
    clearModal();

    const html = /*html*/ `

<h2>Add new artist</h2>
<form id="create-artist-form">
<label for="name">Name</label>
<input type="text" name="name" id="name" >

<label for="birthdate">Day of Birth</label>
<input type="text" name="birthdate" id="birthdate" >

<label for="activeSince">Debut</label>
<input type="text" name="activeSince" id="activeSince" >

<label for="genres">Genre</label>
<input type="text" name="genres" id="genres" >

<label for="labels">Labels</label>
<input type="text" name="labels" id="labels" >

<label for="website">Website</label>
<input type="url" name="website" id="website" >

<label for="img">Profile picture</label>
<input type="url" name="img" id="img" value="${avatarPicture}">

<input type="submit" value="Submit">
</form>
    
    `;
    dialog.insertAdjacentHTML("beforeend", html);

    document
        .querySelector("#create-artist-form")
        .addEventListener("submit", createArtist);
}

async function createArtist(e) {
    e.preventDefault();
    const form = e.target;

    const newArtist = {
        name: form.name.value,
        birthdate: form.birthdate.value,
        activeSince: form.activeSince.value,
        genres: form.genres.value,
        labels: form.labels.value,
        website: form.website.value,
        image: form.img.value,
    };
    const json = JSON.stringify(newArtist);
    const response = await fetch(`${endPoint}/artists`, {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        console.log("RESPONSE IS OK");
    } else {
        console.error("error");
    }
}

export { createArtistForm, avatarPicture };
