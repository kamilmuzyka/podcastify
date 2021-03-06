import Sequelize from 'sequelize';
import User from '../models/user.js';
import Episode from '../models/episode.js';

export const addEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;

    if (!userId) {
        res
        .status(400)
        .json({
            error: 'No user ID provided'
        });
        return;
    }

    if (!episodeId) {
        res
        .status(400)
        .json({
            error: 'No episode ID provided'
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
    res.sendStatus(200);
}

export const removeEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;

    if (!userId) {
        res
        .status(400)
        .json({
            error: 'No user ID provided'
        });
        return;
    }

    if (!episodeId) {
        res
        .status(400)
        .json({
            error: 'No episode ID provided'
        });
        return;
    }

    let user = await User.findByPk(userId);
    let episode = await Episode.findByPk(episodeId);

    if (!user || !episode) {
        res.sendStatus(400);
        return;
    }

    user.removeEpisode(episode);
    res.sendStatus(200);
}

export const findEpisodes = async (req, res) => {
    const userId = req.params.id;

    if (!userId) {
        res
        .status(400)
        .json({
            error: 'No user ID provided'
        });
        return;
    }

    const user = await User.findByPk(userId);

    if (!user) {
        return;
    }

    const episodes = await user.getEpisodes({
        order: [[Sequelize.literal('"UserEpisode.createdAt"'), 'DESC']]
    });

    const sanitisedEpisodes = [...episodes].map(episode => {
        return { id: episode.UserEpisode.EpisodeId };
    });

    res
    .status(200)
    .json({
        user: user.id,
        episodes: sanitisedEpisodes
    });
}