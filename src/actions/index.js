import actions from './registry';
import * as Types from './types';
import * as Thunks from './thunks';


export default Object.assign(actions, {
  addUser: user => ({ type: Types.ADD_USER, payload: user }),
  startLoading: () => ({ type: Types.START_LOADING }),
  endLoading: () => ({ type: Types.END_LOADING }),
  openModal: modalId => ({ type: Types.OPEN_MODAL, payload: modalId }),
  closeModal: modalId => () => ({ type: Types.CLOSE_MODAL, payload: modalId }),
  ...Thunks,
});
