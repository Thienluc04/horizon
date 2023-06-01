import { Link } from 'react-router-dom';

export interface ProductItemProps {
  className?: string;
}

export function ProductItem({ className = '' }: ProductItemProps) {
  return (
    <div className={`p-4 bg-white rounded-2xl flex flex-col gap-4 ${className}`}>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Link to={'/dashboard/products/1'}>
            <img src="/images/shoe-medium.png" alt="" />
          </Link>
          <div className="flex flex-col gap-4">
            <div>
              <Link
                to={'/dashboard/products/1'}
                className="font-semibold text-dashboardPrimary text-base leading-[22px]"
              >
                Adidas Ultra boost
              </Link>
              <p className="text-sm font-semibold">Sneaker</p>
            </div>
            <p className="text-sm font-bold text-dashboardPrimary">$110.40</p>
          </div>
        </div>
        <div className="py-3 px-2 rounded bg-[rgba(35,_35,_33,_0.05)] mb-auto">
          <span>
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M1.6 3.2C1.28355 3.2 0.974206 3.10616 0.711087 2.93035C0.447969 2.75454 0.242893 2.50466 0.121794 2.21229C0.000693321 1.91993 -0.0309925 1.59823 0.0307446 1.28786C0.0924807 0.977487 0.244866 0.692394 0.468631 0.46863C0.692394 0.244866 0.977487 0.0924806 1.28786 0.0307443C1.59823 -0.0309921 1.91993 0.00069325 2.21229 0.121793C2.50466 0.242894 2.75454 0.44797 2.93035 0.711089C3.10616 0.974207 3.2 1.28355 3.2 1.6C3.2 2.02435 3.03143 2.43131 2.73137 2.73137C2.43131 3.03143 2.02435 3.2 1.6 3.2ZM12.8 1.6C12.8 1.91645 12.8938 2.2258 13.0696 2.48891C13.2455 2.75203 13.4953 2.95711 13.7877 3.07821C14.0801 3.19931 14.4018 3.23099 14.7121 3.16926C15.0225 3.10752 15.3076 2.95514 15.5314 2.73137C15.7551 2.50761 15.9075 2.22251 15.9693 1.91215C16.031 1.60178 15.9993 1.28007 15.8782 0.987708C15.7571 0.695346 15.552 0.44546 15.2889 0.26965C15.0258 0.0938393 14.7164 8.63947e-07 14.4 8.63947e-07C13.9757 8.63947e-07 13.5687 0.168572 13.2686 0.46863C12.9686 0.768688 12.8 1.17565 12.8 1.6ZM9.6 1.6C9.6 1.28355 9.50616 0.974207 9.33035 0.711089C9.15454 0.44797 8.90466 0.242894 8.61229 0.121793C8.31993 0.00069325 7.99823 -0.0309921 7.68786 0.0307443C7.37749 0.0924806 7.09239 0.244866 6.86863 0.46863C6.64487 0.692394 6.49248 0.977487 6.43074 1.28786C6.36901 1.59823 6.40069 1.91993 6.52179 2.21229C6.64289 2.50466 6.84797 2.75454 7.11109 2.93035C7.37421 3.10616 7.68355 3.2 8 3.2C8.42435 3.2 8.83131 3.03143 9.13137 2.73137C9.43143 2.43131 9.6 2.02435 9.6 1.6Z"
                fill="#232321"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-dashboardPrimary font-semibold text-base mb-1">Summary</h2>
        <p className="text-sm font-medium text-dashboardPrimary">
          Long distance running requires a lot from athletes.
        </p>
      </div>
      <div className="p-4 rounded-lg border border-[rgba(35,_35,_33,_0.3)] flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-dashboardPrimary text-sm font-semibold">Sales</p>
          <div className="flex gap-3 items-center">
            <span>
              <svg
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6.125L6 1.625L10.5 6.125M6 2.25V11.375"
                  stroke="#FFA52F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>1269</p>
          </div>
        </div>
        <div className="bg-[#a4a4a3] h-[1px]"></div>
        <div className="flex justify-between items-center">
          <p className="text-dashboardPrimary text-sm font-semibold">Remaining Products</p>
          <div className="flex gap-3 items-center">
            <span>
              <svg
                width="52"
                height="5"
                viewBox="0 0 52 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="52" height="4" rx="2" fill="#E7E7E3" />
                <rect y="0.5" width="30" height="4" rx="2" fill="#FFA52F" />
              </svg>
            </span>
            <p>1269</p>
          </div>
        </div>
      </div>
    </div>
  );
}
