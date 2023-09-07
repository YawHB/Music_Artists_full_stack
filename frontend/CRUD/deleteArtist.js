import { endPoint } from "../api.js";

let id;
async function deleteArtist(artist) {
    id = artist.id;
    const response = await fetch(`${endPoint}/artists/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        console.log("Artist Deleted");
    } else {
        console.error("Error on Delete");
    }
}

export { deleteArtist };
