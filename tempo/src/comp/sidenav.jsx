import {Component, useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiTwotoneDashboard } from "react-icons/ai";
import { CgComponents } from "react-icons/cg";
import Dashboard from "./dashboard";
import Components from './Components';
import { MdDisabledByDefault } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { TbFileInvoice } from "react-icons/tb";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Default from './Default';
import Analytics from './Analytics';
import Invoice from './Invoice';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("Home");

  const [collapseOpen, setCollapseOpen] = useState(false);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={4} sx={{backgroundColor:"blue",color: "white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{setOpen(!open)}}
            edge="start"
            // sx={[
            //   {
            //     marginRight: 5,
            //   },
            //   open && { display: 'none' },
            // ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
            <img src="./icons/logo.jpg" height={60} width={188} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
<ListItem disablePadding sx={{ display: 'block' }}>
  <ListItemButton
    onClick={() => setCollapseOpen(!collapseOpen)}
    sx={[
      {
        minHeight: 48,
        px: 2.5,
      },
      open
        ? {
            justifyContent: 'initial',
          }
        : {
            justifyContent: 'center',
          },
    ]}
  >
    <ListItemIcon
      sx={[
        {
          minWidth: 0,
          justifyContent: 'center',
        },
        open
          ? {
              mr: 3,
            }
          : {
              mr: 'auto',
            },
      ]}
    >
      <AiTwotoneDashboard />
    </ListItemIcon>
    <ListItemText
      primary="Dashboard"
      sx={[
        open
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
            },
      ]}
    />
    {collapseOpen ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
</ListItem>

<Collapse in={collapseOpen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>

    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Default")}>
      <ListItemButton sx={{ pl: open ? 4 : 2 }}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
          <MdDisabledByDefault />
        </ListItemIcon>
        <ListItemText primary="Default" sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Analytics")}>
      <ListItemButton sx={{ pl: open ? 4 : 2 }}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
          <SiGoogleanalytics />
        </ListItemIcon>
        <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Invoice")}>
      <ListItemButton sx={{ pl: open ? 4 : 2 }}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
          <TbFileInvoice />
        </ListItemIcon>
        <ListItemText primary="Invoice" sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>

  </List>
</Collapse>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Components")}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                   <CgComponents />
                </ListItemIcon>
                <ListItemText
                  primary="Components" sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />



        <Box sx={{ flexGrow: 1 }} /> {/* Push profile to bottom */}
        <Divider />
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#f5f5f5' }}>
          <img
            src="./icons/avatar-1-B0hIH1z9.png"
            alt="Profile"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          {open && (
            <Box>
              <Typography variant="body1" fontWeight="bold">User</Typography>
              <Typography variant="body2" color="text.secondary">Designation</Typography>
            </Box>
          )}
          

{open && (
  <IconButton
    edge="end"
    size="large"
    aria-label="show more"
    sx={{ fontSize: '1.5rem', ml: 'auto' }}
  >
    <ChevronRightIcon />
  </IconButton>
)}

        </Box>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       {/* {menudata == "Dashboard" && <Dashboard />} */}
       {menudata == "Default" && <Default />}
       {menudata == "Analytics" && <Analytics />}
       {menudata == "Invoice" && <Invoice />}
       {menudata == "Components" && <Components />}

      </Box>
    </Box>
    </>
   
  );
}
