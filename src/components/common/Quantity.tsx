import { Dispatch, SetStateAction } from 'react';

export interface QuantityProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export function Quantity({ quantity, setQuantity }: QuantityProps) {
  const quantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
        onChange={(e) => setQuantity(Number(e.target.value))}
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
