import * as Types from './types';


export const addUser = (user, listId) => ({
  type: Types.ADD_USER, payload: user, listId
});

export const addUsers = (users, listId) => ({
  type: Types.ADD_USERS, payload: users, listId
});

export const updateUser = (user, listId) => ({
  type: Types.UPDATE_USER, payload: user, listId
});

export const removeUser = (index, listId) => ({
  type: Types.REMOVE_USER, payload: index, listId
});

export const startLoading = listId => ({
  type: Types.START_LOADING, listId
});

export const endLoading = listId => ({
  type: Types.END_LOADING, listId
});

export const openModal = (modalId, listId) => ({
  type: Types.OPEN_MODAL, payload: modalId, listId
});

export const closeModal = modalId => () => ({
  type: Types.CLOSE_MODAL, payload: modalId
});

export const satrtEditUser = copyOfUser => ({
  type: Types.START_EDIT_USER, payload: copyOfUser
});

export const stopEditUser = () => ({
  type: Types.START_EDIT_USER, payload: null
});

export const editUser = fields => ({
  type: Types.EDIT_USER, payload: fields
});
