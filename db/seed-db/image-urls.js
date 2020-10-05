const fs = require('fs');
const path = require('path');

const urlFile = 's3urls.txt';
const presUrl = 's3urls-pres.txt';
const presStatUrl = 's3urls-pres-static.txt';

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

const getPres = async () => {
  return fs.promises.readFile(path.join(__dirname, presUrl))
    .then((presUrlBuffer) => {
      const presOutput = [];
      const presUrls = presUrlBuffer.toString();
      const presArr = presUrls.split('\n');
      presArr.forEach((url) => {
        const fileName = url.split('\/').slice(-1)[0];
        let info = fileName.split('.').slice(0)[0].split('-');
        info.splice(2,1);
        if (info[2] < 3) {
          info[2] = info[2] * 100;
        }
        let pointSplit = url.split('.');
        pointSplit[4] += '_tn';
        const thumbUrl = pointSplit.join('.');
        const output = {
          cut: info[0],
          metal: info[1],
          carat: info[2],
          image: url,
          thumb: thumbUrl
        }
        presOutput.push(output);
      });
      return presOutput;
    })
    .catch((err) => {
      console.error(err);
    });
};

const getPresStatic = async () => {
  return fs.promises.readFile(path.join(__dirname, presStatUrl))
    .then((buffer) => {
      const buffString = buffer.toString();
      const urls = buffString.split('\n');
      return urls;
    })
    .catch((err) => {
      console.error(err);
    })
}

module.exports = { getAll, getPres, getPresStatic, getType, getRandom, getRandomByType, nameDir };