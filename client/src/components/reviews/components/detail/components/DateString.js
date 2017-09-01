import React from 'react';
import * as DateFormatter from '../../../../../utils/dateFormatter';

const DateString = date => {
  if (!date) return null;
  const dayString = DateFormatter.getLongStringDay(date),
    month = DateFormatter.getShortStringMonth(date),
    dayNum = DateFormatter.getDay(date),
    year = DateFormatter.getFullYear(date);
  return (
    <p className="date_string">
      Date Posted: {dayString} {month}, {dayNum} {year}
    </p>
  );
};

export default DateString;
