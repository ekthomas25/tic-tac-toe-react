export default (state = [null, null, null, null, null, null, null, null, null], action) => {
  const {i, xIsNext} = action ;
  switch (action.type) {
    case 'EDIT_TILES':
      let newState = [...state];
      const letter = xIsNext ? "L" : "Z";
      newState[i] = letter;
      return newState;
    default:
      return state;
  }
}