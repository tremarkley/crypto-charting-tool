const changeDateStringFormat = function changeDateStringFormat(datesArray) {
  const results = [];
  for (let i = 0; i < datesArray.length; i += 1) {
    const dates = datesArray[i].split('-');
    results.push(`${dates[1]}-${dates[2]}-${dates[0]}`);
  }
  return results;
}

export default changeDateStringFormat;

