import { endPoint } from "../api.js";
import { openModal, clearModal, dialog } from "../modalHelpers.js";

let id;
function updateArtistForm(artist) {
    id = artist.id;
    console.log("entered updateArtistForm");
    openModal();
    clearModal();

    const html = /*html*/ `

<h2>Update Artist</h2>
<form id="update-artist-form">
<label for="name">Name</label>
<input type="text" name="name" id="name" value="${artist.name}" >

<label for="birthdate">Day of Birth</label>
<input type="text" name="birthdate" id="birthdate" value="${artist.birthdate}" >

<label for="activeSince">Debut</label>
<input type="text" name="activeSince" id="activeSince" value="${artist.activeSince}" >

<label for="genres">Genre</label>
<input type="text" name="genres" id="genres" value="${artist.genres}" >

<label for="labels">Labels</label>
<input type="text" name="labels" id="labels" value="${artist.labels}" >

<label for="website">Website</label>
<input type="url" name="website" id="website" value="${artist.website}" >

<label for="img">Profile picture</label>
<input type="url" name="img" id="img" value="${artist.image}">

<input type="submit" value="Submit">
</form>
    
    `;
    dialog.insertAdjacentHTML("beforeend", html);
    document
        .querySelector("#update-artist-form")
        .addEventListener("submit", updateArtist);
}

async function updateArtist(e) {
    e.preventDefault();
    console.log("Entered UpdateArtist");
    const form = e.target;
    console.log(form);

    const updatedArtist = {
        name: form.name.value,
        birthdate: form.birthdate.value,
        activeSince: form.activeSince.value,
        genres: form.genres.value,
        labels: form.labels.value,
        website: form.website.value,
        image: form.img.value,
    };

    const json = JSON.stringify(updatedArtist);
    const response = await fetch(`${endPoint}/artists/${id}`, {
        method: "PUT",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        console.log("RESPONSE IS OK");
    } else {
        console.error("ERROR");
    }
}

export { updateArtistForm as updateArtist };
