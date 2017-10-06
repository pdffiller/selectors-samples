import * as actions from './sync';
import * as api from '../api';
import { Pages, Users, Editing } from '../reducers';

const getUsers = Users.getUsersCreator();

export const saveUsers = listId => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const users = getUsers(getState(), { listId });
  const isSucceeded = await api.saveAllUsers(users);
  dispatch(actions.endLoading());
  dispatch(
    actions.openModal(isSucceeded ? 'success' : 'error', listId)
  );
};

const toLookup = users => users.reduce(
  (entities, entity) => Object.assign(entities, { [entity.id]: entity }), {}
);

export const loadUsers = listId => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const page = Pages.getLoadedPages(getState(), listId) + 1;
  const users = await api.loadAllUsers(page);
  dispatch(actions.addUsers(toLookup(users), listId));
  dispatch(actions.endLoading(listId));
};

export const startEdit = id => (dispatch, getState) => {
  const state = getState();
  const user = Users.getUserEntities(state)[id];
  if (!user) return;
  dispatch(actions.satrtEditUser(user));
};

export const commitEdit = () => (dispatch, getState) => {
  const state = getState();
  const editedUser = Editing.getEditingUser(state);
  if (!editedUser) return;
  const user = Users.getUserById(state, editedUser.id);
  if (editedUser !== user) {
    dispatch(actions.updateUser(editedUser));
  }
  dispatch(actions.stopEditUser());
};
