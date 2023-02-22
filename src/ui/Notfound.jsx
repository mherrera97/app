import { Button, Grid, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
export const Notfound = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <LanguageIcon sx={{ fontSize: "150px" }} />
        <br />
        <Typography variant="h2" color="error">
          404 Not Found
        </Typography>
        <Typography variant="body">
          La pagina a la que intentas acceder no existe
        </Typography>
        <br />
        <Button
          onClick={() => {
            window.history.back();
          }}
        >
          Regresar
        </Button>
      </Grid>
    </Grid>
  );
};
