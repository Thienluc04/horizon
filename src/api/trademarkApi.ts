import { SpeInput, Trademark } from 'models';
import axiosClient from './axiosClient';

export const trademarkApi = {
  getAll(): Promise<Trademark[]> {
    const url = '/getTradeMark.php';
    return axiosClient.get(url);
  },
  insertTrademark(data: SpeInput): Promise<number> {
    const url = '/inSertTradeMark.php';
    return axiosClient.post(url, { ...data });
  },
  updateTrademark(data: SpeInput): Promise<number> {
    const url = '/updateTradeMark.php';
    return axiosClient.post(url, { ...data });
  },
};
