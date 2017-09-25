import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import actions from '../actions';

const actionButtons = onClick => [
  <FlatButton primary label="Close" onClick={onClick} />,
];

const _SuccessDialog = ({ count, isOpen, handleCloseClick }) => (
  <Dialog
    modal
    title="Success"
    actions={actionButtons(handleCloseClick)}
    open={isOpen}
  >
  The { count } users were saved successfully!
  </Dialog>
);
_SuccessDialog.propTypes = {
  count: PropTypes.number,
  isOpen: PropTypes.bool,
  handleCloseClick: PropTypes.func,
};

const stateToProps = state => ({
  count: state.users.length,
  isOpen: state.modals.success || false,
});

const dispatchToProps = {
  handleCloseClick: actions.closeModal('success'),
};

export const SuccessDialog = connect(stateToProps, dispatchToProps)(_SuccessDialog);
