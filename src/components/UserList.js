import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

import actions from '../actions';
import { UserListItem } from './UserListItem';
import { buttons } from './buttons';
import { Users } from '../reducers';

const styles = {
  container: {}
};

const propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  onBtnLoadClick: PropTypes.func,
  onBtnSaveClick: PropTypes.func,
  updateUser: PropTypes.func,
};

let renderCount = 0;

const toHandler = updateUser => (id, field) => (
  (_, value) => updateUser(id, { [field]: value })
);

export const _UserList = ({ title, users, onBtnLoadClick, onBtnSaveClick, updateUser }) => {
  console.log(
    `%c Rendering User List (${++renderCount})`,
    'background: red; color: white'
  );
  return (
    <div style={styles.container}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={title} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          {buttons(onBtnLoadClick, onBtnSaveClick)}
        </ToolbarGroup>
      </Toolbar>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={{ width: 32 }}>Ava</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>e-mail</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { users.map((u, i) => UserListItem(u, i, toHandler(updateUser))) }
        </TableBody>
      </Table>
    </div>
  );
};
_UserList.propTypes = propTypes;

const state2Props = state => ({
  users: Users.getUsers(state),
});

const dispatch2Props = {
  onBtnLoadClick: actions.loadUsers,
  onBtnSaveClick: actions.saveUsers,
  updateUser: actions.updateUser,
};

export const UserList = connect(state2Props, dispatch2Props)(_UserList);
