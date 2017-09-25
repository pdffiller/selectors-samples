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


const stateToProps = state => ({
  isLoading: state.loading,
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
    const { isLoading } = this.props;
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
          {isLoading && <Loader />}
        </div>
      </MuiThemeProvider>
    );
  }
}
