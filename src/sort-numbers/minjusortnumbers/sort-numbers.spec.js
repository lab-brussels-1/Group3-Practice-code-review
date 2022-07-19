import { sortNumbers } from './sort-numbers.js';

describe('Sorts an array of numbers from smallest to largest', () => {
  it('integer numbers', () => {
    expect(sortNumbers([10, 0, 9, -1, 3])).toEqual([-1, 0, 3, 9, 10]);
  });
  it('decimal numbers', () => {
    expect(sortNumbers([0.005, 0, 0.7, 0.01])).toEqual([0, 0.005, 0.01, 0.7]);
  });
  it('mixed whole and decimal numbers', () => {
    const expected = [1, 2, 3.8, 5.4];
    const received = sortNumbers([5.4, 2, 3.8, 1]);
    expect(received).toEqual(expected);
  });
  it('only negative numbers', () => {
    expect(sortNumbers([-1000, -0.002, -1, -76])).toEqual([
      -1000, -76, -1, -0.002,
    ]);
  });
  it('sorted numbers should stay in the same order', () => {
    expect(sortNumbers([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
describe('There is no side-effect', () => {
  it('Returns a new array without modifying the original array.', () => {
    const array = [10, 5, 8, 8, 9];
    expect(sortNumbers(array) === array).toEqual(false);
  });
});
describe('The array is not of numbers', () => {
  it('When no argument passed a default value should be applied', () => {
    expect(sortNumbers()).toEqual([]);
  });
  it('When argument is an empty array function should return an empty array', () => {
    expect(sortNumbers([])).toEqual([]);
  });
  it('When argument is NaN function should raise an error ', () => {
    expect(() => sortNumbers(NaN)).toThrow('argument is not valid');
  });
  it('When array includes NaN function should raise an error ', () => {
    expect(() => sortNumbers([NaN, 1, 4])).toThrow('argument is not valid');
  });
  it('[Infinity]--> function should raise an error', () => {
    expect(() => sortNumbers([Infinity])).toThrow('argument is not valid');
  });
  it('[-Infinity]--> function should raise an error', () => {
    expect(() => sortNumbers([-Infinity])).toThrow('argument is not valid');
  });
  it('["3","2","1"]--> function should raise an error', () => {
    expect(sortNumbers(['3', '2', '1'])).toEqual(['1', '2', '3']);
  });
});
