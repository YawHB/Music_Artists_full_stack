import express from "express";
import cors from "cors";
import fs from "fs/promises";
const app = express();
const port = 3001;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("There we go");
});
//************ GET all artists *****************
app.get("/artists", async (req, res) => {
    //Fetcher json fil med artists
    const artistsJSON = await fs.readFile("musicArtists.json", "utf8");
    //Konverterer det til js
    const artists = JSON.parse(artistsJSON);

    const response = artists;
    if (artists.length === 0) {
        res.status(404).json({ message: "No artists found " });
    }
    //Sender et response (GET kald) med alle kunstnere
    res.json(response);
    console.log("GET request artists is working");
});

//*************** GET one artist **********************
app.get("/artists/:id", async (req, res) => {
    //Tager id'et fra objektet
    const id = Number(req.params.id);
    //Fetcher musicArtists fra json
    const json = await fs.readFile("musicArtists.json");
    //Parser listen til JS
    const artists = JSON.parse(json);
    //Finder den artist, hvis id matcher med id'et fra URL addressen's id variable
    const foundArtist = artists.find((artist) => artist.id === id);

    if (!artistsFound) {
        res.status(404).json({ message: "Artist not found" });
    }
    //sender Det objekt tilbage til klienten
    res.status(200).send(foundArtist);
});

//************* POST an artist ****************
app.post("/artists", async (req, res) => {
    //modtag alle properties af nye artist objekt
    const newArtist = req.body;
    //Giv newArtists et unikt id
    newArtist.id = new Date().getTime();

    const artistsJSON = await fs.readFile("musicArtists.json");
    const artists = JSON.parse(artistsJSON);

    //TIlføj det nye objekt til listen af artists
    artists.push(newArtist);
    //Send musiklisten tilbage med den nye artist tilføjet til listen
    fs.writeFile("musicArtists.json", JSON.stringify(artists));
    //send artists tilbage til klienten som et HTTP response

    const artist = artists.findIndex((artist) => artist.id === newArtist.id);
    res.status(200).send(artists);
});

//****************** UPDATE artist ********************
app.put("/artists/:id", async (req, res) => {
    //Finder det id som den ændrede artists har
    const id = Number(req.params.id);
    const updatedArtist = req.body;
    console.log(updatedArtist);
    //Fetcher hele listen af artists
    const artistsJSON = await fs.readFile("musicArtists.json");
    //parser til JS
    const artists = JSON.parse(artistsJSON);

    //Finder den artist i listen som matcher med ideen i URL'en
    let artistsFound = artists.find((artist) => artist.id === id);
    console.log(artistsFound);

    //Sætter de nye values fra den updaterede kunstner
    artistsFound.name = updatedArtist.name;
    artistsFound.birthdate = updatedArtist.birthdate;
    artistsFound.activeSince = updatedArtist.activeSince;
    artistsFound.id = updatedArtist.id;

    const artistJSON = JSON.stringify(artists);
    await fs.writeFile("musicArtists.json", artistJSON);

    if (!artistsFound) {
        res.status(404).json({ error: "artist was not found" });
    }

    res.json(artists);
});

//***************** DELETE an artist ********************
app.delete("/artists/:id", async (req, res) => {
    //Finder id på det objekt der skal slettes
    const id = Number(req.params.id);
    console.log("DELETE " + id);
    //Henter listen af artists
    const json = await fs.readFile("musicArtists.json");
    //konventerer til JS
    let artists = JSON.parse(json);
    //Finder det objekt der skal slettet gennem findIndex
    const index = artists.findIndex((artist) => artist.id === id);
    //Bruger splice til at fjerne det ene objekt fra listen
    artists.splice(index, 1);
    //Sender den updaterede liste tilbage til json filen
    await fs.writeFile("musicArtists.json", JSON.stringify(artists));
    //sender response tilbage til klienten med updateret liste af slettet artist
    res.json(artists);
});

app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`);
});
