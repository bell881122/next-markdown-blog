import Link from 'next/link';

export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='border-b-2 mb-4 px-3 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a className='mx-auto text-3xl font-bold'>笑笑的程式人生</a>
          </Link>
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-gray-200 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <span>&copy; {year}
            <Link href='https://github.com/bell881122'>
              <a className='mx-1 text-gray-400'>Emi Chang</a>
            </Link>
            <span className='mx-3'>|</span>
          </span>
          <small className='mx-1 my-auto'>Theme by
            <Link href='https://github.com/rebelchris/next-markdown-blog'>
              <a className='mx-1 text-gray-400'>rebelchris</a>
            </Link>
          </small>
        </div>
      </footer>
    </div>
  );
}
