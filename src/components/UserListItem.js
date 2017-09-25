import React from 'react';
import { PropTypes } from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


export const userAvatar = (src = 'images/default-avatar.png') => (
  <Avatar src={src} backgroundColor="white" />
);

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
