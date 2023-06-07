import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { categoryActions, selectCategoryList } from 'features/category/categorySlice';
import {
  productAction,
  selectProductList,
  selectProductLoading,
  selectProductStatus,
} from 'features/product/productSlice';
import { selectTrademarkList, trademarkActions } from 'features/trademark/trademarkSlice';
import { useEffect, useState } from 'react';
import { active, status } from 'utils/constant';
import { ProductItem, ProductList } from '.';

export interface ManageProductProps {}

const ITEM_PER_PAGE = 10;

export function ManageProduct(_: ManageProductProps) {
  const [currentTrademark, setCurrentTradeMark] = useState<string>('All Trademark');
  const [currentCategory, setCurrentCategory] = useState<string>('All Category');
  const [currentStatus, setCurrentStatus] = useState<string>('Public');

  const [showTradeMark, setShowTradeMark] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const [, setCategoryValue] = useState<string>('-1');
  const [, setTrademarkValue] = useState<string>('-1');
  const [, setStatusValue] = useState<number>(1);

  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProductList);
  const loading = useAppSelector(selectProductLoading);
  const statusCode = useAppSelector(selectProductStatus);

  const categories = useAppSelector(selectCategoryList);
  const trademarks = useAppSelector(selectTrademarkList);

  const [currentPage] = useState<number>(1);
  const [statusProduct] = useState<number>(active.PUBLIC);

  useEffect(() => {
    async function fetchData() {
      await dispatch(
        productAction.fetchProductList({
          page: currentPage,
          limit: ITEM_PER_PAGE,
          idStatusProductInput: statusProduct,
        })
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await dispatch(categoryActions.fetchCategoryList());
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await dispatch(trademarkActions.fetchTrademarkList());
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(
  //       productAction.filtersProduct({
  //         idCategoryInput: categoryValue,
  //         idStatusProduct: statusValue,
  //         IDTradeMarkInput: trademarkValue,
  //       })
  //     );
  //   })();
  // }, [categoryValue, trademarkValue, statusValue]);

  const handleSearchProduct = () => {};

  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
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
                  setStatusValue(active.PUBLIC);
                }}
              >
                Public
              </div>
              <div
                className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                onClick={() => {
                  setCurrentStatus('Private');
                  setStatusValue(active.PRIVATE);
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
                  setCategoryValue('-1');
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
                    setCategoryValue(item.ID);
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
                  setTrademarkValue('-1');
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
                    setTrademarkValue(item.ID);
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
              // ref={inputRef}
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
          statusCode !== status.NO_CONTENT &&
          products.map((product) => (
            <ProductItem
              params={{
                page: currentPage,
                limit: ITEM_PER_PAGE,
                idStatusProductInput: statusProduct,
              }}
              key={product.idProduct}
              product={product}
            ></ProductItem>
          ))}
      </ProductList>
      {!loading && statusCode === status.NO_CONTENT && (
        <p className="text-center">There are no results matching this filter</p>
      )}
    </div>
  );
}
