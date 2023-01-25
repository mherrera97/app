import { createSlice } from "@reduxjs/toolkit";

const MODO = "MODO_V1";

const Theme = !!localStorage.getItem(MODO)
  ? localStorage.getItem(MODO)
  : localStorage.setItem(MODO, "light");
export const modoSlice = createSlice({
  name: "modo",
  initialState: {
    modo: Theme,
  },
  reducers: {
    onChangeModo: (state, { payload }) => {
      state.modo = payload;
      localStorage.setItem(MODO, payload);
    },
  },
});

export const { onChangeModo } = modoSlice.actions;
