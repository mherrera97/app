import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserMenu } from './UserMenu';
import { Notifications } from "./Notifications";
import { BdStatus } from './BdStatus';
import { SideBar } from './SideBar';
import { onViewMenu } from '../../store/slices';


export const NavBar = () => {

  const { visible } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const handleShowMenu = () => {
    dispatch(onViewMenu(!visible));
  }


  return (
    <>
      <SideBar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleShowMenu}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
              <img src="../../src/assets/images/logoSomerBnco.png" sx={{ margin: "auto" }} width="100" alt="Logo Somer" />
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gestor Clinico
            </Typography>
            {/* estado de la base de datos */}
            <BdStatus />
            {/* menu de las notificaciones */}
            <Notifications />
            {/* Menu del usuario */}
            <UserMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </>);
}
