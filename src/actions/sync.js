import * as Types from './types';


export const addUser = user => ({
  type: Types.ADD_USER, payload: user
});

export const startLoading = () => ({
  type: Types.START_LOADING
});

export const endLoading = () => ({
  type: Types.END_LOADING
});

export const openModal = modalId => ({
  type: Types.OPEN_MODAL, payload: modalId
});

export const closeModal = modalId => () => ({
  type: Types.CLOSE_MODAL, payload: modalId
});
