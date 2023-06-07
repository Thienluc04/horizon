import { FilterProduct, ListParams, Product, ProductInput, Response } from 'models';
import axiosClient from './axiosClient';

const productApi = {
  getAll(params: ListParams): Promise<Response<Product[]>> {
    const url = '/product.php';
    return axiosClient.get(url, {
      params: {
        ...params,
      },
    });
  },

  filterProduct({
    idStatusProduct,
    idCategoryInput,
    IDTradeMarkInput,
  }: FilterProduct): Promise<Response<Product[]>> {
    const url = '/filterProduct.php';
    return axiosClient({
      method: 'post',
      url,
      data: {
        idStatusProduct,
        idCategoryInput,
        IDTradeMarkInput,
      },
    });
  },

  getProductBySlug(slug: string): Promise<Product> {
    const url = '/product.php';
    return axiosClient.get(url, {
      params: {
        slug,
      },
    });
  },

  createProduct(input: ProductInput): Promise<number> {
    const url = '/product.php';
    return axiosClient({
      method: 'post',
      url,
      data: {
        ...input,
      },
    });
  },

  updateProduct(input: ProductInput): Promise<number> {
    const url = '/product.php';
    return axiosClient({
      method: 'put',
      url,
      data: {
        ...input,
      },
    });
  },

  deleteProduct(id: string): Promise<number> {
    const url = '/product.php';
    return axiosClient({
      method: 'delete',
      url,
      data: {
        idProduct: id,
      },
    });
  },
};

export default productApi;
