import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import actions from '../actions';
import { Modals, Users } from '../reducers';

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

const stateToProps = state => ({
  count: Users.getUsersCount(state),
  isOpen: Modals.isDialogOpen(state, { id: 'error' }),
});

const dispatchToProps = {
  handleCloseClick: actions.closeModal('error'),
};

export const ErrorDialog = connect(stateToProps, dispatchToProps)(_ErrorDialog);
