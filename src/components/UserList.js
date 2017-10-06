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

const wrap = (handler, listId) => id => () => handler(id, listId);

const userListItem = (onEditClick, onRemoveClick) => (user, index) => (
  UserListItem({ ...user, onEditClick, onRemoveClick }, index)
);

const propTypes = {
  listId: PropTypes.string.isRequired,
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  onBtnLoadClick: PropTypes.func,
  onBtnSaveClick: PropTypes.func,
};

let renderCount = 0;

export const _UserList = ({ listId, title, users, ...handlers }) => {
  console.log(
    `%c Rendering User List (${listId}): ${++renderCount}`,
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
          <ButtonSave onClick={() => handlers.onBtnSaveClick(listId)} />
        </ToolbarGroup>
      </Toolbar>
      <Divider />
      {users.map(
        userListItem(
          wrap(handlers.onBtnEditClick, listId),
          wrap(handlers.onBtnRemoveClick, listId))
      )}
      <Divider />
      <ButtonLoad
        count={users.length}
        onClick={() => handlers.onBtnLoadClick(listId)}
      />
    </List>
  );
};
_UserList.propTypes = propTypes;

const state2Props = () => {
  const getUsers = Users.getUsersCreator();
  return (state, props) => ({
    users: getUsers(state, props),
  });
};

const dispatch2Props = {
  onBtnLoadClick: actions.loadUsers,
  onBtnSaveClick: actions.saveUsers,
  onBtnEditClick: actions.startEdit,
  onBtnRemoveClick: actions.removeUser,
};

export const UserList = connect(state2Props, dispatch2Props)(_UserList);
