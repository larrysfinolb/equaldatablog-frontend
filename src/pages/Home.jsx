import { useState, useEffect } from 'react';
import { CardPost } from '../components/CardPost';
import axios from '../utils/axios';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  return (
    <>
      <Header />

      <MainContainer title='Home'>
        <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {posts?.map((data) => (
            <CardPost key={data.id} data={data} />
          ))}
        </section>
      </MainContainer>
    </>
  );
}
