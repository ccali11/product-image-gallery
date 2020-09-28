const { sync, Product, StaticImage, Image } = require('./Models.js');

describe.skip('sequelize models in Models.js', () => {
  test('sync should synchronize all models', async () => {
      const results = await sync();
      expect(results).toEqual(['Product','StaticImage','Image']);
  });
});

