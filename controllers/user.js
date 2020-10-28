import User from '../models/user.js';
import Episode from '../models/episode.js';

export const addEpisode = async (req, res) => {
    res.send('Add episode');
}

export const removeEpisode = async (req, res) => {
    res.send('Remove episode');
}

export const findEpisodes = async (req, res) => {
    res.send('Return episodes');
}