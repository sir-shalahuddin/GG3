import {
    addSongModel,
    getSongByIdModel,
    getSongsModel,
} from '../models/playlists.js';

export const addSongService = async (title, artists, url) => addSongModel(title, artists, url);

export const playSongService = async (id) => {
    const song = await getSongByIdModel(id);
    if (!song) {
        return null;
    }
    song.playCount += 1;
    return song;
};

export const getSongsService = async () => getSongsModel();

export const sortSongByPlayCountService = async (playlist, order) => {
    const sortedPlaylist = [...playlist];
    if (order === 'asc') {
        await sortedPlaylist.sort((a, b) => a.playCount - b.playCount);
    } else if (order === 'desc') {
        await sortedPlaylist.sort((a, b) => b.playCount - a.playCount);
    }

    return sortedPlaylist;
};
