// 1342. Number of Steps to Reduce a Number to Zero

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  steps = 0;
  while (num > 0) {
    steps++;
    num % 2 == 0 ? (num /= 2) : (num -= 1);
  }
  return steps;
};
