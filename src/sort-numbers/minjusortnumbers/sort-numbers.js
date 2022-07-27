/**
 * Sorts an array of numbers from smallest to largest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 */

export const sortNumbers = (arrOfNumbers = []) => {
  let num = [];
  const arr = [...arrOfNumbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        num = arr[j];
        arr[j] = arr[i];
        arr[i] = num;
      }
    }
  }
  return arr;
};
