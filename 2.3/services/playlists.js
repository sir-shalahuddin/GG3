import {
    addSongModel,
    getSongByIdModel,
    getSongsModel,
} from '../models/playlists.js';

export const addSongService = async (payload) => addSongModel(payload);

export const playSongService = async (id) => {
    const song = await getSongByIdModel(id);
    if (!song) {
        return null;
    }
    song.playCount += 1;
    return song;
};

export const getSongsService = async (query) => getSongsModel(query);
