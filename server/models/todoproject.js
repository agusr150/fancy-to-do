'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoProject = sequelize.define('TodoProject', {
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {});
  TodoProject.associate = function(models) {
    // associations can be defined here
  };
  return TodoProject;
};