import { nanoid } from 'nanoid';
import { readFile } from 'fs/promises';

const playlist = JSON.parse(
    await readFile(
        new URL('./playlist.json', import.meta.url),
    ),
);

async function generateSongId() {
    return `song-${nanoid(8)}`;
}

export async function addSongModel(title, artists, url) {
    const song = {
        songId: await generateSongId(),
        title,
        artists,
        url,
        playCount: 0,
    };

    playlist.push(song);
    return song;
}

export async function getSongByIdModel(id) {
    const song = playlist.find((songs) => songs.songId === id);
    return song;
}

export async function getSongsModel() {
    return playlist;
}
