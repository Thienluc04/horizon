import { PayloadAction } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { ListParams, Product, ProductInput, Response } from 'models';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { status } from 'utils/constant';
import { productAction } from './productSlice';

function* handleFetchProduct(action: PayloadAction<ListParams>) {
  try {
    yield put(productAction.setParams(action.payload));
    const response: Response<Product[]> = yield call(productApi.getAll, action.payload);
    if (response.data) {
      yield put(productAction.fetchProductListSuccess(response));
    }
  } catch (error) {
    yield put(productAction.fetchProductListFailed());
  }
}

function* handleCreateProduct(action: PayloadAction<ProductInput>) {
  try {
    const data: number = yield call(productApi.createProduct, action.payload);
    if (data === status.ERROR) {
      toast.error('Create new product failed!');
    } else if (data === status.EXIST) {
      toast.error('This product is exist!');
    } else {
      yield put(productAction.setIdProduct(data));
      toast.success('Create new product success!');
    }
  } catch (error) {
    console.log('function*handleCreateProduct ~ error:', error);
  }
}

function* handleUpdateProduct(action: PayloadAction<ProductInput>) {
  try {
    const data: number = yield call(productApi.updateProduct, action.payload);
    console.log(action.payload);
    if (data === status.ERROR) {
      toast.error('Update this product failed!');
    } else {
      toast.success('Update this product success!');
    }
  } catch (error) {
    console.log('function*handleUpdateProduct ~ error:', error);
  }
}

function* handleDeleteProduct(action: PayloadAction<string>) {
  try {
    const data: number = yield call(productApi.deleteProduct, action.payload);
    if (data === status.OK) {
      toast.success('Delete product success');
    } else if (data === status.ERROR) {
      toast.error('Delete product failed');
    }
  } catch (error) {
    console.log('function*handleDeleteProduct ~ error:', error);
    toast.error('Something is wrong');
  }
}

function* handleGetProductBySlug(action: PayloadAction<string>) {
  try {
    const data: Product = yield call(productApi.getProductBySlug, action.payload);
    if (data) {
      yield put(productAction.setCurrentProduct(data));
    }
  } catch (error) {
    console.log('function*handleGetProductBySlug ~ error:', error);
  }
}

export default function* productSaga() {
  yield takeLatest(productAction.fetchProductList.type, handleFetchProduct);
  yield takeLatest(productAction.createProduct.type, handleCreateProduct);
  yield takeLatest(productAction.updateProduct.type, handleUpdateProduct);
  yield takeLatest(productAction.deleteProduct.type, handleDeleteProduct);
  yield takeLatest(productAction.getProductBySlug.type, handleGetProductBySlug);
}
