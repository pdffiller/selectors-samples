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

const styles = {
  paper: {
    float: 'left',
    width: 'calc(50% - 20px)',
    margin: 10,
  },
};

const _SelectorsApp = ({ isLoading }) => (
  <MuiThemeProvider>
    <div style={{ padding: 0 }}>
      <AppBar
        title="Selectors -- Sample 4"
      />
      <Paper zDepth={3} style={styles.paper}>
        <UserList title="Users" listId="firstUserList" />
      </Paper>
      <Paper zDepth={3} style={styles.paper}>
        <UserList title="Users" listId="secondUserList" />
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
