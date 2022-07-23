export function flatter(array) {
  // I used the property flat and gave it a depth of infinity so that the arraay is flattened regadless of its debth
  let result = array.flat([Infinity]);
  // I return result for the function
  return result;
}
