import { PropsWithChildren } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

export interface RadioProps {
  checked: boolean;
  control: Control<FieldValues, any>;
  name: string;
  value: string;
}

export function Radio({
  checked,
  control,
  name,
  children,
  ...props
}: PropsWithChildren<RadioProps>) {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <label>
      <input
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...props}
      />
      <div className="flex items-center gap-x-3 cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full border flex items-center justify-center p-1  ${
            checked
              ? "bg-primary border-primary text-white"
              : "border-gray4 text-transparent"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span>{children}</span>
      </div>
    </label>
  );
}
