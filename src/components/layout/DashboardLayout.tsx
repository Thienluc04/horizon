import { Sidebar } from 'components/common';
import { FooterDashboard, HeaderDashboard } from 'modules/dashboard';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router';
import { role } from 'utils/constant';

export interface DashboardLayoutProps {}

export function DashboardLayout(_: DashboardLayoutProps) {
  const [cookie] = useCookies(['currentUser']);

  const currentUser = cookie.currentUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.idRole !== role.ADMIN && currentUser.idRole !== role.OPERATOR) {
      navigate('/');
    } else if (!currentUser) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    document.title = 'Manage Page';
  }, []);

  return (
    <>
      {currentUser && currentUser.idRole !== role.CUSTOMER && (
        <div className="flex font-['Open_Sans']">
          <Sidebar></Sidebar>
          <div className="flex-1">
            <div className="flex flex-col min-h-[100vh]">
              <HeaderDashboard></HeaderDashboard>
              <div className="flex-1 bg-[#E7E7E3] border-l border-l-[rgba(35,_35,_33,_0.2)]">
                <Outlet></Outlet>
              </div>
              <FooterDashboard></FooterDashboard>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
