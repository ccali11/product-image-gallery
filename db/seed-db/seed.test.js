const { getAll, getType } = require('./image-urls.js');
const { Product, StaticImage, Image, sync } = require('../Models.js');
const { Op } = require('sequelize');
const { productGet, staticImageGet, imageGet } = require('./seed.js');

// beforeAll(async (done) => {
//   await sync();
//   done();
// });

describe.skip('seed.js', (done) => {
  test.skip('productGet fills the product table with 100 unique random names', async (done) => {
    await productGet()
      .then(async () => {
        const products = await Product.findAll();
        expect(products.length).toEqual(100);
      });
    done();
  });

  test.skip('staticImageGet fills the StaticImages table with 3 pics for each product listing', async (done) => {
    await staticImageGet()
      .then(() => {
        const staticImages = await StaticImage.findAll();
        expect(staticImages.length).toEqual(300);
      });
    done();
  })

  test.skip('imageGet fills the Images table with pictures for every combination of metal, cut, and carat for every item', async (done) => {
    await imageGet()
      .then(() => {
        const images = Images.findAll();
        expect(Images.length).toEqual(9600);
      });
  })
  done();
});