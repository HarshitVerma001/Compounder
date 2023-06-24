const sequelize  =  require('./index');
const { DataTypes } = require('sequelize');


const Model = sequelize.define('Compounds', {
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CompoundName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CompoundDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ImageSource: {
        type: DataTypes.STRING
    },
    ImageAttribution: {
        type: DataTypes.STRING,
    },
    DateModified: {
        type: DataTypes.DATE,
        allowNull: false,
    }

})

module.exports = Model;
