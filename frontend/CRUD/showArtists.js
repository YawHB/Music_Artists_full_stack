import { artistClicked } from "../artistDetails.js";
import { isFavorite } from "../isFavorite.js";
//==================== Show Artists =================//

function displayArtists(artists) {
    const tbody = document.querySelector("#artists-table-content");
    tbody.innerHTML = "";

    for (const artist of artists) {
        const html = /*html*/ `
        
        <tr>
          <td><img class="image" src=${artist.image}></td>
          <td> ${artist.name}</td>
          <td>${artist.birthdate}</td>
          <td>${artist.activeSince}</td>
          <td> <button>See more</button></td> 
          <td> <button id="isFavorite-${artist.id}">Favorite</button></td>
        </tr>
        
        
        `;

        tbody.insertAdjacentHTML("beforeend", html);
        tbody
            .querySelector("tr:last-child button")
            .addEventListener("click", () => artistClicked(artist));

        tbody
            .querySelector(`tr:last-child #isFavorite-${artist.id}`)
            .addEventListener("click", () => isFavorite(artist));
    }
}

export { displayArtists };
