import xIsNextReducer from '../../reducers/x-is-next-reducer.js';

describe('xIsNextReducer', () => {
  test('Should return a default value of state when there is no action', () => {
    expect(xIsNextReducer(true, { type: null})).toEqual(true);
  });

  test('Should toggle between true and false', () => {
    expect(xIsNextReducer(true, { type: 'CHANGE_TURN' })).toEqual(false);
  })
});