const mysql = require('mysql');
const { Sequelize, Model, DataTypes } = require('sequelize');
const dbConfig = require('./db.config.js');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const StaticImage = sequelize.define('StaticImage', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  thumb: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_id: {
    type: DataTypes.NUMBER,
    allowNull: true,
    references: {
      model: Product,
      key: 'id'
    }
  }
});

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  thumb: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  default: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  metal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carat: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.NUMBER,
    allowNull: true,
    references: {
      model: Product,
      key: 'id'
    }
  }
});

module.exports = {
  'Product': Product,
  'StaticImage': StaticImage,
  'Image': Image
};