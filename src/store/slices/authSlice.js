import { createSlice } from "@reduxjs/toolkit";

const InitialStatus = !!localStorage.getItem("token")
  ? "authenticated"
  : "not-authenticated";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: InitialStatus, //'checking','not-authenticated','authenticated'
    user: {
      uid: null,
      user: null,
      name: null,
      email: null,
      token: null,
    },
    error: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.user = {
        uid: payload.uid,
        user: payload.user.usuario,
        name: payload.user.nombre,
        email: payload.user.email,
        token: payload.user.token,
      };
      state.error = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {
        uid: null,
        user: null,
        name: null,
        email: null,
        token: null,
      };
      state.error = payload;
    },
    checkCredenciales: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkCredenciales } = authSlice.actions;
