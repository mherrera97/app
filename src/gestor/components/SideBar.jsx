import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { onViewMenu } from "../../store/slices";
import { Modo } from "../../ui/Modo";

import AttachFileIcon from "@mui/icons-material/AttachFile";

import logo from "../..//assets/images/clinicasomer.png";

export function SideBar() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { visible } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const { menus } = JSON.parse(window.localStorage.getItem("user"));

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    dispatch(onViewMenu(open));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: { xs: 250, sm: 300, md: 350 } }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          onClick={() => {
            navigate("/");
          }}
          disablePadding
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon>
              <img src={logo} width="150" alt="Logo Somer" />
            </ListItemIcon>
            {/* <ListItemText primary="pruebas de marlon" /> */}
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ textAlign: "right", justifyContent: "end" }}>
          <Modo />
        </ListItem>
      </List>
      <Divider />
      <List onClick={toggleDrawer(anchor, false)}>
        <ListItem
          onClick={() => {
            navigate("/admin");
          }}
          disablePadding
        >
          <ListItemButton>
            <AttachFileIcon />
            <ListItemText primary="Admin Local" />
          </ListItemButton>
        </ListItem>
        {menus.map((menu) => (
          <ListItem key={menu.id} disablePadding>
            <ListItemButton>
              <AttachFileIcon />
              <ListItemText primary={menu.nombre} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={visible}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </Fragment>
  );
}
