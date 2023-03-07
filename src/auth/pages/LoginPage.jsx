import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Modo } from "../../ui/Modo";
import { Slider } from "../../ui/Slider";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks";
import { Alert } from "@mui/material";

import logo from "../../assets/images/clinicasomer.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://clinicasomer.com/">
        Clinica Somer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const LoginPage = () => {
  const { status, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isLoading = useMemo(() => status === "checking", [status]);

  const { startLogin } = useAuthStore();

  const { usuario, password, onInputChange, onResetForm, formState } = useForm({
    usuario: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("usuario"),
    //   password: data.get("password"),
    // });
    startLogin({
      usuario: data.get("usuario"),
      password: data.get("password"),
    });
    // dispatch(checkAuth(data.get("usuario"), data.get("password")));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        sx={{ padding: "10px" }}
        square
      >
        <Grid container>
          <Grid item xs={7}>
            <img src={logo} width={150} />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "right" }}>
            <Modo />
          </Grid>
        </Grid>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: { xl: 8 }, textAlign: "center" }}
          >
            Gestor Clínico sss
          </Typography>
          <Typography variant="i">Inicio de Sesión</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
              value={usuario}
              onChange={onInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Ingresar
            </Button>
            {error ? (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            ) : (
              ""
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={false}
        md={8}
        sx={{
          display: {
            xs: "none",
            md: "flex",
            alignContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          },
        }}
        component={Paper}
        square
      >
        <Slider />
      </Grid>
    </Grid>
  );
};
