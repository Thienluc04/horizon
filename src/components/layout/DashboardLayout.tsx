import { Sidebar } from 'components/common';
import { FooterDashboard, HeaderDashboard } from 'modules/dashboard';
import NotFountPage from 'pages/NotFoundPage';
import { useCookies } from 'react-cookie';
import { Outlet } from 'react-router';

export interface DashboardLayoutProps {}

export function DashboardLayout(_: DashboardLayoutProps) {
  const [cookie] = useCookies(['currentUser']);

  const currentUser = cookie.currentUser;

  if (!currentUser) return <NotFountPage></NotFountPage>;

  return (
    <div className="flex font-['Open_Sans']">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <HeaderDashboard></HeaderDashboard>
        <Outlet></Outlet>
        <FooterDashboard></FooterDashboard>
      </div>
    </div>
  );
}
