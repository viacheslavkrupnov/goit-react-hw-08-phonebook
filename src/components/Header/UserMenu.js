import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/MeetingRoom';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'baseline',
    color: '#D1E231',
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
    marginRight: 12,
  },
  button: {
    color: '#D1E231',
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'capitalize',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>

      <Button
        type="button"
        style={styles.button}
        endIcon={<PowerSettingsNewIcon fontSize="small" />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span>Sign out</span>
      </Button>
    </div>
  );
}
