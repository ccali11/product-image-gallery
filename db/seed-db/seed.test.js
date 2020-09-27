const { getAll, getType } = require('./image-urls.js');
const { Product, StaticImage, Image, sync } = require('../Models.js');
const { Op } = require('sequelize');
const { productGet, staticImageGet, imageGet } = require('./seed.js');

beforeAll(async () =>{
  await sync();
});

afterAll(async () => {
  await productGet;
  await staticImageGet;
  // await imageGet;
})

test('productGet fills the product table with 100 unique random names', async () => {
  await productGet()
    .then(() => {
      const products = Product.findAll();
      expect(products.length).toEqual(100);
    });
});

test('staticImageGet fills the StaticImages table with 3 pics for each product listing', async () => {
  await staticImageGet()
    .then(() => {
      const staticImages = StaticImage.findAll();
      expect(staticImages.length).toEqual(300);
    });
})