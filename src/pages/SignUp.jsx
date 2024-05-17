import { Header } from '../components/Header';
import { SignUpForm } from '../components/Forms/SignUpForm';
import { MainContainer } from '../components/MainContainer';

export default function LogIn() {
  return (
    <>
      <Header />

      <MainContainer title='Sign Up'>
        <SignUpForm />
      </MainContainer>
    </>
  );
}
