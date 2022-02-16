export default (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_TURN':
      return !state;
    default:
      return state;
  }
}