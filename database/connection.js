import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'podcastify',
    dialect: 'postgres'
});

export default sequelize;