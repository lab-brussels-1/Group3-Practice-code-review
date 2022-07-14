/**
 * Sorts an array of numbers from smallest to largest.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 */

export const sortNumbers = (arrayOfNumbers = []) => {
  if (
    typeof arrayOfNumbers !== 'object' ||
    arrayOfNumbers.includes(NaN) ||
    arrayOfNumbers.includes(Infinity) ||
    arrayOfNumbers.includes(-Infinity)
  )
    throw new Error('argument is not valid');
  let sortedArray = [...arrayOfNumbers];
  sortedArray = sortedArray.sort((a, b) => {
    return a - b;
  });
  return sortedArray;
};
