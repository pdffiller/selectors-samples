import actions from './registry';
import * as api from '../api';

export const saveUsers = () => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const users = getState().users.map(user => user.id);
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
