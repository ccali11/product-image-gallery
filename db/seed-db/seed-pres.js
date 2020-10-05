const { getPres } = require('./image-urls.js');
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

(async () => {
  await presGet();
})();