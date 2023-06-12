import { PropsWithChildren } from 'react';

export interface ProductListProps {
  className?: string;
}

export function ProductList({ className = '', children }: PropsWithChildren<ProductListProps>) {
  return (
    <div
      className={`max-w-[1300px] mx-auto grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-4 ${className}`}
    >
      {children}
    </div>
  );
}
