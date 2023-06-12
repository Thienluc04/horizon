import { useAppDispatch, useAppSelector } from 'app/hooks';
import { SidebarFilter } from 'components/filter';
import {
  productAction,
  selectPaginationProduct,
  selectParamsProduct,
  selectProductList,
  selectProductLoading,
} from 'features/product/productSlice';
import { ProductItem, ProductList } from 'modules/product';
import { useEffect, useState } from 'react';

const ITEM_PER_PAGE = 6;

export default function ListProductPage() {
  const [currentPage, setCurentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const currentParams = useAppSelector(selectParamsProduct);

  const products = useAppSelector(selectProductList);
  const loading = useAppSelector(selectProductLoading);
  const pagination = useAppSelector(selectPaginationProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pagination) {
      setTotalPage(Math.ceil(pagination._totalRows / ITEM_PER_PAGE));
    }
  }, [pagination]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(productAction.fetchProductList({ ...currentParams, page: currentPage }));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(productAction.fetchProductList(currentParams));
      setCurentPage(1);
    }
    fetchData();
  }, [currentParams]);

  return (
    <div className="max-w-[1180px] mx-auto pt-10">
      <div className="flex gap-5">
        <SidebarFilter
          params={currentParams}
          setParams={(params) => dispatch(productAction.fetchProductList({ ...params }))}
        ></SidebarFilter>
        <div className="flex flex-1 flex-col items-center px-2 py-4 xl:p-0">
          {!loading && products.length > 0 && (
            <ProductList className="xl:!grid-cols-3">
              {products?.map((item) => (
                <ProductItem
                  key={item.idProduct}
                  className="border border-primary"
                  params={currentParams}
                  product={item}
                ></ProductItem>
              ))}
            </ProductList>
          )}
          {loading && (
            <div className="w-10 h-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
          )}
          {!loading && products.length <= 0 && (
            <p className="text-center mx-auto">There are no results matching this filter</p>
          )}
          {pagination && products.length > 0 && (
            <div className="flex items-center mx-auto bg-white border border-gray-400 rounded-lg mt-10">
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
                    currentPage >= totalPage || pagination?._totalRows <= ITEM_PER_PAGE
                      ? 'text-gray5 bg-gray2'
                      : 'cursor-pointer'
                  }`}
                  onClick={() => {
                    if (currentPage < totalPage && pagination._totalRows > ITEM_PER_PAGE) {
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
