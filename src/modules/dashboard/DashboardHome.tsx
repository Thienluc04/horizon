export interface DashboardHomeProps {}

export function DashboardHome(_: DashboardHomeProps) {
  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <h1 className="text-2xl font-semibold leading-7">Dashboard</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} Dashboard</p>
        </div>
        <div className="flex items-center gap-2">
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
              <path d="M21.75 7.5H2.25" stroke="#232321" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="font-medium">Feb 16,2022 - Feb 20,2022</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white rounded-2xl py-6 px-4 w-[360px]">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Total Oders</p>
            <span>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src="/images/dashboard-order.png" alt="" />
              <span className="font-bold">$126.500</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 6.53125L7 0.90625L12.625 6.53125M7 1.6875V13.0938"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold">34.7%</span>
            </div>
          </div>
          <p className="text-right text-xs font-semibold text-[#4b4b4b] mt-1">
            Compared to Jan 2022
          </p>
        </div>
        <div className="bg-white rounded-2xl py-6 px-4 w-[360px]">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Active Orders</p>
            <span>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src="/images/dashboard-order.png" alt="" />
              <span className="font-bold">$126.500</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 6.53125L7 0.90625L12.625 6.53125M7 1.6875V13.0938"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold">34.7%</span>
            </div>
          </div>
          <p className="text-right text-xs font-semibold text-[#4b4b4b] mt-1">
            Compared to Jan 2022
          </p>
        </div>
        <div className="bg-white rounded-2xl py-6 px-4 w-[360px]">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Shipped Orders</p>
            <span>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src="/images/dashboard-order.png" alt="" />
              <span className="font-bold">$126.500</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 6.53125L7 0.90625L12.625 6.53125M7 1.6875V13.0938"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold">34.7%</span>
            </div>
          </div>
          <p className="text-right text-xs font-semibold text-[#4b4b4b] mt-1">
            Compared to Jan 2022
          </p>
        </div>
        <div className="bg-white rounded-2xl py-6 px-4 w-[360px]">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Pending Orders</p>
            <span>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src="/images/dashboard-order.png" alt="" />
              <span className="font-bold">$126.500</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 6.53125L7 0.90625L12.625 6.53125M7 1.6875V13.0938"
                    stroke="#232321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-bold">34.7%</span>
            </div>
          </div>
          <p className="text-right text-xs font-semibold text-[#4b4b4b] mt-1">
            Compared to Jan 2022
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[60%] bg-white p-6 rounded-2xl">
          <div className="flex-1">
            <div className="flex justify-between items-center border-b border-dashboardPrimary pb-4">
              <p className="text-xl font-bold">Sale Graph</p>
              <div className="flex gap-4">
                <div className="py-2 px-4 text-dashboardPrimary text-sm font-medium bg-white border border-dashboardPrimary rounded-lg cursor-pointer">
                  Weekly
                </div>
                <div className="py-2 px-4 text-white text-sm font-medium bg-dashboardPrimary border border-dashboardPrimary rounded-lg cursor-pointer">
                  Monthly
                </div>
                <div className="py-2 px-4 text-dashboardPrimary text-sm font-medium bg-white border border-dashboardPrimary rounded-lg cursor-pointer">
                  Yearly
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9">
            <img src="/images/dashboard-chart.png" className="object-contain w-full" alt="" />
          </div>
        </div>
        <div className="w-[40%] bg-white rounded-2xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center pb-5 border-b border-b-dashboardPrimary mt-[6px]">
            <h2 className="text-xl font-bold">Best Sellers</h2>
            <span>
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="/images/shoe1.png" alt="" />
                </div>
                <div className="flex flex-col gap-1 ">
                  <p className="font-semibold">Adidas Ultra boost</p>
                  <span className="font-semibold text-sm">$126.500</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">$126.50</h2>
                <span className="font-semibold text-sm">999 sales</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="/images/shoe1.png" alt="" />
                </div>
                <div className="flex flex-col gap-1 ">
                  <p className="font-semibold">Adidas Ultra boost</p>
                  <span className="font-semibold text-sm">$126.500</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">$126.50</h2>
                <span className="font-semibold text-sm">999 sales</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="/images/shoe1.png" alt="" />
                </div>
                <div className="flex flex-col gap-1 ">
                  <p className="font-semibold">Adidas Ultra boost</p>
                  <span className="font-semibold text-sm">$126.500</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">$126.50</h2>
                <span className="font-semibold text-sm">999 sales</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-dashboardPrimary text-white inline uppercase rounded-lg mr-auto font-semibold cursor-pointer">
            Report
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 mb-[100px]">
        <div className="flex justify-between items-center border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          <h2 className="font-bold text-xl">Recent Orders</h2>
          <span>
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 14C3.5 14.2967 3.41203 14.5867 3.24721 14.8334C3.08238 15.08 2.84812 15.2723 2.57403 15.3858C2.29994 15.4994 1.99834 15.5291 1.70737 15.4712C1.41639 15.4133 1.14912 15.2704 0.939341 15.0607C0.729562 14.8509 0.586701 14.5836 0.528823 14.2926C0.470945 14.0017 0.50065 13.7001 0.614181 13.426C0.727713 13.1519 0.919972 12.9176 1.16665 12.7528C1.41332 12.588 1.70333 12.5 2 12.5C2.39783 12.5 2.77936 12.658 3.06066 12.9393C3.34197 13.2206 3.5 13.6022 3.5 14ZM2 3.5C2.29667 3.5 2.58668 3.41203 2.83336 3.24721C3.08003 3.08238 3.27229 2.84811 3.38582 2.57403C3.49935 2.29994 3.52906 1.99834 3.47118 1.70737C3.4133 1.41639 3.27044 1.14912 3.06066 0.939341C2.85088 0.729562 2.58361 0.586701 2.29264 0.528823C2.00166 0.470945 1.70007 0.50065 1.42598 0.614181C1.15189 0.727713 0.917619 0.919972 0.752797 1.16665C0.587974 1.41332 0.500001 1.70333 0.500001 2C0.500001 2.39783 0.658036 2.77936 0.939341 3.06066C1.22065 3.34197 1.60218 3.5 2 3.5ZM2 6.5C1.70333 6.5 1.41332 6.58797 1.16665 6.7528C0.919972 6.91762 0.727713 7.15189 0.614181 7.42598C0.50065 7.70007 0.470945 8.00166 0.528823 8.29264C0.586701 8.58361 0.729562 8.85088 0.939341 9.06066C1.14912 9.27044 1.41639 9.4133 1.70737 9.47118C1.99834 9.52906 2.29994 9.49935 2.57403 9.38582C2.84812 9.27229 3.08238 9.08003 3.24721 8.83336C3.41203 8.58668 3.5 8.29667 3.5 8C3.5 7.60218 3.34197 7.22065 3.06066 6.93934C2.77936 6.65804 2.39783 6.5 2 6.5Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-[#232321CC]">Product</p>
              </div>
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
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
                  <circle cx="4.60004" cy="4.5" r="4" fill="#FFA52F" />
                </svg>
              </span>
              <p className="font-bold text-dashboardPrimary text-center">Canceled</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-dashboardPrimary text-center">$200.00</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
                  <circle cx="4.60004" cy="4.5" r="4" fill="#FFA52F" />
                </svg>
              </span>
              <p className="font-bold text-dashboardPrimary text-center">Canceled</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-dashboardPrimary text-center">$200.00</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="py-4 px-2">
                <span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.25 0.5H1.75C1.05964 0.5 0.5 1.05964 0.5 1.75V14.25C0.5 14.9404 1.05964 15.5 1.75 15.5H14.25C14.9404 15.5 15.5 14.9404 15.5 14.25V1.75C15.5 1.05964 14.9404 0.5 14.25 0.5ZM1.75 14.25V1.75H14.25V14.25H1.75Z"
                      fill="#232321"
                    />
                  </svg>
                </span>
              </div>
              <div className="py-4 px-2 w-[180px]">
                <p className="font-bold text-dashboardPrimary">Adidas Ultra boost</p>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
