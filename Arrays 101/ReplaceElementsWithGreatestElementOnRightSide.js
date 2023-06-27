/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let biggestNum = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > biggestNum) {
        biggestNum = arr[j];
      }
    }
    arr[i] = biggestNum;
  }
  arr[arr.length - 1] = -1;
  return arr;
};
