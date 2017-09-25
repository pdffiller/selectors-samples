import React from 'react';
import { PropTypes } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';


export const ButtonSave = ({ onClick }) => (
  <FlatButton label="Save" onClick={onClick} />
);
ButtonSave.propTypes = {
  onClick: PropTypes.func,
};

export const ButtonLoad = ({ onClick }) => (
  <ListItem style={{ textAlign: 'center' }} onClick={onClick}>
    Load more ...
  </ListItem>
);
ButtonLoad.propTypes = {
  onClick: PropTypes.func,
};
