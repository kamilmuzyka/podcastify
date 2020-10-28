import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/connection.js';
import User from './models/user.js';
import Episode from './models/episode.js';

const app = express();
const port = process.env.PORT ?? 3001;
app.use(bodyParser.json());
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