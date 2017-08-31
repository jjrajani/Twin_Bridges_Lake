const MONTHS = {
  0: { long: 'January', short: 'Jan' },
  1: { long: 'February', short: 'Feb' },
  2: { long: 'March', short: 'Mar' },
  3: { long: 'April', short: 'Apr' },
  4: { long: 'May', short: 'May' },
  5: { long: 'June', short: 'Jun' },
  6: { long: 'July', short: 'Jul' },
  7: { long: 'August', short: 'Aug' },
  8: { long: 'September', short: 'Sept' },
  9: { long: 'October', short: 'Oct' },
  10: { long: 'November', short: 'Nov' },
  11: { long: 'December', short: 'Dec' }
};
export function longStringMonth(dateNum) {
  return MONTHS[dateNum].long;
}

export function shortStringMonth(dateNum) {
  return MONTHS[dateNum].short;
}

const DAYS = {
  0: { long: 'Monday', short: 'Mon' },
  1: { long: 'Tuesday', short: 'Tues' },
  2: { long: 'Wednesday', short: 'Wed' },
  3: { long: 'Thursday', short: 'Thurs' },
  4: { long: 'Friday', short: 'Fri' },
  5: { long: 'Saturday', short: 'Sat' },
  6: { long: 'Sunday', short: 'Sun' }
};
export function longStringDay(dateNum) {
  console.log(dateNum);
  return DAYS[dateNum].long;
}

export function shortStringDay(dateNum) {
  console.log(dateNum);
  return DAYS[dateNum].short;
}
