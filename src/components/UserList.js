import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import actions from '../actions';
import { UserListItem } from './UserListItem';
import { buttons } from './buttons';
import { Users } from '../reducers';

const propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  onBtnLoadClick: PropTypes.func,
  onBtnSaveClick: PropTypes.func,
};

let renderCount = 0;

export const _UserList = ({ title, users, onBtnLoadClick, onBtnSaveClick }) => {
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
          {buttons(onBtnLoadClick, onBtnSaveClick)}
        </ToolbarGroup>
      </Toolbar>
      <Divider />
      { users.map(UserListItem) }
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
};

export const UserList = connect(state2Props, dispatch2Props)(_UserList);
