import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { detailConfig } from 'models/detailConfig';

export interface DetailConfigState {
  loading: boolean;
  currentDetailConfig: detailConfig;
}

const initialState: DetailConfigState = {
  loading: false,
  currentDetailConfig: {
    content: '',
    idProduct: '',
  },
};

const detailConfigSlice = createSlice({
  name: 'detailConfig',
  initialState,
  reducers: {
    fetchDetailConfig(state, _: PayloadAction<string>) {
      state.loading = true;
    },
    fetchDetailConfigSuccess(state, actions: PayloadAction<detailConfig>) {
      state.loading = false;
      state.currentDetailConfig = actions.payload;
    },
    fetchDetailConfigFailed(state) {
      state.loading = false;
    },
    insertDetailConfig(state, _: PayloadAction<detailConfig>) {
      state.loading = false;
    },
    updateDetailConfig(state, _: PayloadAction<detailConfig>) {
      state.loading = false;
    },
  },
});

// Actions
export const detailConfigActions = detailConfigSlice.actions;

// Selectors
export const selectDetailConfig = (state: RootState) => state.detailConfig.currentDetailConfig;
export const selectDetailConfigLoading = (state: RootState) => state.detailConfig.loading;

// Reducers
const detailConfigReducer = detailConfigSlice.reducer;
export default detailConfigReducer;
