'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Todo extends Model {}
  Todo.init({
    title: {
      type: Sequelize.STRING,
      validate: {notEmpty: true}
    },
    description: {
      type: Sequelize.STRING,
      validate: {notEmpty: true}
    },
    status: {
      type: Sequelize.BOOLEAN,
      validate: {notEmpty: true}
    },
    due_date: {
      type: Sequelize.DATE,
      validate: {notEmpty: true}
    },
    UserId: {
      type: Sequelize.INTEGER,
      validate: {notEmpty: true}
    }
  }, {sequelize})

  // const Todo = sequelize.define('Todo', {
  //   title: DataTypes.STRING,
  //   description: DataTypes.STRING,
  //   status: DataTypes.BOOLEAN,
  //   due_date: DataTypes.DATE
  // }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return Todo;
};