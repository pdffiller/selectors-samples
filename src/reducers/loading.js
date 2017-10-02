import { START_LOADING, END_LOADING } from '../actions/types';

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

export const isLoading = state => state.loading;

export default loading;
