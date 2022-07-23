import { sortNumbers } from './alex-sort-numbers.js';

for (const solution of [sortNumbers]) {
  describe(`${solution.name}:sorts arrays in acsending order`, () => {
    describe('checks the array is numbers', () => {
      it('throws error if the array is not all numbers', () => {
        expect(() => solution([5, 3, 8, 'a'])).toThrow(
          'all elements must be numbers',
        );
      });
    });
    describe('sorts numbers in acsending order', () => {
      it('sorts integer in ascending order', () => {
        expect(solution([1, 8, 9, 0, -4, -7, -2])).toEqual([
          -7,
          -4,
          -2,
          0,
          1,
          8,
          9,
        ]);
      });
      it('sorts whole numbers in acending order', () => {
        expect(solution([5, 4, 8, 1, 900, 0])).toEqual([0, 1, 4, 5, 8, 900]);
      });
      it('sorts decimals in acsending order', () => {
        expect(solution([4.5, 6.9, 2.2, 0.7, -1.9, -7.6, -8.7])).toEqual([
          -8.7,
          -7.6,
          -1.9,
          0.7,
          2.2,
          4.5,
          6.9,
        ]);
      });
      it('sorts mixed numbers in acsending order', () => {
        expect(
          solution([56, 4, 4.5, 6.9, 2.2, 0.7, -1.9, -7.6, -8.7, -3, -22]),
        ).toEqual([-22, -8.7, -7.6, -3, -1.9, 0.7, 2.2, 4, 4.5, 6.9, 56]);
      });
    });
    describe('has no side-effects', () => {
      it('returns a new array', () => {
        const arg = [];
        const returned = sortNumbers(arg);
        const areDifferent = arg !== returned;
        expect(areDifferent).toEqual(true);
      });
      it('does not modify the argument', () => {
        const arg = [3, 2, 1];
        sortNumbers(arg);
        expect(arg).toEqual([3, 2, 1]);
      });
    });
  });
}
