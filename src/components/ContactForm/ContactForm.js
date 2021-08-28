import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PrimaryButton from '../FormComponents/PrimaryButton';
import NumberFormat from 'react-number-format';

import Input from '../FormComponents/Input';
import FormContainer from '../FormComponents/FormContainer';
import Form from '../FormComponents/Form';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleInputForm = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        toast.error(`There are no type input "${name}"`);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} Contact already exists`);
      resetForm();
      return;
    }

    if (name === '') {
      return toast.error('Please enter contact name');
    }

    if (number === '') {
      return toast.error('Please enter contact number');
    }

    dispatch(contactsOperations.addContact(name, number));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={handleInputForm}
        />

        <NumberFormat
          type="tel"
          name="number"
          label="Phone number 0XX XXX XX XX"
          inputMode="numeric"
          autoComplete="tel"
          value={number}
          customInput={Input}
          format="+38 (###) ### ## ##"
          mask="_"
          onChange={handleInputForm}
        />

        <PrimaryButton
          startIcon={<PersonAddIcon />}
          type="submit"
          color="primary"
        >
          Add contact
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}

export default ContactForm;
