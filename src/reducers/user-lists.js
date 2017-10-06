import { ADD_USER, ADD_USERS, REMOVE_USER } from '../actions/types';
import { combineSelectors } from '../utils/selectors';


const initialState = [];
const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload.id];

    case ADD_USERS:
      return state.concat(Object.keys(action.payload));

    case REMOVE_USER:
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
};

export const lists = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
    case ADD_USERS:
    case REMOVE_USER:
      const { listId } = action;
      return { ...state, [listId]: list(state[listId], action) };

    default:
      return state;
  }
};

export const branch = state => state.users;

const getListId = (state, props) => props.listId;

export const getUserIdsList = combineSelectors(
  [branch, getListId], (state, listId) => state.lists[listId] || initialState
);

export default lists;
