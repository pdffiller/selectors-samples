import { START_EDIT_USER, EDIT_USER } from '../actions/types';

const editing = (state = null, action) => {
  switch (action.type) {
    case START_EDIT_USER:
      return action.payload;

    case EDIT_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};


export const getEditingUser = state => state.editing;
export default editing;
