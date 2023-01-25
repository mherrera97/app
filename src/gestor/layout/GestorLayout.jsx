import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const GestorLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ width: "100%", p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
