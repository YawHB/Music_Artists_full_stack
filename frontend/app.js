import { apiGetArtists } from "./api.js";
import { initEventlisteners } from "./initEventlistener.js";

window.addEventListener("load", start);

async function start() {
    initEventlisteners();
    console.log("JS running");
    await apiGetArtists();
}

//==================== DELETE ====================//

async function apiDeleteArtists() {}

//==================== Display Artists ====================//

// function displayArtists(artists) {
//      const tbody = document.querySelector("#artists-table-content");
//      tbody.innerHTML = "";

//     for (const artist of artists) {
//         const html = /*html*/ `

//         <tr>
//           <td><img src=${artist.image}></td>
//           <td> ${artist.name}</td>
//           <td>${artist.birthdate}</td>
//           <td>${artist.activeSince}</td>
//           <td> <button>See more</button></td>
//         </tr>

//         `;

//         tbody.insertAdjacentHTML("beforeend", html);
//         tbody
//             .querySelector("tr:last-child button")
//             .addEventListener("click", () => artistClicked(artist));
//     }
// }

function deleteArtist(artist) {
    console.log("deleteArtist entered");
}
