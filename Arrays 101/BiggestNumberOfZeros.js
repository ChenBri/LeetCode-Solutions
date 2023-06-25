/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  numberOfZeros = 0;
  biggestNumberOfZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      numberOfZeros++;
      if (numberOfZeros > biggestNumberOfZeros) {
        biggestNumberOfZeros = numberOfZeros;
      }
    } else {
      numberOfZeros = 0;
    }
  }
  return biggestNumberOfZeros;
};
