import { useAppDispatch } from 'app/hooks';
import { Quantity } from 'components/common';
import { cartActions } from 'features/cart/cartSlice';
import { Cart } from 'models';
import { useEffect, useState } from 'react';

export interface CartItemProps {
  cart: Cart;
}

export function CartItem({ cart }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart) {
      setQuantity(cart.quantity);
    }
  }, [cart]);

  const handleRemoveCartItem = () => {
    dispatch(cartActions.decrementItemCart(cart));
  };

  return (
    <div className="pb-5 border-b border-b-gray3 flex justify-between max-md:flex-col max-md:justify-center">
      <div className="flex items-center gap-3">
        <div className="p-1 border border-gray3 rounded-md">
          <img src={cart.image} alt="" className="w-[150px] h-[150px]" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-dark font-semibold">{cart.name}</h2>
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
        <Quantity quantity={quantity} setQuantity={setQuantity}></Quantity>
      </div>
    </div>
  );
}
