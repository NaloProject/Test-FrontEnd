interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='bg-white shadow-md w-10/12 mx-auto rounded-2xl py-6 px-6 md:py-10 md:px-20 mt-20'>
      {children}
    </div>
  );
}
