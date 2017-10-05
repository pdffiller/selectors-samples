import React from 'react';
import { PropTypes } from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconButtonElement = onClick => (
  <IconButton
    touch
    tooltip="Edit"
    tooltipPosition="bottom-left"
    onClick={onClick}
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const userAvatar = (src = 'images/default-avatar.png') => (
  <Avatar src={src} backgroundColor="white" />
);

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  avaUrl: PropTypes.string,
  onEditClick: PropTypes.func,
};

export const UserListItem = ({ id, name, email, avaUrl, ...handlers }, index) => (
  <ListItem
    key={index}
    primaryText={name}
    secondaryText={email}
    leftAvatar={userAvatar(avaUrl)}
    rightIconButton={iconButtonElement(handlers.onEditClick(id))}
  />
);
UserListItem.propTypes = propTypes;
