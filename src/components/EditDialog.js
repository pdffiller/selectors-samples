import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import actions from '../actions';
import { UserList } from '../reducers';

const styles = {
  ava: {
    float: 'left',
    width: 200,
  },
  fields: {
    float: 'left',
    width: 350,
  },
  img: {
    width: 160,
  }
};

const actionButtons = (onCancelClick, onApplyClick) => [
  <FlatButton secondary label="Cancel" onClick={onCancelClick} />,
  <RaisedButton default primary label="Apply" onClick={onApplyClick} />,
];

const wrapEdit = (edit, field) => (_, value) => edit({ [field]: value });

const _EditDialog = ({ user, edit, commit, cancel }) => user && (
  <Dialog
    title="Edit User Profile"
    actions={actionButtons(cancel, commit)}
    modal
    open
  >
    <div style={styles.ava}>
      <img src={user.avaUrl || 'images/default-avatar.png'} alt="" style={styles.img}/>
    </div>
    <div style={styles.fields}>
      <TextField
        id={`name_${user.id}`}
        value={user.name}
        onChange={wrapEdit(edit, 'name')}
        autoFocus
      /> <br />
      <TextField
        id={`email_${user.id}`}
        value={user.email}
        onChange={wrapEdit(edit, 'email')}
      />
    </div>
  </Dialog>
) || null;
_EditDialog.propTypes = {
  user: PropTypes.object,
  commit: PropTypes.func,
  cancel: PropTypes.func,
};

const stateToProps = state => ({
  user: UserList.getEditingUser(state),
});

const dispatchToProps = {
  edit: actions.editUser,
  commit: actions.commitEdit,
  cancel: actions.stopEditUser,
};

export const EditDialog = connect(stateToProps, dispatchToProps)(_EditDialog);
