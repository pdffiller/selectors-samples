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

const getLoadButtonText = count => (
  count > 0 ? 'Load more ...' : 'Click here to load users'
);

export const ButtonLoad = ({ count, onClick }) => (
  <ListItem style={{ textAlign: 'center' }} onClick={onClick}>
    { getLoadButtonText(count) }
  </ListItem>
);
ButtonLoad.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};
