import actions from './registry';
import * as Types from './types';
import * as Thunks from './thunks';

let _id = 0;

export default Object.assign(actions, {
  addUser: user => ({
    type: Types.ADD_USER,
    payload: { ...user, id: ++_id }
  }),

  updateUser: (id, fields) => ({
    type: Types.UPDATE_USER, payload: { id, ...fields },
  }),

  startLoading: () => ({ type: Types.START_LOADING }),

  endLoading: () => ({ type: Types.END_LOADING }),

  openModal: modalId => ({ type: Types.OPEN_MODAL, payload: modalId }),

  closeModal: modalId => () => ({ type: Types.CLOSE_MODAL, payload: modalId }),

  ...Thunks,
});
