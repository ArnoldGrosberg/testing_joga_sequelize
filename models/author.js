'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.hasMany(models.Article, {
        foreignKey: {
          name: 'AuthorId',
          field: 'Author_id',
        }
      })
    }
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
 //  , author_id: DataTypes.INTEGER,
//    foreignKey: true,
 //   constraints: false
 }, {
    sequelize,
    modelName: 'Author',
});

// const Sequelize = require("sequelize");
// const Article = require('./article')(sequelize, Sequelize.DataTypes);
  return Author;
};