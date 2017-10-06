import { START_LOADING, END_LOADING } from '../actions/types';
import { branchSelector } from '../utils/selectors';

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;

    case END_LOADING:
      return false;

    default:
      return state;
  }
};

export const branch = branchSelector(state => state.loading);

export const isLoading = branch;

export default loading;
