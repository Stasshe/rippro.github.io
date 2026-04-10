import type { FC, ReactNode } from 'react';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';

type LayoutProps = {
  headerChild?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, title, description }) => (
  <div>
    <Header title={title ? title : 'RipPro'} description={description ? description : ''} />
    <div className="mx-auto my-1 w-200 rounded-2.5 bg-white shadow-[0_10px_25px_0_rgba(0,0,0,0.5)]">
      <Head />
      <div className="m-2">{children}</div>
      <Footer />
    </div>
  </div>
);
