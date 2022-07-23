import { flatter } from './alex-deep-flat';
/**
 * I imported a function flatter
 * I am gona test the function flatter
 */

for (const solution of [flatter]) {
  describe(`${solution.name}: flattens the nested array`, () => {
    describe('it tastes if the nested array will be flattened', () => {
      it('should numbers', () => {
        expect(solution([1, 2, [3]])).toStrictEqual([1, 2, 3]);
        expect(solution([1, 2, [[3]]])).toStrictEqual([1, 2, 3]);
        expect(solution([1, 2, [[[3]]]])).toStrictEqual([1, 2, 3]);
        expect(solution([1, 2, [[[[[3]]]]]])).toStrictEqual([1, 2, 3]);
        expect(solution([1, 2, [[[[[[3]]]]]]])).toStrictEqual([1, 2, 3]);
      });
    });
  });
}
