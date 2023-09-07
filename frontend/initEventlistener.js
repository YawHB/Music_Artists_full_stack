import { createArtistForm } from "./CRUD/createArtist.js";
import { filterArtists, filterFavorites } from "./filter-sort.js/filter.js";
import { sortArtists } from "./filter-sort.js/sort.js";

function initEventlisteners() {
    document
        .querySelector("#btn-add-artist")
        .addEventListener("click", createArtistForm);
    document.querySelector("#filter").addEventListener("change", filterArtists);
    document.querySelector("#sort").addEventListener("change", sortArtists);
    document
        .querySelector("#favorites")
        .addEventListener("change", filterFavorites);
}

export { initEventlisteners };
