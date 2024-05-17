import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from './Inputs/Button';

export function Header() {
  const { session, logOut } = useAuth();

  return (
    <header className='flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow'>
      <Link to='/'>
        <h1 className='text-2xl font-bold text-gray-900'>Equaldata Blog</h1>
      </Link>

      <nav>
        <ul className='flex items-center space-x-4'>
          {session ? (
            <>
              <li>
                <Link to='/create-post' className='text-gray-900 hover:text-gray-700'>
                  Create Post
                </Link>
              </li>
              <li>
                <Link to='/edit-profile' className='text-gray-900 hover:text-gray-700'>
                  Edit Profile
                </Link>
              </li>
              <li>
                <Button type='button' onClick={logOut}>
                  Log Out - {session.user.name}
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/log-in' className='text-gray-900 hover:text-gray-700'>
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to='/sign-up'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
