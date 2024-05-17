import { Link } from 'react-router-dom';

export function CardPost({ data }) {
  return (
    <article className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>{data.title}</h2>
      <p className='mb-3 font-normal text-gray-700 text-ellipsis overflow-hidden max-h-36'>{data.article}</p>
      <Link
        to={`/post/${data.id}`}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Read more
      </Link>
    </article>
  );
}
