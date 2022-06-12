const Sequelize = require('sequelize');
const db = require('../../config/database');
const List = require('./list.models');

const Activity = db.define('activities', { 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: 'lists', key: 'id' },
      }
});

module.exports = Activity;