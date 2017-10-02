export default (state = Date.now(), action) => {
  switch (action.type) {
    case 'SNAP_TIMESTAMP':
      return action.payload;
    default:
      return state;
  }
};

