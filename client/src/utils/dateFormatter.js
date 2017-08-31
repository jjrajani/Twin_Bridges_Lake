import * as DateToStringformatter from './dateToStringFormatter';
/* Number returns*/
export function getMonth(dateString) {
  return new Date(dateString).getMonth();
}
export function getFullYear(dateString) {
  return new Date(dateString).getFullYear();
}

export function getDay(dateString) {
  return new Date(dateString).getDate();
}

/* String returns */
export function getLongStringMonth(dateString) {
  const date = new Date(dateString).getMonth();
  return DateToStringformatter.longStringMonth(date);
}
export function getLongStringDay(dateString) {
  const date = new Date(dateString).getDay();
  return DateToStringformatter.longStringDay(date);
}
export function getShortStringMonth(dateString) {
  const date = new Date(dateString).getMonth();
  return DateToStringformatter.shortStringMonth(date);
}
export function getShortStringDay(dateString) {
  const date = new Date(dateString).getDay();
  return DateToStringformatter.shortStringDay(date);
}
