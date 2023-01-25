import { configureStore } from "@reduxjs/toolkit";
import { modoSlice, menuSlice, authSlice } from "./slices";

export const store = configureStore({
  reducer: {
    modo: modoSlice.reducer,
    menu: menuSlice.reducer,
    auth: authSlice.reducer,
  },
});
