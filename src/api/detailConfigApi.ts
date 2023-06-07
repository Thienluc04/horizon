import { detailConfig } from 'models/detailConfig';
import axiosClient from './axiosClient';

export const detailConfigApi = {
  getByIdProduct(idProduct: string): Promise<detailConfig> {
    const url = '/DetailConfiguration.php';
    return axiosClient.get(url, { params: { idProduct } });
  },
  insertDetailConfig(data: detailConfig): Promise<number> {
    const url = '/DetailConfiguration.php';
    return axiosClient({
      method: 'POST',
      url,
      data: {
        idProduct: data.idProduct,
        content: data.content,
      },
    });
  },
  updateDetailConfig(data: detailConfig): Promise<number> {
    const url = '/DetailConfiguration.php';
    return axiosClient({
      method: 'PUT',
      url,
      data: {
        idProduct: data.idProduct,
        content: data.content,
      },
    });
  },
};
