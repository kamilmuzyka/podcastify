import { Sequelize } from 'sequelize';
import sequelize from '../database/connection.js';

const Episode = sequelize.define('Episode', {
    id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        primaryKey: true
    }
}, { timestamps: false });

export default Episode;