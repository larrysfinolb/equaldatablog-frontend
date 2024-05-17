import { Header } from '../components/Header';
import { CreatePostForm } from '../components/Forms/CreatePostForm';
import { MainContainer } from '../components/MainContainer';

export default function LogIn() {
  return (
    <>
      <Header />

      <MainContainer title='Create Post'>
        <CreatePostForm />
      </MainContainer>
    </>
  );
}
