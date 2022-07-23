import { flatter } from './alex-deep-flat.js';

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
