import * as actions from './sync';
import * as api from '../api';
import { Pages, Users, Editing } from '../reducers';


export const saveUsers = () => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const users = Users.getUsers(getState());
  const isSucceeded = await api.saveAllUsers(users);
  dispatch(actions.endLoading());
  dispatch(
    actions.openModal(isSucceeded ? 'success' : 'error')
  );
};

const toLookup = users => users.reduce(
  (entities, entity) => Object.assign(entities, { [entity.id]: entity }), {}
);

export const loadUsers = () => async (dispatch, getState) => {
  dispatch(actions.startLoading());
  const page = Pages.getLoadedPages(getState()) + 1;
  const users = await api.loadAllUsers(page);
  dispatch(actions.addUsers(toLookup(users)));
  dispatch(actions.endLoading());
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
  dispatch(actions.updateUser(editedUser));
};
