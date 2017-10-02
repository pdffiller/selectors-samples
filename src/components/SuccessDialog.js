import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import actions from '../actions';

const actionButtons = onClick => [
  <FlatButton primary label="Close" onClick={onClick} />,
];

const _SuccessDialog = ({ ids, isOpen, handleCloseClick }) => (
  <Dialog
    modal
    title="Success"
    actions={actionButtons(handleCloseClick)}
    open={isOpen}
  >
    The users with id:
    <p>[{ ids.join(', ') }]</p>
    were saved successfully!
  </Dialog>
);
_SuccessDialog.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number),
  isOpen: PropTypes.bool,
  handleCloseClick: PropTypes.func,
};

const stateToProps = state => ({
  ids: state.users.map(user => user.id),
  isOpen: state.modals.success || false,
});

const dispatchToProps = {
  handleCloseClick: actions.closeModal('success'),
};

export const SuccessDialog = connect(stateToProps, dispatchToProps)(_SuccessDialog);
