import xIsNextReducer from '../../reducers/x-is-next-reducer.js';

describe('xIsNextReducer', () => {
  test('Should return a value of true', () => {
    expect(xIsNextReducer(true, { type: null})).toEqual(true);
  });
});