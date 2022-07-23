import { intersection } from './alex-intersection.js';

for (const solution of [intersection]) {
  describe(`${solution.name}:gives the elements existing in two arrays`, () => {
    describe('it throw error if the input is not array', () => {
      it('should throw an error if the input is not array', () => {
        expect(() => solution([1, 2, 'a'], 5)).toThrow(
          'input should be arrays',
        );
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
    describe('should return the intersecting elements in an array', () => {
      it('should return the intersecting elements the arrays', () => {
        expect(solution([1, 2, 3, 4, 5, 7], [1, 'a', 7])).toEqual([1, 7]);
      });
    });
    describe('it checks if the input contains property other than number', () => {
      it('should give the intersection regardlece of the type of the values are numbers or not', () => {
        expect(solution([1, 2, 'a'], [1, 'a', 7])).toEqual([1, 'a']);
      });
    });
    describe('result is defined by the first array', () => {
      it('should return the intersection values found in the first array', () => {
        expect(solution([1, 2, 'a'], [1, 'a', 2, 6, 6])).toEqual([1, 2, 'a']);
      });
    });
    describe('can not deplicate repeated values', () => {
      it('should not duplicate values', () => {
        expect(solution([1, 2, 3, 3, 3, 4, 5], [1, 3, 5])).toEqual([1, 3, 5]);
      });
    });
  });
}
