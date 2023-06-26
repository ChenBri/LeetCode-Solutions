/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      for (let j = i; j < nums.length; j++) {
        nums[j - 1] = nums[j];
        console.log(nums);
      }
      nums.length--;
      i--;
    }
  }
  return nums;
};
