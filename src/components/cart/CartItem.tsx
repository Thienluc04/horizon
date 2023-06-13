import { depotApi } from 'api/depotApi';
import { useAppDispatch } from 'app/hooks';
import { cartActions, selectListCart } from 'features/cart/cartSlice';
import { Cart } from 'models';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export interface CartItemProps {
  cart: Cart;
  onRemoveAll: () => void;
}

export function CartItem({ cart, onRemoveAll }: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [maxQuantity, setMaxQuantity] = useState<string>('');

  const dispatch = useAppDispatch();

  const listCart = useSelector(selectListCart);

  useEffect(() => {
    if (cart) {
      setItemQuantity(cart.quantity);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await depotApi.getDepotByIdProduct(cart?.id + '');
      setMaxQuantity(data.quantily);
    }
    fetchData();
  }, []);

  const handleRemoveCartItem = () => {
    if (listCart.length > 1) {
      dispatch(cartActions.decrementItemCart(cart));
    } else if (listCart.length === 1) {
      onRemoveAll();
    }
  };

  const quantityIncrement = () => {
    if (cart.quantity < Number(maxQuantity)) {
      const newList: Cart[] = listCart.map((item) => {
        if (item.id === cart.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: String(Number(cart.price) + Number(cart.priceProduct)),
          };
        }
        return item;
      });
      dispatch(cartActions.setListCart(newList));
      setItemQuantity(itemQuantity + 1);
    }
  };

  const quantityDecrement = () => {
    if (itemQuantity > 1) {
      const newList: Cart[] = listCart.map((item) => {
        if (item.id === cart.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: String(Number(cart.price) - Number(cart.priceProduct)),
          };
        }
        return item;
      });
      dispatch(cartActions.setListCart(newList));
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 1 && Number(e.target.value) < Number(maxQuantity)) {
      const newList: Cart[] = listCart.map((item) => {
        if (item.id === cart.id) {
          return {
            ...item,
            quantity: Number(e.target.value),
            price: String(Number(cart.priceProduct) * Number(e.target.value)),
          };
        }
        return item;
      });
      dispatch(cartActions.setListCart(newList));
      setItemQuantity(Number(e.target.value));
    } else if (Number(e.target.value) > 1 && Number(e.target.value) > Number(maxQuantity)) {
      const newList: Cart[] = listCart.map((item) => {
        if (item.id === cart.id) {
          return {
            ...item,
            quantity: Number(maxQuantity),
            price: String(Number(cart.priceProduct) * Number(maxQuantity)),
          };
        }
        return item;
      });
      dispatch(cartActions.setListCart(newList));
      setItemQuantity(Number(maxQuantity));
    }
  };

  return (
    <div className="pb-5 border-b border-b-gray3 flex justify-between max-md:flex-col max-md:justify-center">
      <div className="flex items-center gap-3">
        <Link to={`/products/${cart.slug}`} className="p-1 border border-gray3 rounded-md">
          <img src={cart.image} alt="" className="w-[150px] h-[150px]" />
        </Link>
        <div className="flex flex-col gap-2">
          <Link to={`/products/${cart.slug}`} className="text-dark font-semibold">
            {cart.name}
          </Link>
          <button
            onClick={handleRemoveCartItem}
            className="text-[#FA3434] w-[70px] h-[30px] border border-solid border-[#FA3434] rounded-md shadow-sm font-medium text-sm"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="max-md:flex max-md:justify-between max-md:items-center">
        <p className="text-dark font-medium mb-2 text-right max-md:mb-0">
          {Number(cart.price).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
        </p>
        <div className="flex items-center">
          <button
            className="hover:bg-primary hover:text-white transition-all py-1 px-4 border border-solid
        border-primary border-r-0 text-primary rounded-l-md text-2xl flex justify-center items-center max-h-8"
            onClick={() => quantityDecrement()}
          >
            -
          </button>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => handleChangeQuantity(e)}
            className={`text-center max-w-[50px] h-8 border border-primary`}
          />
          <button
            className={`hover:bg-primary hover:text-white transition-all py-1 px-4 border border-solid
         border-primary border-l-0 text-primary rounded-r-md text-2xl flex justify-center items-center max-h-8`}
            onClick={() => quantityIncrement()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
