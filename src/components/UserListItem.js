import React from 'react';
import { PropTypes } from 'prop-types';
import { ListItem } from 'material-ui/List';

import { userAvatar } from './user-avatar';


const propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  avaUrl: PropTypes.string,
};

export const UserListItem = ({ name, email, avaUrl }, index) => (
  <ListItem
    key={index}
    primaryText={name}
    secondaryText={email}
    leftAvatar={userAvatar(avaUrl)}
  />
);
UserListItem.propTypes = propTypes;
