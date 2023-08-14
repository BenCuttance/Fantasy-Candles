const db = require('../config/connection');
const { Candle } = require('../models');
const candleSeeds = require('./candleSeeds.json');

db.once('open', async () => {
  try {
    await Candle.deleteMany({});
    await Candle.create(candleSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
