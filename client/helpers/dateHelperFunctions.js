// return an array of months in chronological order based on an array of input dates

/**
 * @param {dates} array
 * @returns {array}
 */

const getArrayOfMonths = function getArrayOfMonths(dates) {
  const monthNames = [
    ['01', 'January'],
    ['02', 'Febuary'],
    ['03', 'March'],
    ['04', 'April'],
    ['05', 'May'],
    ['06', 'June'],
    ['07', 'July'],
    ['08', 'August'],
    ['09', 'September'],
    ['10', 'October'],
    ['11', 'November'],
    ['12', 'December'],
  ];

  const monthsSeen = {};
  for (let i = 0; i < dates.length; i += 1) {
    const yearMonthDate = dates[i].split('-');
    const month = yearMonthDate[1];
    if (monthsSeen[month] === undefined) {
      monthsSeen[month] = true;
    }
  }
  //  putting all months seen into an array with the correct order
  const monthTuplesSeen = monthNames.filter(monthTuple => monthsSeen[monthTuple[0]]);
  const monthNamesSeen = monthTuplesSeen.map(tuple => tuple[1]);
  return monthNamesSeen;
};

export default { getArrayOfMonths };

