import { Category } from 'models';
import axiosClient from './axiosClient';

export const categoryApi = {
  getAll(): Promise<Category[]> {
    const url = '/getCategory.php';
    return axiosClient.get(url);
  },
  insertCategory(data: Category): Promise<number> {
    const url = '/inSertCategory.php';
    return axiosClient.post(url, {
      name: data.name,
      slug: data.slug,
    });
  },
  updateCategory(data: Category): Promise<number> {
    const url = '/updateCategory.php';
    return axiosClient.post(url, {
      id: data.id,
      name: data.name,
      slug: data.slug,
    });
  },
};
