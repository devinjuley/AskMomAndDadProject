'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Answer.associate = function (models) {
    Answer.hasMany(models.Comment, { foreignKey: 'answerId', onDelete: 'CASCADE', hooks: true})
    Answer.belongsTo(models.User, { foreignKey: 'userId'})
    Answer.belongsTo(models.Question, { foreignKey: 'questionId'})
  };
  return Answer;
};
