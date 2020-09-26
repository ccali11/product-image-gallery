const { Product, StaticImage, Image, sync } = require('./Models.js');
const { Op } = require('sequelize');

const getDefaults = async (product_id) => {
  const thumbUrlArray = [];
  const imageUrlArray = [];
  const staticImages = await StaticImage.findAll({
    where: {
      product_id: product_id
    }
  });
  // const Images = await Image.findAll({
  //   where: {
  //     product_id: product_id
  //   }
  // });
  staticImages.forEach((statUrl) => {
    thumbUrlArray.push(statUrl.dataValues.thumb);
    imageUrlArray.push(statUrl.dataValues.image);
  });
  // Images.forEach((statUrl) => {
  //   thumbUrlArray.push(statUrl.dataValues.thumb);
  //   imageUrlArray.push(statUrl.dataValues.image);
  // });
  console.log('THUMBS', thumbUrlArray);
  console.log('IMAGES', imageUrlArray);
  return {thumbs: thumbUrlArray, images: imageUrlArray};
};

exports.getDefaults = getDefaults;