import express from 'express';
import {
    addPlaylistSongs,
    deletePlaylistSongs,
    getPlaylistSongs,
    playPlaylistSongs,
} from '../controllers/playlists.js';

const router = express.Router();

router.get('/', getPlaylistSongs);
router.post('/songs', addPlaylistSongs);
router.delete('/songs/:id', deletePlaylistSongs);
router.get('/songs/:id', playPlaylistSongs);

export default router;
