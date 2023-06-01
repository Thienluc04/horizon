import { PropsWithChildren } from 'react';

export interface ProductListProps {
  className?: string;
}

export function ProductList({ className = '', children }: PropsWithChildren<ProductListProps>) {
  return <div className={`grid grid-cols-4 gap-4 ${className}`}>{children}</div>;
}
