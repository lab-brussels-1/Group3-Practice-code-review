/**
 * Sorts an array of numbers from smallest to largest.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 */

export const sortNumbers = (arrayOfNumbers = []) => {
  if (
    // eslint-disable-next-line operator-linebreak
    typeof arrayOfNumbers !== 'object' ||
    // eslint-disable-next-line operator-linebreak
    arrayOfNumbers.includes(NaN) ||
    // eslint-disable-next-line operator-linebreak
    arrayOfNumbers.includes(Infinity) ||
    arrayOfNumbers.includes(-Infinity)
  ) {
    throw new Error('argument is not valid');
  }
  let sortedArray = [...arrayOfNumbers];
  sortedArray = sortedArray.sort((a, b) => {
    return a - b;
  });
  return sortedArray;
};
