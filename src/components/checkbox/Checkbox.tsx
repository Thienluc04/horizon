import { PropsWithChildren } from 'react';

export interface CheckboxProps {
  handleValue: () => void;
  checked: boolean;
}

export function Checkbox({ children, handleValue, checked }: PropsWithChildren<CheckboxProps>) {
  const handleChecked = () => {
    handleValue();
  };

  return (
    <label className="cursor-pointer">
      <div className="flex gap-2 items-center">
        <input
          checked={checked}
          type="checkbox"
          className="invisible h-1 w-[-1px] absolute"
          onChange={() => handleChecked()}
        />
        <div
          className={`flex justify-center items-center w-5 h-5  rounded-full ${
            checked ? 'bg-primary border-none' : 'border-2 border-[#BDBDBD] bg-white'
          }`}
        >
          <svg
            width={13}
            height={9}
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64286 9L0 4.67308L1.3 3.46154L4.64286 6.57692L11.7 0L13 1.21154L4.64286 9Z"
              fill="white"
            />
          </svg>
        </div>
        <span>{children}</span>
      </div>
    </label>
  );
}
