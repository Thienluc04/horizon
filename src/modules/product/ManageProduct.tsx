import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import {
  productAction,
  selectPaginationProduct,
  selectProductList,
  selectProductLoading,
} from 'features/product/productSlice';
import { selectTrademarkList, trademarkActions } from 'features/trademark/trademarkSlice';
import { ListParams } from 'models';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { active } from 'utils/constant';
import { ProductItem, ProductList } from '.';

export interface ManageProductProps {}

const ITEM_PER_PAGE = 8;

export function ManageProduct(_: ManageProductProps) {
  const [currentTrademark, setCurrentTradeMark] = useState<string>('All Trademark');
  const [currentCategory, setCurrentCategory] = useState<string>('All Category');
  const [currentStatus, setCurrentStatus] = useState<string>('Public');

  const [showTradeMark, setShowTradeMark] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const products = useAppSelector(selectProductList);
  const loading = useAppSelector(selectProductLoading);
  const pagination = useAppSelector(selectPaginationProduct);

  const categories = useAppSelector(selectCategoryList);
  const trademarks = useAppSelector(selectTrademarkList);

  const [currentPage, setCurentPage] = useState<number>(1);

  const [params, setParams] = useState<ListParams>({
    page: currentPage,
    limit: ITEM_PER_PAGE,
    idStatusProductInput: active.PUBLIC,
  });

  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      await dispatch(productAction.fetchProductList(params));
      await dispatch(categoryActions.fetchCategoryList());
      await dispatch(trademarkActions.fetchTrademarkList());
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (pagination) {
      setTotalPage(Math.ceil(pagination._totalRows / ITEM_PER_PAGE));
    }
  }, [pagination]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(productAction.fetchProductList({ ...params, page: currentPage }));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(productAction.fetchProductList(params));
    }
    fetchData();
  }, [params]);

  const handleSearchProduct: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    const input = inputRef.current;
    setParams({ ...params, keyWord: input?.value });
  };

  return (
    <div className="p-6 pr-12 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold leading-7">All Products</h1>
      <div className="flex justify-between items-center">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} All Products</p>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => setShowStatus(!showStatus)}
            className="relative flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[100px]"
          >
            {currentStatus}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <div
              className={`absolute ${
                !showStatus && 'hidden'
              } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
            >
              <div
                className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                onClick={() => {
                  setCurrentStatus('Public');
                  setParams({ ...params, idStatusProductInput: active.PUBLIC });
                }}
              >
                Public
              </div>
              <div
                className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                onClick={() => {
                  setCurrentStatus('Private');
                  setParams({ ...params, idStatusProductInput: active.PRIVATE });
                }}
              >
                Private
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowCategory(!showCategory)}
            className="relative flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px]"
          >
            {currentCategory}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <div
              className={`absolute ${
                !showCategory && 'hidden'
              } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
            >
              <div
                onClick={() => {
                  setCurrentCategory('All Category');
                  setParams((prev) => {
                    const { nameCategoryInput, ...rest } = prev;
                    return rest;
                  });
                }}
                className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
              >
                All Category
              </div>
              {categories.map((item) => (
                <div
                  key={item.ID}
                  onClick={() => {
                    setCurrentCategory(item.name);
                    setParams({ ...params, nameCategoryInput: item.name });
                  }}
                  className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => setShowTradeMark(!showTradeMark)}
            className="relative flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px]"
          >
            {currentTrademark}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <div
              className={`absolute ${
                !showTradeMark && 'hidden'
              } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
            >
              <div
                onClick={() => {
                  setCurrentTradeMark('All Trademark');
                  setParams((prev) => {
                    const { nameTradeMarkInput, ...rest } = prev;
                    return rest;
                  });
                }}
                className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
              >
                All Trademark
              </div>
              {trademarks.map((item) => (
                <div
                  key={item.ID}
                  onClick={() => {
                    setCurrentTradeMark(item.name);
                    setParams({ ...params, nameTradeMarkInput: item.name });
                  }}
                  className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSearchProduct} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search"
              name="search"
              id="search"
              className="border border-dashboardSecondary py-1 px-2 rounded-lg h-10 bg-white"
              ref={inputRef}
            />
            <button
              type="submit"
              className="bg-dashboardSecondary text-white rounded-lg py-2 px-3 flex items-center gap-2"
            >
              Search
              <span>
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </button>
          </form>
          <Button to="/dashboard/products/createProduct" kind="dashboard">
            Create Product
          </Button>
        </div>
      </div>
      {loading && (
        <div className="w-10 h-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      )}
      <ProductList>
        {!loading &&
          products.map((product) => (
            <ProductItem
              dashboard
              params={params}
              key={product.idProduct}
              product={product}
            ></ProductItem>
          ))}
      </ProductList>
      {!loading && products.length <= 0 && (
        <p className="text-center">There are no results matching this filter</p>
      )}

      {pagination && products.length > 0 && (
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
