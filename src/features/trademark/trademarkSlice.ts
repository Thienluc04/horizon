import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Trademark } from 'models';

export interface TrademarkState {
  loading: boolean;
  list: Trademark[];
}

const initialState: TrademarkState = {
  loading: false,
  list: [],
};

const trademarkSlice = createSlice({
  name: 'trademark',
  initialState,
  reducers: {
    fetchTrademarkList(state) {
      state.loading = true;
    },
    fetchTrademarkListSuccess(state, actions: PayloadAction<Trademark[]>) {
      state.loading = false;
      state.list = actions.payload;
    },
    fetchTrademarkListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const trademarkActions = trademarkSlice.actions;

// Selectors
export const selectTrademarkList = (state: RootState) => state.trademark.list;
export const selectTrademarkLoading = (state: RootState) => state.trademark.loading;

// Reducers
const trademarkReducer = trademarkSlice.reducer;
export default trademarkReducer;
