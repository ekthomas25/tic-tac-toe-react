import squaresReducer from '../../reducers/squares-reducer';

describe('squaresReducer', () => {


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(squaresReducer([null, null, null, null, null, null, null, null, null], { type: null })).toEqual([null, null, null, null, null, null, null, null, null]);
  });

  test('Should return an edited state', () => {
    const action = {
      i: 0,
      xIsNext: true,
      type: 'EDIT_TILES',
    };
  
    expect(squaresReducer([null, null, null, null, null, null, null, null, null], action)).toEqual(['L', null, null, null, null, null, null, null, null]);
  });
});
