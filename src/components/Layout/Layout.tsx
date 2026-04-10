import type { FC, ReactNode } from 'react';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';

import styles from './Layout.module.css';

type LayoutProps = {
  headerChild?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, title, description }) => (
  <div className={styles.body}>
    <Header title={title ? title : 'RipPro'} description={description ? description : ''} />
    <div className={styles.main}>
      <Head />
      <div className={styles.article}>{children}</div>
      <Footer />
    </div>
  </div>
);
