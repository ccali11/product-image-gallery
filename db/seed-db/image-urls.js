const fs = require('fs');
const path = require('path');

const urlFile = 's3urls.txt';

// Names and corresponding directories from url
const nameDir = {
  'rose': '\/rg\/',
  'white': '\/wg\/',
  'yellow': '\/yg\/',
  'platinum': '\/p\/'
};

// This will return an array of all urls in the file
const getAll = async () => {
  return fs.promises.readFile(path.join(__dirname, urlFile))
  .then((fileUrlBuffer) => {
    const fileUrls = fileUrlBuffer.toString();
    const urlsArr = fileUrls.split('\n');
    return urlsArr;
  })
  .catch((err) => {
    console.log(err);
  });
};

// This will return an array of urls of a given type (metal)
const getType = async (type) => {
  return getAll()
      .then(urlsArr => {
        const typeArr = urlsArr.filter((url) => {
          return (url.includes(type) || url.includes(nameDir[type]));
        })
        return typeArr;
      });
};

// Get a random url of the metal type provided
const getRandomByType = async (type) => {
  const metalList = await getType(type);
  const randomIndex = Math.floor(Math.random() * metalList.length);
  return metalList[randomIndex];
};

const getRandom = async () => {
  const metalList = await getAll();
  const randomIndex = Math.floor(Math.random() * metalList.length);
  return metalList[randomIndex];
};

module.exports = { getAll, getType, getRandom, getRandomByType, nameDir };