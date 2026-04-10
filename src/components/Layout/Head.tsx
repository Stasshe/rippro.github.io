/** @format */

import Link from 'next/link';
import type { FC } from 'react';
import Navigator from './Navigator';

const Header: FC = () => {
  return (
    <div className="mx-4 my-4 flex justify-between border-b-2 border-[#700] py-0.5">
      <Link href="/" className="no-underline visited:no-underline hover:text-black hover:underline">
        <img className="mx-1.25 mb-1.25 mt-2.5 w-50 align-middle" src="/rippro-rogo.png" alt="rippro-rogo" />
      </Link>
      <Navigator />
    </div>
  );
};

export default Header;
