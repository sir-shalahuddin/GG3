import {
    addSongModel,
    playSongModel,
    getSongsModel,
    deleteSongModel,
} from '../models/playlists.js';

export const addSongService = async (payload) => addSongModel(payload);

export const playSongService = async (id) => playSongModel(id);

export const getSongsService = async (query) => getSongsModel(query);

export const deleteSongService = async (id) => deleteSongModel(id);
