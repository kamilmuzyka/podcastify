import { Sequelize } from 'sequelize';
import sequelize from '../database/connection.js';

const User = sequelize.define('User', {
    id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        primaryKey: true
    }
}, { timestamps: false });

export default User;