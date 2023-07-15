import {
    addSongService,
    getSongsService,
    playSongService,
    sortSongByPlayCountService,
} from '../services/playlists.js';

export const addPlaylistSongs = async (req, res) => {
    try {
        const { title, artists, url } = req.body;
        if (!title || !artists || !url) {
            return res.status(400).json({
                status: 'fail',
                message: 'bad payload',
            });
        }
        const data = await addSongService(title, artists, url);
        return res.status(201).json({
            status: 'success',
            message: `${title} added to playlist`,
            data,
        });
    } catch (e) {
        return res.status(500).json({
            status: 'fail',
            message: 'something wrong from side',
        });
    }
};

export const playPlaylistSongs = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await playSongService(id);

        if (!song) {
            return res.status(404).json({
                status: 'fail',
                message: 'Song not found!',
            });
        }

        return res.status(200).json({
            status: 'success',
            data: song,
        });
    } catch (e) {
        return res.status(500).json({
            status: 'fail',
            message: 'something wrong from side',
        });
    }
};

export const getPlaylistSongs = async (req, res) => {
    try {
        const sortBy = req.query.sortby;
        const songs = await getSongsService();
        if (songs.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'Playlist is empty',
            });
        }
        if (sortBy === 'most-played') {
            await sortSongByPlayCountService(songs);
        }
        return res.status(200).json({
            status: 'success',
            data: songs,
        });
    } catch (e) {
        return res.status(500).json({
            status: 'fail',
            message: 'something wrong from side',
        });
    }
};
