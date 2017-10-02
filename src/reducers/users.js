import { ADD_USER } from '../actions/types';

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export const getUserIds = state => state.users.map(u => u.id);
export const getUsers = state => state.users;
export const getUsersCount = state => getUsers(state).length;

export default users;
