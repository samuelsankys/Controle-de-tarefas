const Sequelize = require('sequelize');
const db = require('../../config/database');
const Activity = require('./activities.models');

const List = db.define('lists', { 
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
    }
});

List.hasOne(Activity,{
  foreignKey: 'list_id',
  as: 'activity',
  onDelete: "CASCADE",
});
Activity.belongsTo(List, {
  foreignKey: 'list_id',
  as: 'list',
});
module.exports = List