import { Header } from '../components/Header';
import { LogInForm } from '../components/Forms/LogInForm';
import { MainContainer } from '../components/MainContainer';

export default function LogIn() {
  return (
    <>
      <Header />

      <MainContainer title='Log In'>
        <LogInForm />
      </MainContainer>
    </>
  );
}
