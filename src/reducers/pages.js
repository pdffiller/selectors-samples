import { END_LOADING } from '../actions/types';

const pages = (state = 0, action) => {
  switch (action.type) {
    case END_LOADING:
      return state + 1;

    default:
      return state;
  }
};

export default pages;
