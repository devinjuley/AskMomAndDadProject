'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Question.associate = function (models) {
    Question.belongsTo(models.User, { foreignKey: 'userId'})
    Question.belongsTo(models.Category, { foreignKey: 'categoryId'})
    Question.hasMany(models.Answer, { foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true})
  };
  return Question;
};
