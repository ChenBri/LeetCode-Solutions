/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      console.log(arr);
      arr.pop();
      arr.splice(i, 0, 0);
      i++;
    }
  }
  return arr;
};

var duplicateZeros_2 = function (arr) {
  x = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      for (let j = arr.length - 1; j >= i; j--) {
        arr[j + 1] = arr[j];
      }
      i++;
    }
  }

  arr.length = x;
  return arr;
};
