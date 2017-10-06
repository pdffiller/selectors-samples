import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import { UserList } from './UserList';
import { Loader } from './Loader';
import { SuccessDialog } from './SuccessDialog';
import { ErrorDialog } from './ErrorDialog';
import { EditDialog } from './EditDialog';
import { Loading } from '../reducers';

const propTypes = {
  isLoading: PropTypes.bool,
};

const _SelectorsApp = ({ isLoading }) => (
  <MuiThemeProvider>
    <div style={{ padding: 0 }}>
      <AppBar
        title="Selectors -- Sample 3"
      />
      <Paper zDepth={3}>
        <UserList title="Users" listId="firstUserList" />
      </Paper>
      <SuccessDialog />
      <ErrorDialog />
      <EditDialog />
      {isLoading && <Loader />}
    </div>
  </MuiThemeProvider>
);
_SelectorsApp.propTypes = propTypes;

const stateToProps = state => ({
  isLoading: Loading.isLoading(state),
});

export const SelectorsApp = connect(stateToProps)(_SelectorsApp);
