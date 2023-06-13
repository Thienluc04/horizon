import { ListParams, Response } from 'models';
import { Depot } from 'models/depot';
import axiosClient from './axiosClient';

export const depotApi = {
  getAll(params: ListParams): Promise<Response<Depot[]>> {
    const url = '/depot.php';
    return axiosClient.get(url, {
      params,
    });
  },
  getDepotByIdProduct(idProduct: string): Promise<Depot> {
    const url = '/depot.php';
    return axiosClient.get(url, {
      params: {
        idProduct,
      },
    });
  },
};
