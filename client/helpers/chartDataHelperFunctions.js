import changeDateStringFormat from './dateHelperFunctions';

const sortedByDatePriceArray = (priceData) => {
  const dateStrings = Object.keys(priceData);
  //  sort dates
  dateStrings.sort();
  const prices = [];
  for (let i = 0; i < dateStrings.length; i += 1) {
    prices.push(priceData[dateStrings[i]]);
  }
  return { dates: dateStrings, prices };
};

const formatForChartJS = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data,
      },
    ],
  };
  return chartData;
};

const composeDataSet = (apiResponse) => {
  const { dates, prices } = sortedByDatePriceArray(apiResponse);
  const formattedDates = changeDateStringFormat(dates);
  return formatForChartJS({ data: prices, labels: formattedDates });
};

export default composeDataSet;
