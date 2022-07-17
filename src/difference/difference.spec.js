import { difference } from './difference.js';

describe('The arguments should be arrays', () => {
  it('when arguments are not arrays throw error', () => {
    expect(() => difference(null, [])).toThrow('arguments should be arrays');
  });
  it('when arguments are not arrays throw error', () => {
    expect(() => difference([7, 9, 0], 8)).toThrow(
      'arguments should be arrays',
    );
  });
});
describe('Creates an array of values that are in the first array, but not not in the second array.', () => {
  it('[2, 1], [2, 3]--> [1]', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
  it('[1, 2, 1], [2, 3]--> [1]', () => {
    expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
  });
  it('when no argument passed should apply default value', () => {
    expect(difference()).toEqual([]);
  });
  it('[1, 1, 1], [1, 1]--> []', () => {
    expect(difference([1, 1, 1], [1, 1])).toEqual([]);
  });
  it('[null, null, 1], [null, 2]--> [1]', () => {
    expect(difference([null, null, 1], [null, 2])).toEqual([1]);
  });
});

describe('Repeated values are not duplicated in the return value', () => {
  it('[5, 1, 5, 1], [2, 3]--> [1]', () => {
    const array = [2, 1, 2, 1];
    const value = [2, 3];
    const actual = difference(array, value);
    const check = actual.filter(
      (element, index) => index !== actual.indexOf(element),
    );
    expect(check).toEqual([]);
  });
});
describe('The order of result values are determined by the first array', () => {
  it('[1, 2, 3, 4], [2, 1]--> [3, 4]', () => {
    const actual = difference([1, 2, 3, 4], [2, 1]);
    expect(actual.indexOf(3) < actual.indexOf(4)).toEqual(true);
  });
});
describe('No side effect', () => {
  it('function should return new array', () => {
    const array = [1, 2, 2, 3, 1];
    const value = [1, 2];
    expect(difference(array, value) === array).toEqual(false);
  });
});
