const { getPres, getPresStatic } = require('./image-urls.js');
const { Product, Cost, StaticImage, Image, sync } = require('../Models.js');

const presGet = async () => {
  let presUrls = await getPres();
  presUrls.forEach((item) => {
    if (item.metal === 'white') {
      let plat = Object.create(item);
      plat.metal = 'platinum';
      presUrls.push(plat);
    }
  })
  let id = 1;
  for (let url of presUrls) {
    url.product_id = 1;
    await Image.update(url, {
      where: {
        id: id
      }
    });
    id++;
  }
};

const presStat = async () => {
  let statUrls = await getPresStatic();
  let id = 1;
  for (let url of statUrls) {
    await StaticImage.update({ thumb: url, image: url, product_id: 1}, {
      where: {
        id: id
      }
    });
    id++;
  }
}

const presCost = async () => {
  Cost.update({y: 1950, r: 1950, w: 1950, p: 2250}, {
    where: {
      product_id: 1
    }
  })
}

module.exports = { presGet, presStat, presCost };