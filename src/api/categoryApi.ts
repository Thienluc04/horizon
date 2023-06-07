import { Category } from 'models';
import axiosClient from './axiosClient';

export const categoryApi = {
  getAll(): Promise<Category[]> {
    const url = '/getCategory.php';
    return axiosClient.get(url);
  },
};
