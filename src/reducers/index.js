import { combineReducers } from 'redux';

import users, * as Users from './users';
import pages, * as Pages from './pages';
import loading, * as Loading from './loading';
import modals, * as Modals from './modals';
import timeStamp from './time-stamp';
import editing, * as Editing from './editing';

const userList = combineReducers({ users, pages, editing });

const branch = state => state.userList;

const UserList = {
  getUsersCreator: () => {
    const getUsers = Users.getUsersCreator();
    return (state, props) => getUsers(branch(state), props);
  },

  getUserIdsList: (state, props) => Users.getUserIdsList(branch(state), props),

  getUserById: (state, id) => Users.getUserById(branch(state), id),

  getUsersCount: (state, props) => Users.getUsersCount(branch(state), props),

  getLoadedPages: (state, props) => Pages.getLoadedPages(branch(state), props),

  getEditingUser: state => Editing.getEditingUser(branch(state)),
};

export default { userList, loading, modals, timeStamp };
export { UserList, Loading, Modals };
