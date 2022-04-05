'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'AuthorId',
          field: 'Author_id',
        }
      })
      
      this.belongsToMany(models.Tags, {
        foreignKey: 'articleId',
        through: 'ArticleTags',
      })
      
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: DataTypes.INTEGER
//    foreignKey: true,
 //   constraints: false
  }, {
    sequelize,
    modelName: 'Article',
  });

//Article.associate = function (models) {
 // Article.hasOne(models.Author);
  // Article.hasOne(Author, { foreignKey: 'author_id' })
//  models.Author.BelongsTo(this.Article, {
 //   foreignKey: 'author_id',
 // constraints: false,
 // as: 'text'
 // });
//}
// const Sequelize = require("sequelize");
// const Author = require('./author')(sequelize, Sequelize.DataTypes);

  return Article;
};