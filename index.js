import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/connection.js';
import userRoutes from './routes/user.js';
import User from './models/user.js';
import Episode from './models/episode.js';

const __dirname = process.env.PWD;
const port = process.env.PORT ?? 3001;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use('/api/user', userRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

User.belongsToMany(Episode, { through: 'UserEpisode' });
Episode.belongsToMany(User, { through: 'UserEpisode' });

try {
    await sequelize.sync();
    app.listen(port);
} catch (err) {
    throw new Error(err);
}