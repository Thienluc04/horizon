import { Order, OrderDetailData, OrderInput, StatusBooking } from 'models/order';
import axiosClient from './axiosClient';

export const orderApi = {
  getAll(): Promise<Order[]> {
    const url = '/booking.php';
    return axiosClient.get(url);
  },

  getOrderById(id: string): Promise<OrderDetailData> {
    const url = '/booking.php';
    return axiosClient.get(url, {
      params: {
        idBooking: id,
      },
    });
  },

  insertOrder(order: OrderInput): Promise<number> {
    const url = '/booking.php';
    return axiosClient.post(url, {
      ...order,
    });
  },

  updateOrder(order: OrderInput): Promise<number> {
    const url = '/booking.php';
    return axiosClient.put(url, {
      ...order,
    });
  },

  getStatusBooking(): Promise<StatusBooking[]> {
    const url = '/statusBooking.php';
    return axiosClient.get(url);
  },
};
