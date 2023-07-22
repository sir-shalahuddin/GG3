import express from 'express';
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import playlistsRouter from './routes/playlists.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(express.json());

app.use('/playlists', playlistsRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('server running on port 3000');
});
