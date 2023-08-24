import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'shadow-md text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500  focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-4',
    secondary:
      'inline-block text-sm tracking-wide text-stone-400 transition-colors duration-300  hover:text-stone-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-200  focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 rounded-full px-4 py-2 md:px-6 md:py-4 shadow-md uppercase',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1.5 md:px-3 md:py-2 text-xs',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
