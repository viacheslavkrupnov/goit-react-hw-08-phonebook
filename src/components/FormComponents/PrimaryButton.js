import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #71BC78 30%, #1DACD6 90%)',
    boxShadow: '0 3px 5px 2px rgba(137, 196, 244, 1)',
  },
}));

const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      // color="secondary"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
