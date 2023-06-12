import { useAppDispatch } from 'app/hooks';
import { authAction } from 'features/auth/authSlice';
import { useCookies } from 'react-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { role } from 'utils/constant';

export interface SidebarProps {}

export function Sidebar(_: SidebarProps) {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const [cookies, , removeCookies] = useCookies(['currentUser']);

  const currentUser = cookies.currentUser;

  const navigate = useNavigate();

  const handleLogOut = async () => {
    dispatch(authAction.authLogOut);
    removeCookies('currentUser');
    navigate('/');
    document.location.reload();
  };

  const listPath = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/dashboard',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: 'All Products',
      path: '/dashboard/products',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Order List',
      path: '/dashboard/orders',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Manage Users',
      path: '/dashboard/users',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Other',
      path: '/dashboard/other',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Logout',
      onClick: () => {
        handleLogOut();
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-w-[300px] h-full py-8">
      <Link to={'/dashboard'} className="block mb-12">
        <img className="mx-auto" src="/images/logo-dashboard.png" alt="dashboard-logo" />
      </Link>
      <div className="flex flex-col gap-4 max-w-[212px] mx-auto">
        {listPath.map((item) => {
          if (!item.path) {
            return (
              <div
                key={item.id}
                onClick={item.onClick}
                className={`h-12 ${
                  pathname === item.path ? 'bg-dashboardSecondary' : ''
                } rounded-lg flex gap-4 justify-start items-center pl-[18px] cursor-pointer`}
              >
                <span
                  className={`${pathname === item.path ? 'text-white' : 'text-dashboardPrimary'}`}
                >
                  {item.icon}
                </span>
                <p
                  className={`uppercase text-sm ${
                    pathname === item.path ? 'text-white' : 'text-[#232321]'
                  } font-medium`}
                >
                  {item.name}
                </p>
              </div>
            );
          } else if (item.id === 4) {
            if (currentUser.idRole !== role.ADMIN) return;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`h-12 ${
                  pathname === item.path ? 'bg-dashboardSecondary' : ''
                } rounded-lg flex gap-4 justify-start items-center pl-[18px]`}
              >
                <span
                  className={`${pathname === item.path ? 'text-white' : 'text-dashboardPrimary'}`}
                >
                  {item.icon}
                </span>
                <p
                  className={`uppercase text-sm ${
                    pathname === item.path ? 'text-white' : 'text-[#232321]'
                  } font-medium`}
                >
                  {item.name}
                </p>
              </Link>
            );
          } else {
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`h-12 ${
                  pathname === item.path ? 'bg-dashboardSecondary' : ''
                } rounded-lg flex gap-4 justify-start items-center pl-[18px]`}
              >
                <span
                  className={`${pathname === item.path ? 'text-white' : 'text-dashboardPrimary'}`}
                >
                  {item.icon}
                </span>
                <p
                  className={`uppercase text-sm ${
                    pathname === item.path ? 'text-white' : 'text-[#232321]'
                  } font-medium`}
                >
                  {item.name}
                </p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
