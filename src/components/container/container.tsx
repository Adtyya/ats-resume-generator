import React from 'react';

export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className='w-full h-full max-w-5xl px-3 lg:px-0 lg:mx-auto'>
      {children}
    </div>
  );
}
