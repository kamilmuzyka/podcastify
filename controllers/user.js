import User from '../models/user.js';
import Episode from '../models/episode.js';

export const addEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;
    let user = await User.findByPk(userId);
    let episode = await Episode.findByPk(episodeId);
    if (!user) {
        user = await User.create({
            id: userId
        });
    }
    if (!episode) {
        episode = await Episode.create({
            id: episodeId
        });
    }
    user.addEpisode(episode);
    res.status(200).send();
}

export const removeEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;
    let user = await User.findByPk(userId);
    let episode = await Episode.findByPk(episodeId);
    user.removeEpisode(episode);
    res.status(200).send();
}

export const findEpisodes = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    const episodes = await user.getEpisodes();
    res.send(episodes);
}