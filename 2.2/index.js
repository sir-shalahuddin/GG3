import express from "express";
import { nanoid } from "nanoid";

const app = express();

app.use(express.json())

let playlist = []

app.post('/songs', (req, res) => {
    const id = `song-${nanoid(8)}`
    const { title, artists, url } = req.body;
    playlist.push({ id, title, artists, url });
    res.status(201).json({ id })
});

app.get('/songs/:index', (req, res) => {
    const index = req.params.index;
    const song = playlist.filter((song) => song.id === index)
    res.json({ song });
});

app.get('/playlists', (req, res) => {
    res.json({ playlist });
});

app.listen(3000, () => {
    console.log('server running on port 3000')
})