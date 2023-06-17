import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface IMainLayoutProps {
  children: React.ReactNode | any,
}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <>
      <main className="main grid">
        <Header />
        <>{children}</>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
