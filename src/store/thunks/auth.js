import { checkCredenciales } from "../slices";

export const checkAuth = (usuario, password) => {
  return async (dispatch) => {
    dispatch(checkCredenciales());
  };
};
