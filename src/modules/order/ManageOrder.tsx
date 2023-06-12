import { orderApi } from 'api/orderApi';
import { Order } from 'models/order';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface ManageOrderProps {}

export function ManageOrder(_: ManageOrderProps) {
  const [orderList, setOrderList] = useState<Order[]>([]);
  console.log('ManageOrder ~ orderList:', orderList);

  useEffect(() => {
    (async () => {
      const data = await orderApi.getAll();
      setOrderList(data);
    })();
  }, []);

  return (
    <div className="p-6 pr-12 flex flex-col gap-6 border-l ">
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
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Order ID</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Date</p>
            </div>
            <div className="py-4 px-2 w-[180px]">
              <p className="font-bold text-[#232321CC] text-center">Customer Name</p>
            </div>
            <div className="py-4 px-2 w-[160px]">
              <p className="font-bold text-[#232321CC] text-center">Status</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Amount</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Actions</p>
            </div>
          </div>
          {orderList?.map((order, index) => {
            // if (index < 5) {
            return (
              <div key={order.ID} className="flex justify-between items-center">
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">#{order.ID}</p>
                </div>
                <div className="py-4 px-2 w-[120px]">
                  <p className="font-bold text-dashboardPrimary text-center">{order.dateBooking}</p>
                </div>
                <div className="py-4 px-2 w-[180px] flex gap-2 items-center justify-center">
                  {/* <img src="/images/dashboard-avatar.png" alt="" /> */}
                  <p className="font-bold text-dashboardPrimary text-center">{order.nameOfBuyer}</p>
                </div>
                <div className="py-4 px-2 w-[160px] flex items-center gap-2">
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
                  <p className="font-bold text-dashboardPrimary text-center">{order.nameStatus}</p>
                </div>
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">
                    {Number(order.TotalMoneyBill).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </p>
                </div>
                <div className="py-4 px-2 w-[120px] flex gap-2 justify-center">
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
                </div>
              </div>
            );
            // }
          })}
        </div>
      </div>
    </div>
  );
}
