import { intersection } from './intersection.js';

describe('The arguments should be arrays', () => {
  it('when arguments are not arrays throw error', () => {
    expect(() => intersection(null, [])).toThrow('arguments should be arrays');
  });
  it('when arguments are not arrays throw error', () => {
    expect(() => intersection([7, 9, 0], 8)).toThrow(
      'arguments should be arrays',
    );
  });
});

describe('Creates an array of values that are in both the first and the second arrays.', () => {
  it('([2, 1], [2, 3])-->[2]', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });
  it('if no arguments passed default values should be applied', () => {
    expect(intersection()).toEqual([]);
  });
  it('there is no repeated value in the arrays', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });
});
describe('No side-effects.', () => {
  it('The function should return a new array', () => {
    const array = [2, 4, 6, 0, 9];
    const values = [6, 0];
    expect(intersection(array, values) === array).toEqual(false);
  });
});
describe('Repeated values are not duplicated in the return value,', () => {
  it('[5, 5, 5, 1], [5]--> [5]', () => {
    const array = [5, 5, 5, 1];
    const value = [5];
    const actual = intersection(array, value);
    const check = actual.filter(
      (element, index) => index !== actual.indexOf(element),
    );
    expect(check).toEqual([]);
  });
});
