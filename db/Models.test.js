const { sync, Product, StaticImage, Image } = require('./Models.js');

test('sync should synchronize all models', async () => {
  try {
    const results = await sync();
    expect(results).toEqual(['Product','StaticImage','Image']);
  } catch (err) {
    console.error(err);
  }
});