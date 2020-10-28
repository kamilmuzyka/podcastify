import express from 'express';
import sequelize from './utils/database.js';
const app = express();
const port = process.env.PORT ?? 3001;

try {
    await sequelize.sync();
    app.listen(port);
} catch (err) {
    throw new Error(err);
}