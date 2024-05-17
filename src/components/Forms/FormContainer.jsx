export function FormContainer({ children, onSubmit, error }) {
  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
      {children}
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </form>
  );
}
