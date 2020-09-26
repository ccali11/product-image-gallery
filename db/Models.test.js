const { sync, Product, StaticImage, Image } = require('./Models.js');

test('sync should synchronize all models', async () => {
  try {
    await sync()
      .then((results) => {
        expect(results).toEqual(['Product','StaticImage','Image']);
      });
  } catch (err) {
    console.error(err);
  }
});

