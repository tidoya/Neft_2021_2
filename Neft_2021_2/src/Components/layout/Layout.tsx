import { FC, PropsWithChildren } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
