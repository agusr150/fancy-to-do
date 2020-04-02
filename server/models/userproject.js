'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {});
  UserProject.associate = function(models) {
    // associations can be defined here
  };
  return UserProject;
};