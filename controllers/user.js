import User from '../models/user.js';
import Episode from '../models/episode.js';

export const addEpisode = async (req, res) => {
    const { userId, episodeId } = req.body;

    if (!userId) {
        res.sendStatus(400).json({
            error: 'No user ID provided'
        });
        return;
    }

    if (!episodeId) {
        res.sendStatus(400).json({
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
        res.sendStatus(400).json({
            error: 'No user ID provided'
        });
        return;
    }

    if (!episodeId) {
        res.sendStatus(400).json({
            error: 'No episode ID provided'
        });
        return;
    }

    let user = await User.findByPk(userId);
    let episode = await Episode.findByPk(episodeId);

    if (!user || !episode) {
        res.sendStatus(400);
    }

    user.removeEpisode(episode);
    res.sendStatus(200);
}

export const findEpisodes = async (req, res) => {
    const userId = req.params.id;

    if (!userId) {
        res.sendStatus(400).json({
            error: 'No user ID provided'
        });
        return;
    }

    const user = await User.findByPk(userId);
    const episodes = await user.getEpisodes();
    const sanitisedEpisodes = [...episodes].map(episode => {
        return { id: episode.UserEpisode.EpisodeId };
    });

    res.json({
        user: user.id,
        episodes: sanitisedEpisodes
    });
}