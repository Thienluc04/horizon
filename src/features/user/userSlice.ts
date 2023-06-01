import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ChangePass, ChangeRole, User } from 'models';

export interface UserState {
  loading: boolean;
  list: User[];
}

const initialState: UserState = {
  loading: false,
  list: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserList(state) {
      state.loading = true;
    },
    fetchUserListSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchUserListFailed(state) {
      state.loading = false;
    },
    fetchChangePass(state, _: PayloadAction<ChangePass>) {
      state.loading = false;
    },
    fetchChangeRole(state, _: PayloadAction<ChangeRole>) {
      state.loading = false;
    },
    fetchResetPass(state, _: PayloadAction<string>) {
      state.loading = false;
    },
    searchUser(state, _: PayloadAction<string>) {
      state.loading = true;
    },
    searchUserSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    getUserWithGender(state, _: PayloadAction<string>) {
      state.loading = true;
    },
    getUserWithGenderSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    getUserWithRole(state, _: PayloadAction<string>) {
      state.loading = true;
    },
    getUserWithRoleSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.list = action.payload;
    },
  },
});

// Actions
export const userAction = userSlice.actions;

// Selectors
export const selectUserList = (state: RootState) => state.user.list;
export const selectUserLoading = (state: RootState) => state.user.loading;

// Reducers
const userReducer = userSlice.reducer;
export default userReducer;
