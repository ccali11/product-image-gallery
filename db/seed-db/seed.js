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
    for (let j = 0; j < 8; j++) {
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
  const metals = ['rose', 'white', 'yellow', 'platinum'];
  const carats = [50, 100, 150, 200];
  const cuts = ['asscher', 'emerald', 'oval', 'pear', 'princess', 'round'];
  const products = await Product.findAll();
  for (let i = 1; i <= 100; i++) {
    for (const metal of metals) {
      for (const carat of carats) {
        for (const cut of cuts) {
          const randImage = await getRandomByType(metal);
          await Image.create({
            thumb: randImage,
            image: randImage,
            metal: metal,
            carat: carat,
            cut: cut,
            product_id: i
          });
        }
      }
    }
  }
};

module.exports = { productGet, staticImageGet, imageGet };

// TO RUN, uncomment functions below

// (() => {
//   sync()
//   .then(() => {
//     productGet();
//   })
//   .then(() => {
//     imageGet();
//   });
// })();

//staticImageGet();