import { displayArtists } from "./CRUD/showArtists.js";
const endPoint = "http://localhost:3001";
let artists = [];

//==================== GET ====================//

async function apiGetArtists() {
    const response = await fetch(`${endPoint}/artists`);
    artists = await response.json();
    displayArtists(artists);
}

//==================== POST ====================//

async function apiCreateArtists() {
    // const response = await fetch(`${}`);
}

//==================== UPDATE ====================//

async function apiUpdateArtists() {}

export { apiGetArtists, apiUpdateArtists, artists, endPoint };
