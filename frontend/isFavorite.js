import { artists } from "./api.js";
import { displayArtists } from "./CRUD/showArtists.js";
let favoriteArtists = new Set([]);

function isFavorite(artist) {
    if (artist.isFavorite) {
        artist.isFavorite = false;
        displayBlueColorOnFavorite(artist.id);
        removeArtistFromFavoriteList(artist);
    } else {
        artist.isFavorite = true;
        displayGreenColorOnFavorite(artist.id);
        addArtistToFavoriteList(artist);
    }
    console.log(artist.isFavorite);
}

function displayGreenColorOnFavorite(id) {
    document.querySelector(`#isFavorite-${id}`).style.backgroundColor = "green";
}

function displayBlueColorOnFavorite(id) {
    document.querySelector(`#isFavorite-${id}`).style.backgroundColor = "blue";
}

function addArtistToFavoriteList(artist) {
    favoriteArtists.add(artist);
    console.log(favoriteArtists);
}

function removeArtistFromFavoriteList(artist) {
    favoriteArtists.delete(artist);
}

export { isFavorite, favoriteArtists };
