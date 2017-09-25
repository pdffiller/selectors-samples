import { ADD_USER } from '../actions/types';

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default users;
