import { artists } from "../api.js";
import { displayArtists } from "../CRUD/showArtists.js";
import { favoriteArtists } from "../isFavorite.js";
let selectedGenre;

function filterArtists(e) {
    //Lytter til brugers valgte genre i dropdown menu
    const genre = e.target.value;
    //Hvis "All" er valgt, vis alle artists
    if (genre === "All") {
        selectedGenre = artists;
        displayArtists(selectedGenre);
        //Ellers søg på den genre vil se
    } else {
        selectedGenre = artists.filter((artist) =>
            artist.genres.includes(genre)
        );
        console.log(selectedGenre);
        displayArtists(selectedGenre);
    }
}

function filterFavorites(e) {
    const selected = e.target.value;
    console.log(selected);

    if (selected === "All") {
        displayArtists(artists);
    } else if (selected === "Favorites") {
        displayArtists(favoriteArtists);
    }
}

export { filterArtists, filterFavorites, selectedGenre };
