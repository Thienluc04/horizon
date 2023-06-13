import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface QuantityProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  max: number;
}

export function Quantity({ quantity, setQuantity, max }: QuantityProps) {
  const quantityIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 1 && Number(e.target.value) < max) {
      setQuantity(Number(e.target.value));
    } else if (Number(e.target.value) > 1 && Number(e.target.value) > max) {
      setQuantity(max);
    }
  };
  return (
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
        value={quantity}
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
  );
}
