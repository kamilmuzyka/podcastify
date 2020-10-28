import express from 'express';
import sequelize from './utils/database.js';
import User from './models/user.js';
import Episode from './models/episode.js';

const app = express();
const port = process.env.PORT ?? 3001;

User.belongsToMany(Episode, { through: 'UserEpisode', timestamps: false });
Episode.belongsToMany(User, { through: 'UserEpisode', timestamps: false });

try {
    await sequelize.sync({
        // force: true
    });
    app.listen(port);
} catch (err) {
    throw new Error(err);
}