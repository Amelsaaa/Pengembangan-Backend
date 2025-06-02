const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jadwal = sequelize.define('Jadwal', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_mapel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_guru: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    jam: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    tableName: 'jadwal',
    timestamps: false
});

module.exports = Jadwal;