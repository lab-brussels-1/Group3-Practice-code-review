import { deepFlat } from './deep-flat.js';

describe('Converts a nested array into a single array with no nesting', () => {
  it('[1, [2, [3, [4]], 5]]--> [1, 2, 3, 4, 5]', () => {
    const actual = deepFlat([1, [2, [3, [4]], 5]]);
    expect(actual).toEqual([1, 2, 3, 4, 5]);
  });
  it('["h", ["e", ["l", ["l"]], "o"]]--> ["h","e","l","l","o"]', () => {
    const actual = deepFlat(['h', ['e', ['l', ['l']], 'o']]);
    expect(actual).toEqual(['h', 'e', 'l', 'l', 'o']);
  });
  it('["", [""]]--> ["",""]', () => {
    const actual = deepFlat(['', ['']]);
    expect(actual).toEqual(['', '']);
  });
});
describe('There should not be side effect', () => {
  it('The function should return new array', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(deepFlat(array) === array).toEqual(false);
  });
});
describe('When empty array passed function should not throw an error ', () => {
  it('[]-->[]', () => {
    const array = [];
    expect(deepFlat(array)).toEqual([]);
  });
});
describe('when no argument passed should apply default argument', () => {
  it('default argument is array=[]', () => {
    expect(deepFlat()).toEqual([]);
  });
});
