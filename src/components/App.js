import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import actions from '../actions';
import { UserList } from './UserList';
import { Loader } from './Loader';
import { SuccessDialog } from './SuccessDialog';
import { ErrorDialog } from './ErrorDialog';

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

const buttons = (onLoadClick, onSaveClick) => (
  <span>
    <ButtonLoad onClick={onLoadClick} />
    <ButtonSave onClick={onSaveClick} />
  </span>
);

export class _SelectorsApp extends React.Component {
  componentWillMount() {
    this.props.loadUsers();
  }

  render() {
    const { loadUsers: handleLoadClick, handleSaveClick, isLoading } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Selectors -- Sample 2"
            iconElementRight={buttons(handleLoadClick, handleSaveClick)}
          />
          <UserList />
          <SuccessDialog />
          <ErrorDialog />
          {isLoading && <Loader />}
        </div>
      </MuiThemeProvider>
    );
  }
}

_SelectorsApp.propTypes = {
  isLoading: PropTypes.bool,
  loadUsers: PropTypes.func,
  handleSaveClick: PropTypes.func,
};

const stateToProps = state => ({
  isLoading: state.loading,
});
const dispatchToProps = {
  loadUsers: actions.loadUsers,
  handleSaveClick: actions.saveUsers,
};

export const SelectorsApp = connect(stateToProps, dispatchToProps)(_SelectorsApp);
