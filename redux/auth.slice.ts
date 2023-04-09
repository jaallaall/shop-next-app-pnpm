import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {} as { [key: string]: any }, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.success = action.payload.success;
      state.userInfo = action.payload;
    },
  },
  extraReducers: {},
});

export const { logout, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
