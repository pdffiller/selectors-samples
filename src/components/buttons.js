import React from 'react';
import { PropTypes } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';


const ButtonSave = ({ onClick }) => (
  <FlatButton label="Save" onClick={onClick} />
);
ButtonSave.propTypes = {
  onClick: PropTypes.func,
};

const ButtonLoad = ({ onClick }) => (
  <FlatButton label="Load" onClick={onClick} />
);
ButtonLoad.propTypes = {
  onClick: PropTypes.func,
};

export const buttons = (onLoadClick, onSaveClick) => (
  <span>
    <ButtonLoad onClick={onLoadClick} />
    <ButtonSave onClick={onSaveClick} />
  </span>
);
