import { useCallback, useState } from 'react';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';
import { useAuth } from '../../hooks/useAuth';
import { FormContainer } from './FormContainer';
import { useNavigate } from 'react-router-dom';

export function LogInForm() {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const [error, setError] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await logIn({ email, password });
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
    },
    [email, password, logIn, navigate]
  );

  return (
    <FormContainer onSubmit={handleSubmit} error={error}>
      <Input
        type='email'
        label='Email'
        name='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <Input
        type='password'
        label='Password'
        name='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <Button type='submit'>Log In</Button>
    </FormContainer>
  );
}
