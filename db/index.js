const { Product, StaticImage, Image, Cost, sync } = require('./Models.js');
const { Op } = require('sequelize');

// This function returns the default images for a given product.
const getDefaults = async (product_id) => {
  const thumbUrlArray = [];
  const imageUrlArray = [];
  let customThumb, customImage;
  // Querying and pushing default static images
  const staticImages = await StaticImage.findAll({
    where: {
      product_id: product_id,
    }
  });
  staticImages.forEach((statUrl) => {
    thumbUrlArray.push(statUrl.dataValues.thumb);
    imageUrlArray.push(statUrl.dataValues.image);
  });
  // Querying and pushing default custom images
  const Images = await Image.findAll({
    where: {
      product_id: product_id,
      metal: 'white',
      carat: 100,
      cut: 'asscher'
    }
  });
  Images.forEach((custUrl) => {
    customThumb = custUrl.dataValues.thumb;
    customImage = custUrl.dataValues.image;
  });
  // Returns completed array of image URLs for the carousel
  return {
    custom: {
      thumb: customThumb,
      image: customImage
    },
    thumbs: thumbUrlArray,
    images: imageUrlArray
  };
};

const getSpecific = async (product_id, metal, cut, carat) => {
  const images = await Image.findAll({
    where: {
      product_id: product_id,
      metal: metal,
      cut: cut,
      carat: carat
    }
  });
  return {
    thumb: images[0].dataValues.thumb,
    image: images[0].dataValues.image
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

const getRating = async (product_id) => {
  const rating = await Product.findAll({
    where: {
      id: product_id
    }
  });
  return {
    rating: rating[0].rating,
    ratingcount: rating[0].ratingcount
  };
};

module.exports = { getDefaults, getSpecific, getCost, getRating };