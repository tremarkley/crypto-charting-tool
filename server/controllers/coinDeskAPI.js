const request = require('request-promise-native');
const querystring = require('query-string');

const getOptions = query => ({
  url: `https://api.coindesk.com/v1/bpi/historical/close.json?${querystring.stringify(query)}`,
  method: 'GET',
});

const getPricesBetweenDates = async ({ start, end }) => {
  const options = getOptions({ start, end });
  try {
    const { bpi } = JSON.parse(await request(options));
    return bpi;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getPricesBetweenDates,
};

//  get symbol id that you are interested in
//  make GET @ https://api.coindesk.com/v1/bpi/historical/close.json?
//  start: 2016-01-15
//  end: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`

//  data shape: {"bpi":
//  {"2018-02-04":8186.6488,"2018-02-05":6914.26,"2018-02-06":7700.3863,"2018-02-07":7581.8038},
//  "disclaimer":"This data was produced from the CoinDesk...",
//  "time":{"updated":"Feb 11, 2018 00:03:00 UTC",
//  "updatedISO":"2018-02-11T00:03:00+00:00"}}
