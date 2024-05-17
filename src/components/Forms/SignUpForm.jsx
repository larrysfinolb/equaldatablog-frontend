import { useCallback, useState } from 'react';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';
import { useAuth } from '../../hooks/useAuth';
import { FormContainer } from './FormContainer';
import { useNavigate } from 'react-router-dom';

export function SignUpForm() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await signUp({ name, email, password });
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
    },
    [name, email, password, signUp, navigate]
  );

  return (
    <FormContainer onSubmit={handleSubmit} error={error}>
      <Input
        type='text'
        label='Name'
        name='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

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

      <Button type='submit'>Sign Up</Button>
    </FormContainer>
  );
}
