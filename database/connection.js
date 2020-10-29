import { Sequelize } from 'sequelize';
import { CONFIG } from './config.js';

const sequelize = new Sequelize({
    database: CONFIG.name,
    dialect: CONFIG.system,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

export default sequelize;