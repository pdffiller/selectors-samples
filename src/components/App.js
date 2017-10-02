import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import actions from '../actions';

import { UserList } from './UserList';
import { Loader } from './Loader';
import { SuccessDialog } from './SuccessDialog';
import { ErrorDialog } from './ErrorDialog';
import { Loading } from '../reducers';

const stateToProps = state => ({
  isLoading: Loading.isLoading(state),
});

const dispatchToProps = {
  loadUsers: actions.loadUsers,
};

@connect(stateToProps, dispatchToProps)
export class SelectorsApp extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    loadUsers: PropTypes.func,
  }

  componentWillMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ padding: 0 }}>
          <AppBar
            title="Selectors -- Sample 1"
          />
          <Paper zDepth={3}>
            <UserList title="Users" />
          </Paper>
          <SuccessDialog />
          <ErrorDialog />
          {this.props.isLoading && <Loader />}
        </div>
      </MuiThemeProvider>
    );
  }
}
