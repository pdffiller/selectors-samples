import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';


export const userAvatar = (src = 'images/default-avatar.png') => (
  <Avatar src={src} backgroundColor="white" />
);

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  avaUrl: PropTypes.string,
};

export const UserListItem = ({ id, name, email, avaUrl }, index, update) => (
  <TableRow key={index}>
    <TableRowColumn style={{ width: 32 }}>
      {userAvatar(avaUrl)}
    </TableRowColumn>
    <TableRowColumn>
      <TextField
        value={name}
        id={`name${id}`}
        onChange={update(id, 'name')}
      />
    </TableRowColumn>
    <TableRowColumn>
      <TextField
        value={email}
        id={`email${id}`}
        onChange={update(id, 'email')}
      />
    </TableRowColumn>
  </TableRow>
);
UserListItem.propTypes = propTypes;
