import { splitObject } from './split-object.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  it('key/value object', () => {
    expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);
  });
  it('when no argument passed the default value should be applied', () => {
    expect(splitObject()).toEqual([]);
  });
});
describe('No side-effects', () => {
  it('The argument object is not modified', () => {
    const argObject = { a: 1, b: 2, c: 3 };
    expect(splitObject(argObject) === argObject).toEqual(false);
  });
});
describe('When argument is not an object an error should raise', () => {
  it('the argument is a string', () => {
    const argObject = '{ a: 1, b: 2, c: 3 }';
    expect(() => splitObject(argObject)).toThrow(
      'argument should be an object',
    );
  });
});
