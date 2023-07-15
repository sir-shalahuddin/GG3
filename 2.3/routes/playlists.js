import express from 'express';
import {
    addPlaylistSongs,
    getPlaylistSongs,
    playPlaylistSongs,
} from '../controllers/playlists.js';

const router = express.Router();

router.get('/', getPlaylistSongs);
router.post('/songs', addPlaylistSongs);
router.get('/songs/:id', playPlaylistSongs);

export default router;
