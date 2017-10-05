import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import actions from '../actions';
import { UserListItem } from './UserListItem';
import { ButtonSave, ButtonLoad } from './buttons';
import { Users } from '../reducers';

const wrap = handler => id => () => handler(id);

const userListItem = (onEditClick, onRemoveClick) => (user, index) => (
  UserListItem({ ...user, onEditClick, onRemoveClick }, index)
);

const propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  onBtnLoadClick: PropTypes.func,
  onBtnSaveClick: PropTypes.func,
};

let renderCount = 0;

export const _UserList = ({ title, users, ...handlers }) => {
  console.log(
    `%c Rendering User List (${++renderCount})`,
    'background: red; color: white'
  );
  return (
    <List>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={title} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <ButtonSave onClick={handlers.onBtnSaveClick} />
        </ToolbarGroup>
      </Toolbar>
      <Divider />
      {users.map(
        userListItem(wrap(handlers.onBtnEditClick), wrap(handlers.onBtnRemoveClick))
      )}
      <Divider />
      <ButtonLoad onClick={handlers.onBtnLoadClick} />
    </List>
  );
};
_UserList.propTypes = propTypes;

const state2Props = state => ({
  users: Users.getUsers(state),
});

const dispatch2Props = {
  onBtnLoadClick: actions.loadUsers,
  onBtnSaveClick: actions.saveUsers,
  onBtnEditClick: actions.startEdit,
  onBtnRemoveClick: actions.removeUser,
};

export const UserList = connect(state2Props, dispatch2Props)(_UserList);
