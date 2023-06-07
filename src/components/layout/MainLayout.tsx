import { Footer, Header } from 'components/common';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export interface MainLayoutProps {}

export function MainLayout({}: MainLayoutProps) {
  useEffect(() => {
    document.title = 'Horizon';
  }, []);
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
