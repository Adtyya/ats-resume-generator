'use client';

import { Typography } from '@material-tailwind/react';

export default function Footer(): JSX.Element {
  return (
    <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center'>
      <Typography color='blue-gray' className='font-normal'>
        &copy; 2023 cv_generator.
      </Typography>
    </footer>
  );
}
