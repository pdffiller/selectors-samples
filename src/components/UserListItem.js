import React from 'react';
import { PropTypes } from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';


const removeIconButton = onClick => (
  <IconButton touch tooltipPosition="bottom-left" onClick={onClick}>
    <CloseIcon color={grey400} />
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
    onClick={handlers.onEditClick(id)}
    rightIconButton={removeIconButton(handlers.onRemoveClick(index))}
  />
);
UserListItem.propTypes = propTypes;
