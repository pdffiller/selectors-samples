import { START_EDIT_USER, EDIT_USER } from '../actions/types';
import { branchSelector } from '../utils/selectors';

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

export const branch = branchSelector(state => state.editing);
export const getEditingUser = branch;
export default editing;
