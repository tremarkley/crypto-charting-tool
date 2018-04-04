const express = require('express');
const { getPricesBetweenDates } = require('../controllers/coinDeskAPI');

const router = express.Router();

router.get('/historical', async (req, res, next) => {
  const { query } = req;
  try {
    const prices = await getPricesBetweenDates(query);
    res.send(prices);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
