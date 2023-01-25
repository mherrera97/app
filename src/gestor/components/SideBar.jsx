import { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { onViewMenu } from '../../store/slices';
import { Modo } from '../../ui/Modo';

export function SideBar() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const { visible } = useSelector(state => state.menu);
    const dispatch = useDispatch();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
                <ListItem disablePadding >
                    <ListItemButton sx={{ justifyContent: "center" }}>
                        <ListItemIcon>
                            <img src="../../src/assets/images/clinicasomer.png" width="150" alt="Logo Somer" />
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
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
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
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </Fragment>
    );
}