import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material/";
import DangerousSharpIcon from "@mui/icons-material/DangerousSharp";
export const OffLine = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid item justifyContent="center">
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ textAlign: "center" }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Conexión a Internet perdida"}
          </DialogTitle>
          <DialogContent>
            <DangerousSharpIcon color="error" sx={{ fontSize: "120px" }} />
            <DialogContentText id="alert-dialog-description">
              Verifica tu que tu equipo este conectado a internet, si el
              problema persiste comunicate con los administradores del sistema.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};
