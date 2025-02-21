import React from 'react';
import Footer from './footer.tsx';
import ScrollToHashElement from './hash-scroll.tsx';
import Header from './header.tsx';

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Layout = ({
  children,
}: LayoutProps,) => <>
  <Header window={window || {}} />
  {children}
  <Footer window={window || {}} />
  <ScrollToHashElement />
</>;
export default Layout;
