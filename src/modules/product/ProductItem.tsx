import { useAppDispatch } from 'app/hooks';
import { cartActions } from 'features/cart/cartSlice';
import { productAction } from 'features/product/productSlice';
import { ListParams, Product } from 'models';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export interface ProductItemProps {
  className?: string;
  product: Product;
  params: ListParams;
  dashboard?: boolean;
}

export function ProductItem({ product, params, className = '', dashboard }: ProductItemProps) {
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
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        cartActions.incrementItemCart({
          cart: {
            category: product.Category,
            id: Number(product.idProduct),
            image: product.image,
            name: product.NameProduct,
            price: product.CurrentPrice,
            quantity: quantity,
            trademark: product.TradeMark,
          },
          quantity: 1,
        })
      );
    }
    setQuantity(quantity + 1);
  };

  return (
    <div className={`p-4 bg-white rounded-2xl flex flex-col gap-2 ${className}`}>
      <div>
        <Link
          to={`${dashboard ? `/dashboard/products/${product.Slug}` : `/products/${product.Slug}`}`}
          className="max-w-[100px] max-h-[120px]"
        >
          <img src={product.image} alt="" className="rounded-lg max-h-[180px] h-[180px] mx-auto" />
        </Link>
        <div className="mt-3">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <Link
                to={`${
                  dashboard ? `/dashboard/products/${product.Slug}` : `/products/${product.Slug}`
                }`}
                className="font-semibold text-dashboardPrimary text-base leading-[22px] min-h-[44px] descShort"
              >
                {product.NameProduct}
              </Link>
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{product.TradeMark}</p>
                {dashboard && (
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
                )}
                {dashboard ?? (
                  <span
                    onClick={handleAddToCart}
                    className="p-2 border border-primary rounded-lg text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </span>
                )}
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
              <img src="/images/cpu.png" className="max-w-5" />
            </span>
            <p className="text-sm">{product.Specifications.CpuName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/ram.png" className="max-w-5" />
            </span>
            <p className="text-sm">{product.Specifications.RamName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/disk.png" className="max-w-5" />
            </span>
            <p className="text-sm">{product.Specifications.DiskName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/vga.png" className="max-w-5" />
            </span>
            <p className="text-sm">{product.Specifications.VgaName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/screen.png" className="max-w-5" alt="" />
            </span>
            <p className="text-sm">{product.Specifications.ScreenName}</p>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/color.png" className="max-w-5" alt="" />
            </span>
            <p className="text-sm">{product.Specifications.ColorName}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-1 items-center">
            <span>
              <img src="/images/OS.png" className="max-w-5" />
            </span>
            <p className="text-sm">{product.Specifications.OsName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
