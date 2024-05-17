export function MainContainer({ children, title }) {
  return (
    <main className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-semibold mb-8'>{title}</h2>
      {children}
    </main>
  );
}
