const express = require('express');
const bodyparser = require('body-parser');
const { getPricesBetweenDates } = require('../controllers/coinDeskAPI');

const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));

router.get('/historical', async (req, res, next) => {
  const query = req.body;
  try {
    const prices = await getPricesBetweenDates(query);
    res.send(prices);
  } catch (error) {
    next(error);
  }
});
