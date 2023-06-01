export interface HeaderDashboardProps {}

export function HeaderDashboard(_: HeaderDashboardProps) {
  return (
    <div className="py-8 px-[60px] border-l border-l-[rgba(35,_35,_33,_0.2)] border-b border-b-[rgba(35,_35,_33,_0.2)]">
      <div className=" flex items-center justify-end gap-10 ">
        <div className="px-4 py-3 border border-[#1C1C1A] flex items-center gap-1 rounded-lg">
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}
