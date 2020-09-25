const { getAll, getType, nameDir } = require ('./image-urls.js');

let urlList, roseList, whiteList, yellowList, platinumList;

beforeAll(async (done) => {
  urlList = await getAll();
  roseList = await getType('rose');
  whiteList = await getType('white');
  yellowList = await getType('yellow');
  platinumList = await getType('platinum');
  done();
});

test('getAll returns a list of urls from a file', async () => {
  expect(urlList.length).toBeGreaterThan(50);
});


test('getType returns a list of filtered urls from a file', async () => {
  expect(roseList).toEqual(urlList.filter((url) => {
    return (url.includes('rose') || url.includes(nameDir.rose));
  }));
  expect(whiteList).toEqual(urlList.filter((url) => {
    return (url.includes('white') || url.includes(nameDir.white));
  }));
  expect(yellowList).toEqual(urlList.filter((url) => {
    return (url.includes('yellow') || url.includes(nameDir.yellow));
  }));
  expect(platinumList).toEqual(urlList.filter((url) => {
    return (url.includes('platinum') || url.includes(nameDir.platinum));
  }));
})