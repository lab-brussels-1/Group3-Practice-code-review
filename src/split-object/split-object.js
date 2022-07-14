/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 *
 */

export const splitObject = (toSeparate = {}) => {
  if (typeof toSeparate !== 'object') throw new TypeError('argument should be an object');
  const newArray = [];
  for (const [key, value] of Object.entries(toSeparate)) {
    const obj = {};
    obj[key] = value;
    newArray.push(obj);
  }
  return newArray;
};
