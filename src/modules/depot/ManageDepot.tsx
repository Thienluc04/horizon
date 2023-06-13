import { depotApi } from 'api/depotApi';
import { ListParams, PaginationParams } from 'models';
import { Depot } from 'models/depot';
import { useEffect, useState } from 'react';

const DEPOT_PER_PAGE = 8;

export function ManageDepot() {
  const [params, _] = useState<ListParams>({
    limit: 8,
    page: 1,
  });

  const [currentPage, setCurentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const [pagination, setPagination] = useState<PaginationParams>();

  const [depotList, setDepotList] = useState<Depot[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await depotApi.getAll(params);
      setDepotList(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await depotApi.getAll(params);
      setPagination(response.pagination);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (pagination) {
      setTotalPage(Math.ceil(pagination._totalRows / DEPOT_PER_PAGE));
    }
  }, [pagination]);

  useEffect(() => {
    async function fetchData() {
      const response = await depotApi.getAll({ ...params, page: currentPage });
      setDepotList(response.data);
    }
    fetchData();
  }, [currentPage]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await dispatch(userAction.fetchUserList(params));
  //   }
  //   fetchData();
  // }, [params]);

  return (
    <div className="p-6 pr-12 flex flex-col gap-6 border-l ">
      <h1 className="text-2xl font-semibold leading-7">Manage Depot</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} Depot</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          <h2 className="font-bold text-xl">Depot product</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">ID</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Id Product</p>
            </div>
            <div className="py-4 px-2 w-[180px]">
              <p className="font-bold text-[#232321CC] text-center">Quantity</p>
            </div>
            <div className="py-4 px-2 w-[160px]">
              <p className="font-bold text-[#232321CC] text-center">Sold Quantity</p>
            </div>
            {/* <div className="py-4 px-2 w-[180px]">
              <p className="font-bold text-[#232321CC] text-center">Amount</p>
            </div> */}
          </div>
          {depotList?.map((depot, _) => {
            return (
              <div key={depot.ID} className="flex justify-between items-center">
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">#{depot.ID}</p>
                </div>
                <div className="py-4 px-2 w-[120px]">
                  <p className="font-bold text-dashboardPrimary text-center">{depot.idPRoduct}</p>
                </div>
                <div className="py-4 px-2 w-[180px] flex gap-2 items-center justify-center">
                  <p className="font-bold text-dashboardPrimary text-center">{depot.quantily}</p>
                </div>
                <div className="py-4 px-2 w-[160px] flex items-center justify-center gap-2">
                  <p className="font-bold text-dashboardPrimary text-center">{depot.da_co}</p>
                </div>
              </div>
            );
          })}
          {depotList.length <= 0 && (
            <div className="w-10 h-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
          )}
        </div>
      </div>
      {pagination && depotList.length > 0 && (
        <div className="flex items-center mx-auto bg-white border border-gray-400 rounded-lg">
          <div className="flex">
            <div
              className={`border border-gray3 rounded-l-lg h-10 w-11 flex items-center justify-center ${
                currentPage <= 1 ? 'text-gray5 bg-gray2' : 'cursor-pointer'
              }`}
              onClick={() => {
                if (currentPage > 1) {
                  setCurentPage(currentPage - 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            {new Array(totalPage).fill(0).map((_, index) => (
              <div
                key={index}
                className={`border border-gray3 h-10 w-11  flex items-center justify-center ${
                  currentPage === index + 1 ? 'text-gray5 bg-gray2' : 'cursor-pointer'
                }`}
                onClick={() => {
                  if (currentPage !== index + 1) {
                    setCurentPage(index + 1);
                  }
                }}
              >
                {index + 1}
              </div>
            ))}
            <div
              className={`border border-gray3 rounded-r-lg h-10 w-11 flex items-center justify-center ${
                currentPage >= totalPage || pagination?._totalRows <= DEPOT_PER_PAGE
                  ? 'text-gray5 bg-gray2'
                  : 'cursor-pointer'
              }`}
              onClick={() => {
                if (currentPage < totalPage && pagination._totalRows > DEPOT_PER_PAGE) {
                  setCurentPage(currentPage + 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
