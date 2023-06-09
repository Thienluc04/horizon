import { Footer, Header } from 'components/common';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import { role } from 'utils/constant';

export interface MainLayoutProps {}

export function MainLayout({}: MainLayoutProps) {
  useEffect(() => {
    document.title = 'Horizon';
  }, []);

  const navigate = useNavigate();

  const [cookie] = useCookies(['currentUser']);
  const currentUser = cookie.currentUser;

  useEffect(() => {
    if (currentUser && currentUser.idRole !== role.CUSTOMER) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <>
      {(!currentUser || currentUser.idRole === role.CUSTOMER) && (
        <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
}
