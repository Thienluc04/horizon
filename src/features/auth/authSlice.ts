import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { CurrentUser, Login, Register } from "models";

export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: CurrentUser;
  loadingLogin: boolean;
  loadingRegister: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  isLoggedIn: false,
  loadingLogin: false,
  loadingRegister: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, _: PayloadAction<Login>) {
      state.isLoggedIn = false;
      state.loadingLogin = true;
    },
    authLoginSuccess(state, action: PayloadAction<CurrentUser>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.loadingLogin = false;
    },
    authLoginFailed(state) {
      state.isLoggedIn = false;
      state.loadingLogin = false;
    },
    authRegister(state, _: PayloadAction<Register>) {
      state.isLoggedIn = false;
      state.loadingRegister = true;
    },
    authRegisterSuccess(state) {
      state.isLoggedIn = false;
      state.loadingRegister = false;
    },
    authRegisterFailed(state) {
      state.isLoggedIn = false;
      state.loadingRegister = false;
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
export const selectAuthLoadingLogin = (state: RootState) =>
  state.auth.loadingLogin;
export const selectAuthLoadingRegister = (state: RootState) =>
  state.auth.loadingRegister;

// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
