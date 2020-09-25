const { getAll, getType } = require('./image-urls.js');
const mysql = require('mysql');
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../db.config.js');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});



const seedStatic = () => {

};

exports.seedStatic = seedStatic;