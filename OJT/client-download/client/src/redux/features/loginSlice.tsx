import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface loginState {
  isLogined: boolean;
  userInfo?: iUserInfo;
  status: "idle" | "loading" | "failed";
}

const initialState: loginState = {
  isLogined: false,
  status: "idle",
  userInfo: {},
};

export interface iUserInfo {
  pw?: string;
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogined: (state, action: PayloadAction<iUserInfo>) => {
      state.isLogined = true;
      state.userInfo = action.payload;
    },
    userLogouted: (state, action: PayloadAction<iUserInfo>) => {
      state.isLogined = false;
      state.userInfo = {};
    },
  },
});

export const { userLogined, userLogouted } = loginSlice.actions;

export const selectUser = (state: RootState) => state.user.isLogined;
export default loginSlice.reducer;
