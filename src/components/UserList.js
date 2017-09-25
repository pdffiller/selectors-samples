import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { UserListItem } from './UserListItem';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export const _UserList = ({ users }) => (
  <List>
    <Subheader>Users</Subheader>
    { users.map(UserListItem) }
  </List>
);
_UserList.propTypes = propTypes;

const state2Props = state => ({
  users: state.users,
});

export const UserList = connect(state2Props)(_UserList);
