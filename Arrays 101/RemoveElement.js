/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      for (let j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      if (nums[i] == val) {
        i--;
      }
      nums.length--;
    }
  }
  return nums;
};

var removeElement_2 = function (nums, val) {
  return nums.filter((a) => a !== val);
};
