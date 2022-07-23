import { intersectArray} from './intersection.js';

// tests

for (const solution of [intersectArray]) {
  describe(`${solution.name}: Returning duplicated values`, () => {
    describe('whole numbers', () => {
      it('', () => {
        expect(solution([1, 2, 3, 4, 5], [1, 6, 3, 7, 5])).toEqual([1, 3, 5]);
      });
      it('', () => {
        expect(solution([23, 43, 63, 0], [2, 56, 21, 23, 0])).toEqual([23, 0]);
      });
    });

    describe('decimal numbers', () => {
      it('', () => {
        expect(
          solution([0.1, 0.2, 0.3, 0.4, 0.5], [0.1, 0.6, 0.3, 0.7, 0.5]),
        ).toEqual([0.1, 0.3, 0.5]);
      });
      it('', () => {
        expect(
          solution([1.23, 2.43, 3.63, 4.1], [1.2, 5.6, 2.43, 1.23, 10.2]),
        ).toEqual([1.23, 2.43]);
      });
    });

    describe('negative numbers', () => {
      it('', () => {
        expect(
          solution(
            [-0.1, -0.2, -0.3, -0.4, -0.5],
            [-0.1, -0.6, -0.3, -0.7, -0.5],
          ),
        ).toEqual([-0.1, -0.3, -0.5]);
      });
    });

    describe('negative and positive numbers', () => {
      it('', () => {
        expect(solution([-1, -2, 3, 4, -5], [-1, -0.6, 3, 7, -5])).toEqual([
          -1, 3, -5,
        ]);
      });
      it('', () => {
        expect(solution([1, -2, 3, 4], [1, 5, -2, 1, 10])).toEqual([1, -2]);
      });
    });
    /// side effects
    describe('has no side-effects', () => {
      it('returns a new array', () => {
        const noSideEffect = [];
        const returned = intersectArray(noSideEffect);
        const areDifferent = noSideEffect !== returned;
        expect(areDifferent).toEqual(true);
      });
      it('does not modify the argument', () => {
        const noSideEffect = [3, 2, 1];
        intersectArray(noSideEffect);
        expect(noSideEffect).toEqual([3, 2, 1]);
      });
    });

    describe('decimal and whole numbers', () => {
      it('', () => {
        expect(solution([1, 2, 0.3, 0.4, 5], [1, 0.6, 0.3, 0.7, 5])).toEqual([
          1, 0.3, 5,
        ]);
      });
      it('', () => {
        expect(
          solution([23, 2.43, 3.63, 4.1], [1.2, 5.6, 2.43, 23, 10.2]),
        ).toEqual([23, 2.43]);
      });
    });
  });
}