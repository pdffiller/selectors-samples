import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';
import { combineSelectors, branchSelector, DONT_MEMORIZE } from '../utils/selectors';
import { getUserIdsList } from './user-lists';

const modals = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.payload]: action.listId };

    case CLOSE_MODAL:
      return { ...state, [action.payload]: null };

    default:
      return state;
  }
};

export const branch = branchSelector(state => state.modals);

const getModalByIdCreator = modalId => combineSelectors(
  [branch], state => state[modalId], DONT_MEMORIZE
);

export const getModalById = (state, { id }) => ( // eslint-disable-line no-return-assign
  getModalById[id] || (getModalById[id] = getModalByIdCreator(id))
)(state);

const getPropsWithListId = combineSelectors(
  [getModalById], state => ({ listId: state })
);

export const isDialogOpen = combineSelectors(
  [getModalById], state => !!state
);

export const getSavedUserIds = combineSelectors(
  [state => state, getPropsWithListId], getUserIdsList
);

export const getSaveFailureUsersCount = combineSelectors(
  [getSavedUserIds], ids => ids.length
);

export default modals;
