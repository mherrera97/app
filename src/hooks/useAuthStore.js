import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../api";
import { checkCredenciales, login, logout } from "../store/slices";

export const useAuthStore = () => {
  const { status, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ usuario, password }) => {
    dispatch(checkCredenciales());
    try {
      const resp = await authApi.post("/auth", {
        usuario,
        clave: password,
      });
      const data = await resp.data;
      if (data.success) {
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("user", JSON.stringify(data.dataUsuario));
        return dispatch(login({ uid: 1, user: data.dataUsuario, error: null }));
      }
      if (data.error) return dispatch(logout(data.error));
      if (data.warning) return dispatch(logout(data.warning));
    } catch (error) {
      console.log("error-login:", error);
      dispatch(logout("Error tratando de autenticar el usuario"));
    }
  };

  const checkAuthToken = async () => {
    dispatch(checkCredenciales());
    const token = localStorage.getItem("token");
    const user = window.localStorage.getItem("user");

    if (!token) return dispatch(logout(""));
    try {
      const resp = await authApi.get("/renew", {});
      const data = await resp.data;
      if (data.error) {
        console.log(data.error);
        return dispatch(logout("La sesión ha caducado"));
      }

      window.localStorage.setItem("token", data.newToken);
      return dispatch(login({ uid: 1, user: user, error: null }));
    } catch (error) {
      console.log(error);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");

      // dispatch(
      //   logout(
      //     "Error : No se pudo comprobar el token, verifique su conexion a internet"
      //   )
      // );
      setTimeout(() => {
        dispatch(logout(null));
      }, 2000);
    }
  };

  const startLogout = () => {
    dispatch(checkCredenciales());
    setTimeout(() => {
      dispatch(logout());
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
    }, 500);
  };

  return {
    //* Propiedades
    status,
    user,
    error,
    //* Metodos
    checkAuthToken,
    startLogin,
    startLogout,
  };
};
