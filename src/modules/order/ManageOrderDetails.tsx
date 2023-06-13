import { orderApi } from 'api/orderApi';
import { BookingDetail, Order, StatusBooking } from 'models/order';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { status } from 'utils/constant';

export interface ManageOrderDetailsProps {}

export function ManageOrderDetails(_: ManageOrderDetailsProps) {
  const { slug } = useParams();

  const [booking, setBooking] = useState<Order>();
  const [bookingDetail, setBookingDetail] = useState<BookingDetail[]>([]);
  const [statusBooking, setStatusBooking] = useState<StatusBooking[]>([]);

  const [statusValue, setStatusValue] = useState<string>('');
  const [currentStatus, setCurrentStatus] = useState<string>('Change Status');
  const [isShowStatus, setIsShowStatus] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await orderApi.getOrderById(String(slug));
      setBooking(data.Booking);
      setBookingDetail(data.BookingDetail);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await orderApi.getStatusBooking();
      setStatusBooking(data);
    })();
  }, []);

  const handleUpdateOrder = async () => {
    const response = await orderApi.updateOrder({
      idBooking: slug,
      idStatusBooking: statusValue,
    });
    if (response === status.OK) {
      toast.success(`Update order #${slug} successfully!`);
    } else {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)] pb-[100px]">
      <h1 className="text-2xl font-semibold leading-7">Order Details</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">
            Home {'>'} Order List {'>'} Order Details{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-white rounded-2xl p-6 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-6">
            <h2 className="font-bold text-xl">Order ID: #{slug}</h2>
            <span className="text-xs font-semibold p-2 rounded-lg bg-[rgba(255,_165,_47,_0.8)]">
              {booking?.nameStatus}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9766 10.875C14.9766 11.4834 14.4834 11.9766 13.875 11.9766C13.2666 11.9766 12.7734 11.4834 12.7734 10.875C12.7734 10.2666 13.2666 9.77344 13.875 9.77344C14.4834 9.77344 14.9766 10.2666 14.9766 10.875Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M18.7266 10.875C18.7266 11.4834 18.2334 11.9766 17.625 11.9766C17.0166 11.9766 16.5234 11.4834 16.5234 10.875C16.5234 10.2666 17.0166 9.77344 17.625 9.77344C18.2334 9.77344 18.7266 10.2666 18.7266 10.875Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M14.9766 14.625C14.9766 15.2334 14.4834 15.7266 13.875 15.7266C13.2666 15.7266 12.7734 15.2334 12.7734 14.625C12.7734 14.0166 13.2666 13.5234 13.875 13.5234C14.4834 13.5234 14.9766 14.0166 14.9766 14.625Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M18.7266 14.625C18.7266 15.2334 18.2334 15.7266 17.625 15.7266C17.0166 15.7266 16.5234 15.2334 16.5234 14.625C16.5234 14.0166 17.0166 13.5234 17.625 13.5234C18.2334 13.5234 18.7266 14.0166 18.7266 14.625Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M7.47656 14.625C7.47656 15.2334 6.98338 15.7266 6.375 15.7266C5.76662 15.7266 5.27344 15.2334 5.27344 14.625C5.27344 14.0166 5.76662 13.5234 6.375 13.5234C6.98338 13.5234 7.47656 14.0166 7.47656 14.625Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M11.2266 14.625C11.2266 15.2334 10.7334 15.7266 10.125 15.7266C9.51662 15.7266 9.02344 15.2334 9.02344 14.625C9.02344 14.0166 9.51662 13.5234 10.125 13.5234C10.7334 13.5234 11.2266 14.0166 11.2266 14.625Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M7.47656 18.375C7.47656 18.9834 6.98338 19.4766 6.375 19.4766C5.76662 19.4766 5.27344 18.9834 5.27344 18.375C5.27344 17.7666 5.76662 17.2734 6.375 17.2734C6.98338 17.2734 7.47656 17.7666 7.47656 18.375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M11.2266 18.375C11.2266 18.9834 10.7334 19.4766 10.125 19.4766C9.51662 19.4766 9.02344 18.9834 9.02344 18.375C9.02344 17.7666 9.51662 17.2734 10.125 17.2734C10.7334 17.2734 11.2266 17.7666 11.2266 18.375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M14.9766 18.375C14.9766 18.9834 14.4834 19.4766 13.875 19.4766C13.2666 19.4766 12.7734 18.9834 12.7734 18.375C12.7734 17.7666 13.2666 17.2734 13.875 17.2734C14.4834 17.2734 14.9766 17.7666 14.9766 18.375Z"
                    fill="#232321"
                    stroke="#232321"
                    strokeWidth="0.046875"
                  />
                  <path
                    d="M6 2.25V3.75M18 2.25V3.75"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.75 7.5H2.25"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="font-semibold">{booking?.dateBooking}</p>
            </div>
            <div className="flex gap-5">
              <div
                onClick={() => setIsShowStatus(!isShowStatus)}
                className="relative p-4 flex items-center gap-[80px] bg-[#F4F2F2] rounded-lg cursor-pointer"
              >
                <p className="text-sm font-semibold text-dashboardPrimary">{currentStatus}</p>
                <span>
                  <svg
                    width={14}
                    height={8}
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.375 1.5L7 7.125L12.625 1.5"
                      stroke="#232321"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div
                  className={`${
                    !isShowStatus && 'hidden'
                  } absolute top-full w-full left-0 bg-white rounded-lg cursor-pointer border border-gray4`}
                >
                  {statusBooking?.map((item) => (
                    <div
                      key={item.ID}
                      onClick={() => {
                        setCurrentStatus(item.nameStatus);
                        setStatusValue(item.ID);
                        setIsShowStatus(false);
                      }}
                      className="p-3 hover:bg-[#F4F2F2] rounded-lg"
                    >
                      {item.nameStatus}
                    </div>
                  ))}
                </div>
              </div>
              <div onClick={handleUpdateOrder} className="p-4 bg-[#F4F2F2] rounded-lg">
                <span className="text-sm text-dashboardPrimary font-semibold cursor-pointer">
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 bg-white rounded-2xl flex flex-col gap-4">
        <h2 className="font-bold text-xl border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          Products
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Product ID</p>
            </div>
            <div className="py-4 px-2 w-[400px]">
              <p className="font-bold text-[#232321CC]">Product Name</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Quantiy</p>
            </div>
            <div className="py-4 px-2 w-[250px]">
              <p className="font-bold text-[#232321CC] text-center">Total</p>
            </div>
          </div>
          {bookingDetail?.map((item) => (
            <div key={item.ID} className="flex justify-between items-center">
              <div className="p-2 w-[120px]">
                <p className="font-bold text-dashboardPrimary text-center">#{item.ID}</p>
              </div>
              <div className="p-2 w-[400px] flex gap-3 items-center">
                <img src={`${item.urlImage}`} className="h-[64px] w-[64px] rounded-lg" alt="" />
                <p className="font-bold text-dashboardPrimary">{item.nameProduct}</p>
              </div>
              <div className="p-2 w-[120px]">
                <p className="font-bold text-dashboardPrimary text-center">{item.amount}</p>
              </div>
              <div className="p-2 w-[250px]">
                <p className="font-bold text-dashboardPrimary text-center">
                  {Number(item.totalPriceOfProduct).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-4 pr-10 w-[300px] ml-auto">
          {/* <div className="flex justify-between">
            <p className="text-dashboardPrimary font-semibold">Subtotal</p>
            <p className="text-dashboardPrimary font-semibold">$3,201.6</p>
          </div>
          <div className="flex justify-between">
            <p className="text-dashboardPrimary font-semibold">Tax (20%)</p>
            <p className="text-dashboardPrimary font-semibold">$640.32</p>
          </div>
          <div className="flex justify-between">
            <p className="text-dashboardPrimary font-semibold">Discount</p>
            <p className="text-dashboardPrimary font-semibold">$0</p>
          </div> */}
          <div className="flex gap-3 justify-between">
            <p className="text-dashboardPrimary font-semibold text-2xl">Total</p>
            <p className="text-dashboardPrimary font-semibold text-2xl">
              {Number(booking?.TotalMoneyBill).toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
