import { Order, OrderInput } from 'models/order';
import axiosClient from './axiosClient';

export const orderApi = {
  getAll(): Promise<Order[]> {
    const url = '/booking.php';
    return axiosClient.get(url);
  },

  insertOrder(order: OrderInput): Promise<number> {
    const url = '/booking.php';
    return axiosClient.post(url, {
      ...order,
    });
  },
};
