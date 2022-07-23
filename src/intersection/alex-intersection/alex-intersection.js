export const intersection = (array = [], values = []) => {
  const newArray = [];
  if (typeof array !== 'object' || typeof values !== 'object') {
    throw new TypeError('input should be arrays');
  }
  if (array === null || values === null) {
    throw new Error('input should be arrays');
  }
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray.filter((element) => values.includes(element));
};
console.log(intersection([2, 1, 2, 3, 3, 3], [4, 8, 9, 2, 1]));
