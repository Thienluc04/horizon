import { orderApi } from 'api/orderApi';
import { Order } from 'models/order';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface ManageOrderProps {}

export function ManageOrder(_: ManageOrderProps) {
  const [orderList, setOrderList] = useState<Order[]>([]);

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
            <div className="py-4 px-2 w-[250px]">
              <p className="font-bold text-[#232321CC] text-center">Amount</p>
            </div>
          </div>
          {orderList?.map((order, _) => {
            return (
              <Link
                to={`/dashboard/orders/${order.ID}`}
                key={order.ID}
                className="flex justify-between items-center"
              >
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">#{order.ID}</p>
                </div>
                <div className="py-4 px-2 w-[120px]">
                  <p className="font-bold text-dashboardPrimary text-center">{order.dateBooking}</p>
                </div>
                <div className="py-4 px-2 w-[180px] flex gap-2 items-center justify-center">
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
                <div className="py-4 px-2 w-[250px]">
                  <p className="font-bold text-dashboardPrimary text-center">
                    {Number(order.TotalMoneyBill).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
          {orderList.length <= 0 && (
            <div className="w-10 h-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
          )}
        </div>
      </div>
    </div>
  );
}
