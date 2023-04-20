import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Menu from './Menu/Menu';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {open && <Menu setOpen={setOpen} />}
      <div className="wrapper">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
