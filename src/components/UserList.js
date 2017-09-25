import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import actions from '../actions';
import { UserListItem } from './UserListItem';
import { ButtonSave, ButtonLoad } from './buttons';

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
          <ButtonSave onClick={onBtnSaveClick} />
        </ToolbarGroup>
      </Toolbar>
      <Divider />
      { users.map(UserListItem) }
      <Divider />
      <ButtonLoad onClick={onBtnLoadClick} />
    </List>
  );
};
_UserList.propTypes = propTypes;

const state2Props = state => ({
  users: state.users,
});

const dispatch2Props = {
  onBtnLoadClick: actions.loadUsers,
  onBtnSaveClick: actions.saveUsers,
};

export const UserList = connect(state2Props, dispatch2Props)(_UserList);
