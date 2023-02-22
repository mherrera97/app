import { useEffect } from "react";

import { GestorLayout } from "../../../gestor/layout/GestorLayout";
import { useUsuariosApi } from "../hooks";

import { Button, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export const Users = () => {
  useEffect(() => {
    listarUsuarios();
  }, []);

  const { usuarios, error, isloading, listarUsuarios } = useUsuariosApi();
  return (
    <GestorLayout>
      <Grid
        container
        sx={{
          textAlign: "-webkit-center",
          justifyContent: "center",
        }}
        spacing={6}
      >
        <Grid item container>
          <Button
            onClick={() => {
              listarUsuarios();
            }}
          >
            Listas
          </Button>
          {isloading ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell align="right">Usuario</TableCell>
                    <TableCell align="right">Nombre&nbsp;</TableCell>
                    <TableCell align="right">Apellido&nbsp;</TableCell>
                    <TableCell align="right">Correo&nbsp;</TableCell>
                    <TableCell align="right">Celular&nbsp;</TableCell>
                    <TableCell align="right">tipo&nbsp;</TableCell>
                    <TableCell align="right">estado&nbsp;</TableCell>
                    <TableCell align="right">Fecha creación&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usuarios.map((row) => (
                    <TableRow
                      hover
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.usuario}</TableCell>
                      <TableCell align="right">{row.nombre}</TableCell>
                      <TableCell align="right">{row.apellido}</TableCell>
                      <TableCell align="right">{row.correo}</TableCell>
                      <TableCell align="right">{row.celular}</TableCell>
                      <TableCell align="right">{row.tipo}</TableCell>
                      <TableCell align="right">{row.estado}</TableCell>
                      <TableCell align="right">{row.fechaCrea}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </GestorLayout>
  );
};
