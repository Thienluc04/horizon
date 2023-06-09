import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, PaginationParams, Product, ProductInput, Response } from 'models';

export interface ProductState {
  loading: boolean;
  list: Product[];
  idProduct: string | number;
  currentProduct?: Product;
  pagination: PaginationParams;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  idProduct: '',
  pagination: {
    _limit: 8,
    _page: 1,
    _totalRows: 8,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state, _: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductListSuccess(state, action: PayloadAction<Response<Product[]>>) {
      state.loading = false;
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    fetchProductListFailed(state) {
      state.loading = false;
    },
    getProductBySlug(state, _: PayloadAction<string>) {
      state.loading = false;
    },
    createProduct(state, _: PayloadAction<ProductInput>) {
      state.loading = false;
    },
    updateProduct(state, _: PayloadAction<ProductInput>) {
      state.loading = false;
    },
    deleteProduct(state, _: PayloadAction<string>) {
      state.loading = false;
    },
    setIdProduct(state, action: PayloadAction<number>) {
      state.idProduct = action.payload;
    },
    setCurrentProduct(state, action: PayloadAction<Product>) {
      state.currentProduct = action.payload;
    },
  },
});

// Actions
export const productAction = productSlice.actions;

// Selectors
export const selectProductList = (state: RootState) => state.product.list;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectIdProduct = (state: RootState) => state.product.idProduct;
export const selectCurrentProduct = (state: RootState) => state.product.currentProduct;
export const selectPaginationProduct = (state: RootState) => state.product.pagination;

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;
