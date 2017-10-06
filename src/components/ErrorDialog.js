import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import actions from '../actions';
import { UserList, Modals } from '../reducers';

const actionButtons = onClick => [
  <FlatButton primary label="Close" onClick={onClick} />,
];

const _ErrorDialog = ({ count, isOpen, handleCloseClick }) => (
  <Dialog
    modal
    title="Error"
    actions={actionButtons(handleCloseClick)}
    open={isOpen}
  >
    You could save only odd number of users.
    <p>The { count } is an even number</p>
  </Dialog>
);
_ErrorDialog.propTypes = {
  count: PropTypes.number,
  isOpen: PropTypes.bool,
  handleCloseClick: PropTypes.func,
};

const propsWithId = { id: 'error' };

const stateToProps = state => ({
  count: UserList.getUserIdsList(
    state, Modals.getPropsWithListId(state, propsWithId)
  ).length,
  isOpen: Modals.isDialogOpen(state, propsWithId),
});

const dispatchToProps = {
  handleCloseClick: actions.closeModal('error'),
};

export const ErrorDialog = connect(stateToProps, dispatchToProps)(_ErrorDialog);
