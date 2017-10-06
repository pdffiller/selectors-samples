import { combineReducers } from 'redux';
import { branchSelector } from '../utils/selectors';

import users, * as Users from './users';
import pages, * as Pages from './pages';
import loading, * as Loading from './loading';
import modals, * as Modals from './modals';
import timeStamp from './time-stamp';
import editing, * as Editing from './editing';

const userList = combineReducers({ users, pages, editing });
const branch = branchSelector(state => state.userList);

Users.branch.attachTo(branch);
Pages.branch.attachTo(branch);
Editing.branch.attachTo(branch);

export default { userList, loading, modals, timeStamp };
export { Users, Pages, Loading, Modals, Editing };
