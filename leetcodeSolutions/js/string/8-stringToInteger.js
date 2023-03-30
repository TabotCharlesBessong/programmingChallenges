
const myAtoi =  (str) => {
  const converted = parseInt(str);

  if (converted > 2147483647) {
    return 2147483647;
  } else if (converted < -2147483648) {
    return -2147483648;
  }

  return isNaN(converted) ? 0 : converted;
};