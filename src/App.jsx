import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import EditProfile from './pages/EditProfile';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:postId' element={<Post />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/log-in' element={<LogIn />} />
      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/create-post' element={<CreatePost />} />
    </Routes>
  );
}

export default App;
