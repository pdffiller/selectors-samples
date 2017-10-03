import { combineReducers } from 'redux';
import { ADD_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  id: null,
  name: '',
  email: '',
  avaUrl: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
    case ADD_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
    case ADD_USER:
      const { id } = action.payload;
      return { ...state, [id]: user(state[id], action) };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload.id];

    default:
      return state;
  }
};

const users = combineReducers({ byId, allIds });


// Selectors: ------------------------------------------------------------------

const entityById = entities => id => entities[id];
const mapUserIds = (ids, entities) => ids.map(entityById(entities));

export const getUserIds = state => state.users.allIds;
export const getUserEntities = state => state.users.byId;

export const getUsers = state => mapUserIds(
  getUserIds(state), getUserEntities(state)
);
export const getUsersCount = state => getUserIds(state).length;

export default users;
