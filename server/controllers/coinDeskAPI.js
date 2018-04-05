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