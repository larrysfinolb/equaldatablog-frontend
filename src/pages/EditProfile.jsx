import { Header } from '../components/Header';
import { EditProfileForm } from '../components/Forms/EditProfileForm';
import { MainContainer } from '../components/MainContainer';

export default function LogIn() {
  return (
    <>
      <Header />

      <MainContainer title='Edit Profile'>
        <EditProfileForm />
      </MainContainer>
    </>
  );
}
