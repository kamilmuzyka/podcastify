import { Sequelize } from 'sequelize';
import CONFIG from './config.js';

const sequelize = new Sequelize({
    database: CONFIG.name,
    dialect: CONFIG.system
});

export default sequelize;