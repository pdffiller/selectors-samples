import React from 'react';
import Avatar from 'material-ui/Avatar';


export const userAvatar = (src = 'images/default-avatar.png') => (
  <Avatar src={src} backgroundColor="white" />
);
