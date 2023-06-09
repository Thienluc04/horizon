import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Category } from 'models/category';

export interface CategoryState {
  loading: boolean;
  list: Category[];
}

const initialState: CategoryState = {
  loading: false,
  list: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoryList(state) {
      state.loading = true;
    },
    fetchCategoryListSuccess(state, actions: PayloadAction<Category[]>) {
      state.loading = false;
      state.list = actions.payload;
    },
    fetchCategoryListFailed(state) {
      state.loading = false;
    },
    insertCategory(state, _: PayloadAction<Category>) {
      state.loading = false;
    },
    updateCategory(state, _: PayloadAction<Category>) {
      state.loading = false;
    },
  },
});

// Actions
export const categoryActions = categorySlice.actions;

// Selectors
export const selectCategoryList = (state: RootState) => state.category.list;
export const selectCategoryLoading = (state: RootState) => state.category.loading;

// Reducers
const categoryReducer = categorySlice.reducer;
export default categoryReducer;
