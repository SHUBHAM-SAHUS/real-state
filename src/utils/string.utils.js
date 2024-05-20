// const moment = require("moment/moment");

export const captilizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const sliceAddress = (address, length) => {
  if (address)
    return `${address.slice(0, length)}...${address.slice(address.length - length)}`;
  return address;
};

export const sliceString = (str, length) => {
  if (str) return `${str.slice(0, length)}...`;
  return str;
};

// export function getTimeAgo(notificationTimestamp) {
//   return moment(notificationTimestamp).fromNow();
// }
