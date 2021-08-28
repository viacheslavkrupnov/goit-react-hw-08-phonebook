import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import Form from '../components/FormComponents/Form';
import FormContainer from '../components/FormComponents/FormContainer';
import Input from '../components/FormComponents/Input';
import PrimaryButton from '../components/FormComponents/PrimaryButton';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />

        <PrimaryButton type="submit" color="primary">
          Sign up
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
