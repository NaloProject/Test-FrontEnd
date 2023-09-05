import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='bg-white shadow-md w-10/12 mx-auto rounded-2xl py-14 px-6 md:py-10 md:px-20 mt-20 relative'>
      <Link href='/'>
        <FaChevronLeft className='text-neutral-700 absolute top-2 left-2 text-4xl' />
      </Link>
      {children}
    </div>
  );
}
