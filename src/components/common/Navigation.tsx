import { useAppDispatch, useAppSelector } from 'app/hooks';
import { productAction, selectParamsProduct } from 'features/product/productSlice';
import { Link } from 'react-router-dom';

export interface NavigationProps {
  className?: string;
}

export function Navigation({ className = '' }: NavigationProps) {
  const params = useAppSelector(selectParamsProduct);

  const dispatch = useAppDispatch();

  const handleChangeListParam = () => {
    dispatch(
      productAction.setParams({
        ...params,
        limit: 6,
      })
    );
  };

  return (
    <div className={`border-t border-b border-gray3 px-5 xl:block hidden ${className}`}>
      <div className="flex items-center justify-between py-4 max-w-[1180px] mx-auto">
        <div className="flex items-center gap-4">
          <Link to={'/products'}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#1C1C1C" />
            </svg>
          </Link>
          <Link onClick={handleChangeListParam} to="/products" className="flex gap-2">
            List Products
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <span>English, USD</span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z"
                  fill="#8B96A5"
                />
              </svg>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span>Ship to</span>
            <img src="/images/germany-flag.svg" alt="" />
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z"
                  fill="#8B96A5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
