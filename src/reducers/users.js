import { combineReducers } from 'redux';
import { ADD_USER, ADD_USERS, UPDATE_USER } from '../actions/types';
import { mapIds, combineSelectors, branchSelector, DONT_MEMORIZE } from '../utils/selectors';
import lists, * as Lists from './user-lists';

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


const users = combineReducers({ byId, lists });


// Selectors: ------------------------------------------------------------------

export const branch = branchSelector(state => state.users);
Lists.branch.assign(branch);

export const getUserEntities = combineSelectors(
  [branch], state => state.byId, DONT_MEMORIZE
);

export const getUserById = combineSelectors(
  [getUserEntities, (_, id) => id], (state, id) => state[id]
);

export const getUsersCreator = () => combineSelectors(
  [Lists.getUserIdsList, getUserEntities], mapIds,
);

const storedGetUsers = ({ listId }) => ( // eslint-disable-line no-return-assign
  storedGetUsers[listId] || (storedGetUsers[listId] = getUsersCreator())
);

export const getUsers = (state, props) => storedGetUsers(props)(state, props);

export const getUsersCount = combineSelectors(
  [Lists.getUserIdsList], list => list.length
);

export default users;
