import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    visible: false,
  },
  reducers: {
    onViewMenu: (state, { payload }) => {
      state.visible = payload;
    },
  },
});

export const { onViewMenu } = menuSlice.actions;
