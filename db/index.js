const { Product, StaticImage, Image, Cost, sync } = require('./Models.js');
const { Op } = require('sequelize');

// This function returns the default images for a given product.
const getDefaults = async (product_id, metal, cut, carat) => {
  const thumbUrlArray = [];
  const imageUrlArray = [];
  let customThumb, customImage;
  // Querying and pushing default static images
  const staticImages = await StaticImage.findAll({
    where: {
      product_id: product_id
    }
  });
  const custom = await Image.findAll({
    where: {
      product_id: product_id,
      metal: metal,
      carat: carat,
      cut: cut
    }
  });
  staticImages.forEach((statUrl) => {
    thumbUrlArray.push(statUrl.dataValues.thumb);
    imageUrlArray.push(statUrl.dataValues.image);
  });
  // Querying and pushing default custom images
  thumbUrlArray.unshift(custom[0].thumb);
  imageUrlArray.unshift(custom[0].image);
  // Returns completed array of image URLs for the carousel
  return {
    thumbs: thumbUrlArray,
    images: imageUrlArray
  };
};

const getCost = async (product_id, metal) => {
  const metalCode = metal.split('')[0];
  const price = await Cost.findAll({
    where: {
      product_id: product_id
    }
  });
  return { cost: price[0][metalCode] };
};

const getStatic = async (product_id) => {
  const static = await Product.findAll({
    where: {
      id: product_id
    }
  });
  return {
    rating: static[0].rating,
    ratingcount: static[0].ratingcount,
    name: static[0].name
  };
};

// removed getSpecific()
module.exports = { getDefaults, getCost, getStatic };