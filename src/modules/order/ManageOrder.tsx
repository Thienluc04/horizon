import { Link } from 'react-router-dom';

export interface ManageOrderProps {}

export function ManageOrder(_: ManageOrderProps) {
  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <h1 className="text-2xl font-semibold leading-7">Manage Orders</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} Order List</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 mb-[100px]">
        <div className="flex justify-between items-center border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          <h2 className="font-bold text-xl">Order list</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="py-4 px-2 w-[180px]">
              <p className="font-bold text-[#232321CC]">Product</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Order ID</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Date</p>
            </div>
            <div className="py-4 px-2 w-[146px]">
              <p className="font-bold text-[#232321CC] text-center">Customer Name</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Status</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Amount</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Actions</p>
            </div>
          </div>
          {new Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
              <div className="py-4 px-2 w-[100px]">
                <p className="font-bold text-dashboardPrimary text-center">#25426</p>
              </div>
              <div className="py-4 px-2 w-[120px]">
                <p className="font-bold text-dashboardPrimary text-center">Jan 8th,2022</p>
              </div>
              <div className="py-4 px-2 w-[146px] flex gap-2 items-center">
                <img src="/images/dashboard-avatar.png" alt="" />
                <p className="font-bold text-dashboardPrimary text-center">Leo Gouse</p>
              </div>
              <div className="py-4 px-2 w-[120px] flex items-center gap-2">
                <span className="w-2 h-2 block">
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.10004" cy="4.5" r="4" fill="#4A69E2" />
                  </svg>
                </span>
                <p className="font-bold text-dashboardPrimary text-center">Delivered</p>
              </div>
              <div className="py-4 px-2 w-[100px]">
                <p className="font-bold text-dashboardPrimary text-center">$200.00</p>
              </div>
              <div className="py-4 px-2 w-[120px] flex gap-2">
                <Link
                  to={`/dashboard/orders/1`}
                  className="py-1 px-2 border border-[#888] rounded-lg"
                >
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <span className="py-1 px-2 border border-[#888] rounded-lg cursor-pointer">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
