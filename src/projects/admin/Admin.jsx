import { Grid, Typography } from "@mui/material";
import { GestorLayout } from "../../gestor/layout/GestorLayout";
import { Menu } from "./components/Menu";

import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';

export const Admin = () => {
  const menus = [
    {
      dilay: 500,
      nombre: "Gestión Usuarios",
      descripcion: "Menu para la administración de usuarios",
      icon: <ManageAccountsTwoToneIcon sx={{ fontSize: "150px" }}  />,
      url: "/admin/usuarios",
    },
    {
      dilay: 1000,
      nombre: "Menus",
      descripcion: "Menu para la administración de usuarios",
      icon: <DesktopWindowsTwoToneIcon sx={{ fontSize: "150px" }}  />,
      url: "/admin/roles",
    },
    {
      dilay: 1500,
      nombre: "Roles",
      descripcion: "Menu para la administración de usuarios",
      icon: <GroupAddTwoToneIcon sx={{ fontSize: "150px" }}  />,
      url: "/admin/menus",
    },
  ];
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
        <Grid item xs={12}>
          <Typography variant="h4">Administracion</Typography>
        </Grid>
        {/* Menus de la administracion */}
        <Menu menus={menus} />
      </Grid>
    </GestorLayout>
  );
};
