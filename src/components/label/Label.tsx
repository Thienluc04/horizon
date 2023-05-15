import { PropsWithChildren } from "react";

export interface LabelProps {
  htmlFor: string;
  className?: string;
}

export function Label({
  htmlFor = "",
  className = "",
  children,
}: PropsWithChildren<LabelProps>) {
  return (
    <label htmlFor={htmlFor} className={`${className}`}>
      {children}
    </label>
  );
}
