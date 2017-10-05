import { combineReducers } from 'redux';
import { ADD_USER, ADD_USERS, UPDATE_USER, REMOVE_USER } from '../actions/types';
import { mapIds, memorize2, combineSelectors } from '../utils/selectors';

const initialState = {
  id: null,
  name: '',
  email: '',
  avaUrl: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
    case UPDATE_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
    case UPDATE_USER:
      const { id } = action.payload;
      return { ...state, [id]: user(state[id], action) };

    case ADD_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
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

const users = combineReducers({ byId, allIds });


// Selectors: ------------------------------------------------------------------

export const getUserIds = state => state.users.allIds;
export const getUserEntities = state => state.users.byId;

export const getUsers = combineSelectors(
  [getUserIds, getUserEntities], memorize2(mapIds)
);
export const getUsersCount = state => getUserIds(state).length;

export default users;
