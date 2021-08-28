import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #71BC78 30%, #1DACD6 90%)',
    boxShadow: '0 3px 5px 2px rgba(137, 196, 244, 1)',
    color: 'white',
  },
}));

export default function ContactList() {
  const styles = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  if (contacts.length === 0) return null;
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <div>
            <span className={s.listItemText}>{name}:</span>
            <span className={s.listItemText}>{number}</span>
          </div>
          <div>
            <Button
              startIcon={<DeleteIcon fontSize="small" color="inherit" />}
              className={styles.root}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
