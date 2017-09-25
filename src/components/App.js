import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import { UserList } from './UserList';


export const SelectorsApp = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Selectors -- Sample 1" />
      <UserList />
    </div>
  </MuiThemeProvider>
);
