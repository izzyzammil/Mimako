import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    nilai: 0,
    cek: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    result: (state, action) => {
      state.nilai = action.payload;
    },
    evalResult: (state, action) => {
      // return {
      //   ...state.cek,
      //   cek: action.payload,
      // };
      // state.cek = action.payload;
      state.cek.push(action.payload);
    },
  },
});

export const { login, logout, result, evalResult } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const setNilai = (state) => state.user.nilai;

export const setAnswer = (state) => state.user.cek;

export default userSlice.reducer;
