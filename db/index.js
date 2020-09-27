const { Product, StaticImage, Image, sync } = require('./Models.js');
const { Op } = require('sequelize');

const getDefaults = async (product_id) => {
  const thumbUrlArray = [];
  const imageUrlArray = [];

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
      product_id: product_id
      metal: 'white',
      carat: 100,
      cut: 'asscher'
    }
  });
  Images.forEach((statUrl) => {
    thumbUrlArray.push(statUrl.dataValues.thumb);
    imageUrlArray.push(statUrl.dataValues.image);
  });

  // Returns completed array of image URLs for the carousel
  return {thumbs: thumbUrlArray, images: imageUrlArray};
};

exports.getDefaults = getDefaults;