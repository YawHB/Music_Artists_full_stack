import { artists } from "../api.js";
import { displayArtists } from "../CRUD/showArtists.js";

function sortArtists(e) {
    let selectedValue = e.target.value;

    if (selectedValue === "NameAZ") {
        artists.sort((a, b) => a.name.localeCompare(b.name));
        displayArtists(artists);
    } else if (selectedValue === "NameZA") {
        artists.sort((b, a) => a.name.localeCompare(b.name));
        displayArtists(artists);
    }
}

export { sortArtists };
