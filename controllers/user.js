import User from '../models/user.js';
import Episode from '../models/episode.js';

export const addEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;

    if (!userId) {
        res.status(400).send({
            error: 'No user ID provided in the request body'
        });
        return;
    }

    if (!episodeId) {
        res.status(400).send({
            error: 'No episode ID provided in the request body'
        });
        return;
    }

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
    res.send(200);
}

export const removeEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;

    if (!userId) {
        res.status(400).send({
            error: 'No user ID provided in the request body'
        });
        return;
    }

    if (!episodeId) {
        res.status(400).send({
            error: 'No episode ID provided'
        });
        return;
    }

    let user = await User.findByPk(userId);
    let episode = await Episode.findByPk(episodeId);
    user.removeEpisode(episode);
    res.send(200);
}

export const findEpisodes = async (req, res) => {
    const userId = req.params.id;

    if (!userId) {
        res.status(400).send({
            error: 'No user ID provided in the request body'
        });
        return;
    }

    const user = await User.findByPk(userId);
    const episodes = await user.getEpisodes();
    res.send(episodes);
}