/* import { splitObject } from './alex-split-object.js';

for (const solution of [splitObject]) {
  describe(`${solution.name}: splits object in to arrays with entry name`, () => {
    describe('checks if the input is object or not', () => {
      it('throws error if the input is not object', () => {
        expect(() => solution(['name', 'alex'])).toThrow(
          'input must be an object',
        );
      });
    });
    describe('splits object into arrays containing values', () => {
      it('should return arrays containing info', () => {
        expect(solution({ 'name': 'alex', 'age': 25 })).toEqual(
          ['name', 'alex'],
          ['age', 25]
        );
      });
    });
  });
}
*/
