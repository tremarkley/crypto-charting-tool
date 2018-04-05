import { getArrayOfMonths } from './dateHelperFunctions';

const sortedByDatePriceArray = (priceData) => {
  const dateStrings = Object.keys(priceData);
  //  sort dates
  dateStrings.sort();
  const prices = [];
  for (let i = 0; i < dateStrings.length; i += 1) {
    prices.push(priceData[dateStrings[i]]);
  }
};

const composeDataSet = (apiResponse) => {
  const dates = Object.keys(apiResponse);
  const monthNames = getArrayOfMonths(dates);
  const prices = sortedByDatePriceArray(apiResponse);
  return { data: prices, labels: monthNames };
};

export default { composeDataSet };
