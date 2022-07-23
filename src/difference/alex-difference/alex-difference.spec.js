/* eslint-disable no-loop-func */
import { difference } from './alex-difference.js';

for (const solution of [difference]) {
  describe(`${solution.name}: returns the difference`, () => {
    describe('it checks if the input is an object or not', () => {
      it('should give an error if the values are not array', () => {
        expect(() => solution([1, 2, 3], 5)).toThrow('input should be arrays');
      });
    });
    describe('it checks if the input is an object or not', () => {
      it('should give an error if the values are not array', () => {
        expect(() => solution([1, 2, 3], null)).toThrow(
          'input should be arrays',
        );
      });
    });
    describe('it checks if the input is an object or not', () => {
      it('should give an error if the values are not array', () => {
        expect(() => solution(null, 5)).toThrow('input should be arrays');
      });
    });
    describe('it checks if the input is an object or not', () => {
      it('should give an error if the values are not array', () => {
        expect(() => solution(5, [5])).toThrow('input should be arrays');
      });
    });
    describe('it checks if the input contains property other than number', () => {
      it('should give the difference regardlece of the type of the values are numbers or not', () => {
        expect(solution([1, 2, 'a'], [4, 3, 'd'])).toEqual([1, 2, 'a']);
      });
    });
    describe('result is defined by the first array', () => {
      it('should return the different values found in the first array', () => {
        expect(solution([1, 2, 'a'], [4, 2, 3, 'b'])).toEqual([1, 'a']);
      });
    });
    describe('can not deplicate repeated values', () => {
      it('should not duplicate values', () => {
        expect(solution([1, 2, 1, 'a'], [4, 2, 'b', 5])).toEqual([1, 'a']);
      });
    });
  });
}
