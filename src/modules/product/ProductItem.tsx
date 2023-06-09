import { useAppDispatch } from 'app/hooks';
import { productAction } from 'features/product/productSlice';
import { ListParams, Product } from 'models';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export interface ProductItemProps {
  className?: string;
  product: Product;
  params: ListParams;
}

export function ProductItem({ product, params, className = '' }: ProductItemProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(productAction.deleteProduct(product.idProduct));
        await dispatch(productAction.fetchProductList(params));
        Swal.fire('Deleted!', 'This product has been deleted.', 'success');
      }
    });
  };

  return (
    <div className={`p-4 bg-white rounded-2xl flex flex-col gap-2 ${className}`}>
      <div>
        <Link to={`/dashboard/products/${product.Slug}`} className="max-w-[100px] max-h-[120px]">
          <img src={product.image} alt="" className="rounded-lg max-h-[180px] mx-auto" />
        </Link>
        <div className="mt-3">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <Link
                to={`/dashboard/products/${product.Slug}`}
                className="font-semibold text-dashboardPrimary text-base leading-[22px] min-h-[44px] block"
              >
                {product.NameProduct}
              </Link>
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{product.TradeMark}</p>
                <span
                  onClick={handleDeleteProduct}
                  className="p-2 border border-red rounded-full text-red cursor-pointer hover:bg-red hover:text-white transition-all"
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-dashboardPrimary font-semibold text-base mb-1">{product.Category}</h2>
        <p className="text-sm font-bold text-dashboardPrimary">
          {Number(product.CurrentPrice).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/cpu.png" alt="" />
            </span>
            <p>{product.Specifications.CpuName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/ram.png" alt="" />
            </span>
            <p>{product.Specifications.RamName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/disk.png" alt="" />
            </span>
            <p>{product.Specifications.DiskName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/vga.png" alt="" />
            </span>
            <p>{product.Specifications.VgaName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/screen.png" alt="" />
            </span>
            <p>{product.Specifications.ScreenName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/color.png" alt="" />
            </span>
            <p>{product.Specifications.ColorName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/OS.png" alt="" />
            </span>
            <p>{product.Specifications.OsName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
