import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

export const modals = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.payload]: true };

    case CLOSE_MODAL:
      return { ...state, [action.payload]: false };

    default:
      return state;
  }
};
