import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export interface ManageOrderDetailsProps {}

export function ManageOrderDetails(_: ManageOrderDetailsProps) {
  const { slug } = useParams();
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
              Pending
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
              <p className="font-semibold">Feb 16,2022 - Feb 20,2022</p>
            </div>
            <div className="flex gap-5">
              <div className="p-4 flex items-center gap-[80px] bg-[#F4F2F2] rounded-lg">
                <p className="text-sm font-semibold text-dashboardPrimary">Change Satus</p>
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
              </div>
              <div className="p-4 bg-[#F4F2F2] rounded-lg">
                <span>
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 2.25C5 1.65326 5.23705 1.08097 5.65901 0.65901C6.08097 0.237053 6.65326 0 7.25 0H14.75C15.3467 0 15.919 0.237053 16.341 0.65901C16.7629 1.08097 17 1.65326 17 2.25V3H18.5C19.2956 3 20.0587 3.31607 20.6213 3.87868C21.1839 4.44129 21.5 5.20435 21.5 6V12.75C21.5 13.3467 21.2629 13.919 20.841 14.341C20.419 14.7629 19.8467 15 19.25 15H17.15V15.75C17.15 16.3467 16.9129 16.919 16.491 17.341C16.069 17.7629 15.4967 18 14.9 18H7.25C6.65326 18 6.08097 17.7629 5.65901 17.341C5.23705 16.919 5 16.3467 5 15.75V15H2.75C2.15326 15 1.58097 14.7629 1.15901 14.341C0.737053 13.919 0.5 13.3467 0.5 12.75V6C0.5 5.20435 0.816071 4.44129 1.37868 3.87868C1.94129 3.31607 2.70435 3 3.5 3H5V2.25ZM15.5 3V2.25C15.5 2.05109 15.421 1.86032 15.2803 1.71967C15.1397 1.57902 14.9489 1.5 14.75 1.5H7.25C7.05109 1.5 6.86032 1.57902 6.71967 1.71967C6.57902 1.86032 6.5 2.05109 6.5 2.25V3H15.5ZM5 4.5H3.5C3.10218 4.5 2.72064 4.65804 2.43934 4.93934C2.15804 5.22064 2 5.60218 2 6V12.75C2 12.9489 2.07902 13.1397 2.21967 13.2803C2.36032 13.421 2.55109 13.5 2.75 13.5H5V12.75C5 12.1533 5.23705 11.581 5.65901 11.159C6.08097 10.7371 6.65326 10.5 7.25 10.5H14.9C15.4967 10.5 16.069 10.7371 16.491 11.159C16.9129 11.581 17.15 12.1533 17.15 12.75V13.5H19.25C19.4489 13.5 19.6397 13.421 19.7803 13.2803C19.921 13.1397 20 12.9489 20 12.75V6C20 5.60218 19.842 5.22064 19.5607 4.93934C19.2794 4.65804 18.8978 4.5 18.5 4.5H5ZM7.25 12C7.05109 12 6.86032 12.079 6.71967 12.2197C6.57902 12.3603 6.5 12.5511 6.5 12.75V15.75C6.5 15.9489 6.57902 16.1397 6.71967 16.2803C6.86032 16.421 7.05109 16.5 7.25 16.5H14.9C15.0989 16.5 15.2897 16.421 15.4303 16.2803C15.571 16.1397 15.65 15.9489 15.65 15.75V12.75C15.65 12.5511 15.571 12.3603 15.4303 12.2197C15.2897 12.079 15.0989 12 14.9 12H7.25Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-4 bg-[#F4F2F2] rounded-lg">
                <span className="text-sm text-dashboardPrimary font-semibold">Save</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mx-auto">
          {new Array(4).fill(0).map((_, index) => (
            <div
              key={index}
              className="py-4 px-6 rounded-2xl border border-[#E7E7E3] flex flex-col gap-4"
            >
              <div className="flex gap-4">
                <div className="p-4 rounded-lg bg-dashboardSecondary mb-auto">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1246 6.75C15.9408 9.22828 14.0621 11.25 11.9995 11.25C9.93705 11.25 8.05502 9.22875 7.87455 6.75C7.68705 4.17188 9.51517 2.25 11.9995 2.25C14.4839 2.25 16.3121 4.21875 16.1246 6.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0001 14.25C7.92199 14.25 3.78293 16.5 3.01699 20.7469C2.92465 21.2588 3.21433 21.75 3.75011 21.75H20.2501C20.7864 21.75 21.0761 21.2588 20.9837 20.7469C20.2173 16.5 16.0782 14.25 12.0001 14.25Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-dashboardPrimary font-bold text-xl">Customer</p>
                  <p className="text-[#70706E] font-semibold">Full Name: Jane Cooper</p>
                  <p className="text-[#70706E] font-semibold">Email: janecooper@gmail.com</p>
                  <p className="text-[#70706E] font-semibold">Phone: +900 231 1212</p>
                </div>
              </div>
              <Link to={''} className="text-white bg-dashboardPrimary rounded-lg py-2 text-center">
                View profile
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="p-4 rounded-2xl border border-[#E7E7E3]">
            <h2 className="text-xl font-bold leading-6 mb-4">Payment Info</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span>
                  <svg
                    width={36}
                    height={21}
                    viewBox="0 0 36 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2888 5.32046H20.6911V15.0276H15.2888V5.32046Z" fill="#FF5F00" />
                    <path
                      d="M15.632 10.1741C15.632 8.20187 16.558 6.4525 17.9815 5.32055C16.9354 4.49734 15.6148 4 14.1742 4C10.7612 4 8 6.76117 8 10.1741C8 13.587 10.7612 16.3483 14.1741 16.3483C15.6148 16.3483 16.9353 15.8509 17.9815 15.0277C16.558 13.9129 15.632 12.1464 15.632 10.1741Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M27.9803 10.1741C27.9803 13.587 25.2191 16.3483 21.8061 16.3483C20.3655 16.3483 19.045 15.8509 17.9988 15.0277C19.4394 13.8958 20.3484 12.1464 20.3484 10.1741C20.3484 8.20187 19.4222 6.4525 17.9988 5.32055C19.0449 4.49734 20.3655 4 21.8061 4C25.2191 4 27.9803 6.77836 27.9803 10.1741Z"
                      fill="#F79E1B"
                    />
                    <rect
                      x="0.15"
                      y="0.15"
                      width="35.6803"
                      height="20.0483"
                      rx="3.85"
                      stroke="#E7E7E3"
                      strokeWidth="0.3"
                    />
                  </svg>
                </span>
                <p className="text-[#70706E] font-semibold">Master Card **** **** 6557</p>
              </div>
              <p className="text-[#70706E] font-semibold">Business name: Jane Cooper</p>
              <p className="text-[#70706E] font-semibold">Phone: +900 231 1212</p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold leading-6 mb-[10px]">Note</h2>
            <div className="h-full">
              <textarea
                rows={5}
                className="border border-[#E7E7E3] w-full rounded-2xl p-3"
              ></textarea>
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
            <div className="py-4 px-2 w-[400px]">
              <p className="font-bold text-[#232321CC]">Product Name</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Order ID</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Quantiy</p>
            </div>
            <div className="py-4 px-2 w-[146px]">
              <p className="font-bold text-[#232321CC] text-center">Total</p>
            </div>
          </div>
          {new Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="p-2 w-[400px] flex gap-3 items-center">
                <img src="/images/shoe1.png" alt="" />
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
              <div className="p-2 w-[100px]">
                <p className="font-bold text-dashboardPrimary text-center">#25426</p>
              </div>
              <div className="p-2 w-[120px]">
                <p className="font-bold text-dashboardPrimary text-center">2</p>
              </div>
              <div className="p-2 w-[146px]">
                <p className="font-bold text-dashboardPrimary text-center">$800.40</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-4 pr-10 w-[300px] ml-auto">
          <div className="flex justify-between">
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
          </div>
          <div className="flex justify-between">
            <p className="text-dashboardPrimary font-semibold text-2xl">Total</p>
            <p className="text-dashboardPrimary font-semibold text-2xl">$3841.92</p>
          </div>
        </div>
      </div>
    </div>
  );
}
