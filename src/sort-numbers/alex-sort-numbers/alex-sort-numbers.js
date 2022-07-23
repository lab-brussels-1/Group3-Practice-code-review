export const sortNumbers = (array1) => {
  const newSortNumbers = [...array1];
  for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] !== 'number') {
      throw new TypeError('all elements must be numbers');
    }
  }
  newSortNumbers.sort((a, b) => {
    return a - b;
  });
  return newSortNumbers;
};
