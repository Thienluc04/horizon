import { PropsWithChildren } from 'react';

export interface ListCartItemProps {}

export function ListCartItem({ children }: PropsWithChildren<ListCartItemProps>) {
  return <div className="flex flex-col gap-5">{children}</div>;
}
