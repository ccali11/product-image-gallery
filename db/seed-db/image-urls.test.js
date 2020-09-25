const getUrlByMetal = require ('./image-urls.js').getUrlByMetal;

test('returns a list of urls from a file', async () => {
  const urlList = await getUrlByMetal();
  expect(urlList.length).toBeGreaterThan(50);
});

// test('returns a list of urls from a file, sorted by metal', async () => {
//   const urlList = await getUrlByMetal
// });