//export function difference(array1, array2) {
//let result = [];
//for (let i = 0; i < array1.length; i++) {
//for (let j = i; j < array2.length; j++) {
//if (array1[i] !== array2[i]) {
//result.push(array1[i]);
//}
//}
//return result;
//}
//}
export const difference = (array = [], values = []) => {
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
  return newArray.filter((element) => values.includes(element) === false);
};
console.log(difference(['a', 1, 2, 3, 3, 3], [2, 3, 4, 8, 9]));
console.log(difference([1, 2, 1, 'a'], [4, 2, 'b', 5]));
