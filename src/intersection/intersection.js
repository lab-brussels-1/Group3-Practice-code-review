/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 *
 */

export const intersection = (array = [], values = []) => {
  if (typeof array !== 'object' || typeof values !== 'object') {
    throw new TypeError('arguments should be arrays');
  }
  if (array === null || values === null) {
    throw new Error('arguments should be arrays');
  }
  const newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray.filter((element) => values.includes(element));
};
