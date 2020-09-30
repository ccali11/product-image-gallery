const { getAll, getType, getRandomByType, getRandom } = require('./image-urls.js');
const { Product, Cost, StaticImage, Image, sync } = require('../Models.js');
const faker = require('faker');
const { Op } = require('sequelize');

// Writes 100 names to the Products table

const productGet = async () => {
  const previousNames = [];
  for (let i = 0; i < 100; i++) {
    let name = faker.name.firstName();
    while (previousNames.indexOf(name) !== -1) {
      name = faker.name.firstName();
    }
    previousNames.push(name);
    await Product.create({
      name: name,
      rating: Math.random() * 5,
      ratingcount: Math.floor(Math.random() * 9999999)
    });
  }
};

// Writes a cost for every metal type for each product

const costGet = async () => {
  const products = await Product.findAll();
  for (let i = 1; i <= products.length; i++) {
    await Cost.create({
      product_id: i,
      r: (Math.random() * 9000) + 1000,
      y: (Math.random() * 9000) + 1000,
      w: (Math.random() * 9000) + 1000,
      p: (Math.random() * 9000) + 1000
    });
  }
}

// Write 3 random static images for each Product.

const staticImageGet = async () => {
  const results = await Product.findAll();
  for (let i = 1; i <= results.length; i++) {
    for (let j = 0; j < 8; j++) {
      const imageUrl = await getRandom();
      const thumbUrl = imageUrl.replace(/\.(png|jpg)/, '_tn.jpg');
      await StaticImage.create({
        thumb: thumbUrl,
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
          const randThumb = randImage.replace(/\.(jpg|png)/, '_tn.jpg');
          await Image.create({
            thumb: randThumb,
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

(async () => {
  return await sync()
    .then(async () => {
      await productGet();
    })
    .then(async () => {
      await costGet();
    })
    .then(async () => {
      await staticImageGet();
    })
    .then(async () => {
      await imageGet();
    });
})();