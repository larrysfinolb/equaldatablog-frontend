import { useCallback, useState } from 'react';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';
import { FormContainer } from './FormContainer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import axios from '../../utils/axios';

export function EditProfileForm() {
  const { session, logOut } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await axios.patch(
          '/users',
          {
            name: name === '' ? undefined : name,
            password: password === '' ? undefined : password,
          },
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        logOut();
        navigate('/log-in');
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    },
    [logOut, name, password, navigate, session]
  );

  return (
    <FormContainer onSubmit={handleSubmit} error={error}>
      <Input type='text' label='New Name' name='name' value={name} onChange={(event) => setName(event.target.value)} />

      <Input
        type='password'
        label='New Password'
        name='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button type='submit'>Edit!</Button>
      <p className='text-sm text-gray-500'>Warning! Your session will close after editing your profile</p>
    </FormContainer>
  );
}
