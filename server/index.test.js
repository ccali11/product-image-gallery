const axios = require('axios').default;

describe('/gallery API route', () => {
  test('should respond with 8 static images and 1 default, custom image', async (done) => {
    const urlObject = await axios.get('http://localhost:3030/gallery/40');
    expect(await urlObject.data.thumbs.length).toEqual(9);
    expect(await urlObject.data.images.length).toEqual(9);
    done();
  })
});

describe('/custom API route', () => {
  test('should respond with the 1 image/thumbnail matching all parameters given', async (done) => {
    const options = {
      url: 'http://localhost:3030/custom/30/platinum/asscher/200',
      method: 'GET'
    }
    const urlObject = await axios(options);
    expect(typeof urlObject.data.thumb).toEqual('string');
    expect(typeof urlObject.data.image).toEqual('string');
    done();
  });
});