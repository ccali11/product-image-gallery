const fs = require('fs');
const path = require('path');

const urlFile = 's3urls.txt';

const getUrlByMetal = async (metal = null) => {
  if (!metal) {
    return fs.promises.readFile(path.join(__dirname, urlFile))
      .then((fileUrlBuffer) => {
        const fileUrls = fileUrlBuffer.toString();
        const urlsArr = fileUrls.split('\n');
        return urlsArr;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

exports.getUrlByMetal = getUrlByMetal;