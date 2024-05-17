import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';

export default function LogIn() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await axios.get(`/posts/${postId}`);
        setPost(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPost();
  }, []);

  return (
    <>
      <Header />

      <MainContainer title={post ? post.title : 'Loading...'}>
        <article className='p-6 bg-white border border-gray-200 rounded-lg shadow'>
          <p className='font-normal text-gray-700'>{post ? post.article : 'Loading...'}</p>
          <span className='inline-block text-sm text-gray-500 mt-6'>
            {post ? `Author: ${post.userName}` : 'Loading...'}
          </span>
        </article>
      </MainContainer>
    </>
  );
}
