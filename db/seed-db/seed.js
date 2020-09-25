const { getAll, getType, getRandomByType, getRandom } = require('./image-urls.js');
const { Product, StaticImage, Image, sync } = require('../Models.js');
const faker = require('faker');
const { Op } = require('sequelize');

// Writes 100 names to the Products table

const productGet = async () => {
  for (let i = 0; i < 100; i++) {
    await Product.create({ name: faker.name.firstName() });
  }
};

// Write 3 random static images for each Product.

const staticImageGet = async () => {
  const results = await Product.findAll();
  for (let i = 1; i <= results.length; i++) {
    for (let j = 0; j < 3; j++) {
      const imageUrl = await getRandom();
      await StaticImage.create({
        thumb: imageUrl,
        image: imageUrl,
        product_id: i
      });
    }
  }
};

// Write a picture for every metal, carat, and cut for each product.

const imageGet = async () => {
  const products = await Product.findAll();
  const rose = await getRandomByType('rose');
  const white = await getRandomByType('white');
  const yellow = await getRandomByType('yellow');
  const platinum = await getRandomByType('platinum');
  // TODO: actually seed stuff.
};

module.exports = { productGet, staticImageGet, imageGet };