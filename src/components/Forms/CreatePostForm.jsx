import { useCallback, useState } from 'react';
import { Input } from '../Inputs/Input';
import { Button } from '../Inputs/Button';
import { FormContainer } from './FormContainer';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function CreatePostForm() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [error, setError] = useState(null);

  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const {data} = await axios.post(
          '/posts',
          { title, article },
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        navigate(`/post/${data.id}`);
      } catch (error) {
        setError(error.message);
      }
    },
    [navigate, title, article, session]
  );

  return (
    <FormContainer onSubmit={handleSubmit} error={error}>
      <Input
        type='text'
        label='Title'
        name='title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <div className='mb-4'>
        <label htmlFor='article' className='class="block text-gray-700 text-sm font-bold mb-2'>
          Article
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full h-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='article'
          required
          value={article}
          onChange={(event) => setArticle(event.target.value)}
        />
      </div>

      <Button type='submit'>Create!</Button>
    </FormContainer>
  );
}
