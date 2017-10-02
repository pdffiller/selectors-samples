import actions from './registry';
import * as api from '../api';

import { Users } from '../reducers';

export const saveUsers = () => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const users = Users.getUserIds(getState());
  const isSucceeded = await api.saveAllUsers(users);
  dispatch(actions.endLoading());
  dispatch(
    actions.openModal(isSucceeded ? 'success' : 'error')
  );
};

const addUser = dispatch => user => dispatch(
  actions.addUser(user)
);

export const loadUsers = () => async (dispatch) => {
  dispatch(actions.startLoading());
  const users = await api.loadAllUsers();
  users.forEach(addUser(dispatch));
  dispatch(actions.endLoading());
};
