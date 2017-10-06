import { END_LOADING } from '../actions/types';
import { combineSelectors } from '../utils/selectors';

const inc = (state = 0) => state + 1;

const pages = (state = {}, { type, listId }) => {
  if (!listId) return state;
  switch (type) {
    case END_LOADING:
      return { ...state, [listId]: inc(state[listId]) };

    default:
      return state;
  }
};

export const branch = state => state.pages;

export const getLoadedPages = combineSelectors(
  [branch, (_, listId) => listId], (state, listId) => state[listId] || 0
);
export default pages;
