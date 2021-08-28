import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from '../../redux/auth';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Navigation />
          </Grid>

          {isLoggedIn ? (
            <Grid item>
              <UserMenu />
            </Grid>
          ) : (
            <Grid item>
              <AuthNav />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
