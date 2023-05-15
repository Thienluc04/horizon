import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { CurrentUser, Login } from "models";

export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: CurrentUser;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  isLoggedIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, action: PayloadAction<Login>) {
      state.isLoggedIn = false;
      state.loading = true;
    },
    authLoginSuccess(state, action: PayloadAction<CurrentUser>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    authLoginFailed(state) {
      state.isLoggedIn = false;
      state.loading = false;
    },
    authRegister(state) {
      state.isLoggedIn = false;
    },
    authLogOut(state) {
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },
  },
});

// Actions
export const authAction = authSlice.actions;

// Selectors
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectAuthLoading = (state: RootState) => state.auth.loading;

// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
