import express from 'express';
import playlistsRouter from './routes/playlists.js';

const app = express();

app.use(express.json());

app.use('/playlists', playlistsRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('server running on port 3000');
});
