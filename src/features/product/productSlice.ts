import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { FilterProduct, ListParams, Product, ProductInput } from 'models';

export interface ProductState {
  loading: boolean;
  list: Product[];
  status?: number;
  idProduct: string | number;
  currentProduct?: Product;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  idProduct: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state, _: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductListSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchProductListFailed(state) {
      state.loading = false;
    },
    filtersProduct(state, _: PayloadAction<FilterProduct>) {
      state.loading = true;
    },
    filtersProductSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    filtersProductFailed(state, action: PayloadAction<number>) {
      state.loading = false;
      state.status = action.payload;
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
export const selectProductStatus = (state: RootState) => state.product.status;
export const selectIdProduct = (state: RootState) => state.product.idProduct;
export const selectCurrentProduct = (state: RootState) => state.product.currentProduct;

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;
