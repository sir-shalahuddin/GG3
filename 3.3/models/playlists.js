import mongoose, { isObjectIdOrHexString } from 'mongoose';

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artists: {
        type: Array,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    playCount: {
        type: Number,
        default: 0,
    },
}, { versionKey: false });

const Song = mongoose.model('Song', songSchema);

export async function addSongModel({ title, artists, url }) {
    const song = new Song({
        title,
        artists,
        url,
    });
    return song.save();
}

export async function playSongModel(id) {
    if (isObjectIdOrHexString(id)) {
        const filter = { _id: id };
        const update = { $inc: { playCount: 1 } };
        const result = await Song.updateOne(filter, update);
        return result;
    }
    return null;
}

export async function getSongsModel({ order }) {
    let result;
    if (order === 'asc') {
        result = await Song.find().sort({ playCount: 1 });
    } else if (order === 'desc') {
        result = await Song.find().sort({ playCount: -1 });
    } else {
        result = await Song.find();
    }

    return result;
}

export async function deleteSongModel(id) {
    return Song.deleteOne({ _id: id });
}
