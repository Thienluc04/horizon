import { Link } from 'react-router-dom';

export interface FooterDashboardProps {}

export function FooterDashboard(_: FooterDashboardProps) {
  return (
    <div className="bg-[#E7E7E3] flex justify-between pt-4 border-t border-t-[rgba(35,_35,_33,_0.2)] border-l border-l-[rgba(35,_35,_33,_0.2)] p-6">
      <p className="text-dashboardPrimary text-sm font-semibold">© 2023 - kicks Dashboard</p>
      <div className="flex gap-4">
        <Link to={''} className="font-semibold text-dashboardPrimary cursor-pointer">
          About
        </Link>
        <Link to={''} className="font-semibold text-dashboardPrimary cursor-pointer">
          Careers
        </Link>
        <Link to={''} className="font-semibold text-dashboardPrimary cursor-pointer">
          Policy
        </Link>
        <Link to={''} className="font-semibold text-dashboardPrimary cursor-pointer">
          Contact
        </Link>
      </div>
    </div>
  );
}
