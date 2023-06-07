import { Trademark } from 'models';
import axiosClient from './axiosClient';

export const trademarkApi = {
  getAll(): Promise<Trademark> {
    const url = '/getTradeMark.php';
    return axiosClient.get(url);
  },
};
