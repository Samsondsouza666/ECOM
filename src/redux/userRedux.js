import { createSlice } from "@reduxjs/toolkit";
import { resetProduct } from "./cartRedux";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      // resetLoginState(state);
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetLoginState: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure ,resetLoginState} = userSlice.actions;
export default userSlice.reducer;