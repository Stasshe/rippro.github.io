/** @format */

import Link from 'next/link';
import type { FC } from 'react';
import styles from './Head.module.css';
import Navigator from './Navigator';

const Header: FC = () => {
  return (
    <div className={styles.head}>
      <Link href="/" className={styles.logo}>
        <img src="/rippro-rogo.png" alt="rippro-rogo" />
      </Link>
      <Navigator />
    </div>
  );
};

export default Header;
