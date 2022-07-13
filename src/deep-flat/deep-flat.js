/**
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 *
 */

export const deepFlat = (array = []) => {
  const newArray = [...array];
  return newArray.flat(Infinity);
};
