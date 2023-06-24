const Sequelize  = require('sequelize');
const sequelize = new Sequelize('Compound', 'root', 'Pass1', {
    host: 'localhost',
    dialect: 'mysql',
    define: { "id": false, "freezeTableName": true, "createdAt": false, "updatedAt": false }
});

try {
    sequelize.authenticate();
    console.log('Connection established successfully');
} catch (error) {
    console.error('Failure in Connection', error);
}

module.exports = sequelize;