export function Input({ type, label, name, value, onChange, required }) {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='class="block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type={type}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
