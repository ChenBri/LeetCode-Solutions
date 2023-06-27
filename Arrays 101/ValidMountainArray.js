/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let peak = true;

  if (arr.length < 3 || arr[0] >= arr[1]) return false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) return false;

    if (peak && arr[i] > arr[i + 1]) {
      peak = false;
    } else if (!peak && arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return !peak;
};
