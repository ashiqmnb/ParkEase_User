import { Avatar, Box, Drawer, IconButton, Link, List, ListItem, ListItemText, Tooltip, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/ParkEase_Logo_noBg.png";
import { useState } from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import MenuIcon from "@mui/icons-material/Menu";
import AddCoinModal from "./modals/AddCoinModal";


const listStyleMobile = {
  textDecoration: "none",
  color: "#101921",
  width: "100%",
  border: "none",
  backgroundColor: "white",
  padding: "8px 16px",
  display: "flex",
  gap: 2,
  alignItems: "center",
  borderRadius: "10px",
  marginBottom: "5px",
  ":hover": {
    color: "white",
    backgroundColor: "#2DC98A",
  },
};

const listStyleDesktop = {
  fontFamily: "Inter",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  ":hover": { color: "#91FED2" },
};

const listStyleDesktop1 = {
  fontFamily: "Inter",
  color: "#2DC98A",
  fontSize: "16px",
  fontWeight: "600",
  ":hover": { color: "#91FED2" },
};

const Navbar = () => {

   const [drawerOpen, setDrawerOpen] = useState(false);

   const name = localStorage.getItem("name");
   const profile = localStorage.getItem("profile");
   const coins = Number(localStorage.getItem("coins")) || 0;


   const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
   };

   const location = useLocation();
   const selected = location.pathname;

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <Box
         sx={{
            height: "80px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#101921",
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
         }}
      >
         <Link component={NavLink} underline="none" to="/">
            <img style={{ height: "70px", width: "auto" }} src={Logo} alt="Logo" />
         </Link>

         <Box
            sx={{
               display: { xs: "none", md: "flex" },
               alignItems: "center",
               gap: 4,
            }}
            >
            <Link component={NavLink} underline="none" to="/">
               <Typography
               sx={selected==='/'? listStyleDesktop1:listStyleDesktop}
               >
                  Home
               </Typography>
            </Link>

            <Link component={NavLink} underline="none" to="/slots">
               <Typography
               sx={selected==='/slots'? listStyleDesktop1:listStyleDesktop}
               >
                  Slots
               </Typography>
            </Link>

            <Link component={NavLink} underline="none" to="/reservations">
               <Typography
               sx={selected==='/reservations'? listStyleDesktop1:listStyleDesktop}
               >
                  Reservations
               </Typography>
            </Link>

            {/* <Link component={NavLink} underline="none" to="/help">
               <Typography
               sx={selected==='/help'? listStyleDesktop1:listStyleDesktop}
               >
                  Help
               </Typography>
            </Link> */}
         </Box>

         <Box>
            {name ? (
               <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Tooltip title="Add coins" arrow>
                     <Box 
                        onClick={handleOpen}
                        sx={{display:'flex', gap:1, alignItems:'center', cursor:'pointer'}}>
                        <Typography sx={{color:'white', fontWeight:'600'}}>
                           {coins}
                        </Typography>
                        <TbCoinRupeeFilled 
                           style={{
                              color:'gold',
                              fontSize:'28px'
                           }}
                           />
                     </Box>
                  </Tooltip>

                  {/* <Tooltip title="Notifications" arrow>
                     <Link
                        component={NavLink}
                        to="/notification"
                        sx={{ textDecoration: "none" }}
                     >
                        <Badge badgeContent={5} color="error">
                           <NotificationsIcon
                              sx={{
                                 fontSize: "32px",
                                 cursor: "pointer",
                                 color:  "white",
                                 ":hover": {
                                    color: "#2DC98A",
                                 },
                              }}
                           />
                        </Badge>
                     </Link>
                  </Tooltip> */}

                  <Tooltip title="Profile" arrow>
                     <Link sx={{ display: { xs: "none", md: "block" }}} component={NavLink} underline="none" to="/profile">
                        <Avatar
                           src={profile && profile !== "null" ? profile : undefined}
                           sx={{ bgcolor: "#2DC98A", color:'#101921' }}
                        >
                           {(!profile || profile === "null") && name?.charAt(0)}
                        </Avatar>
                     </Link>
                  </Tooltip>
                  <IconButton
                     sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                     onClick={handleDrawerToggle}
                     >
                     <MenuIcon />
                  </IconButton>
               </Box>
            ) : (
               <Box>
                  <Link sx={{ display: { xs: "none", md: "block" }}} component={NavLink} underline="none" to="/auth/register">
                     <Typography
                        sx={{
                           fontFamily: "Inter",
                           color: "white",
                           fontSize: "16px",
                           fontWeight: "600",
                           ":hover": { color: "#2DC98A" },
                        }}
                        >
                        Sign Up
                     </Typography>
                  </Link>
                  <IconButton
                     sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                     onClick={handleDrawerToggle}
                     >
                     <MenuIcon />
                  </IconButton>
               </Box>
            )}
         </Box>

         <Drawer  anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: "200px", paddingX: "10px" }}>
               {name ? (
                  <>
                  <ListItem onClick={handleDrawerToggle} disablePadding>
                     <Box
                        component={NavLink}
                        to="/profile"
                        sx={{
                        textDecoration: "none",
                        color: "#2DC98A",
                        width: "100%",
                        border: "none",
                        backgroundColor: "white",
                        padding: "8px 16px",
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        ":hover": {
                           backgroundColor: "rgba(121, 64, 207, 0.2)",
                        },
                        }}
                     >
                        <Avatar
                           src={profile && profile !== "null" ? profile : undefined}
                           sx={{ bgcolor: "#2DC98A", color:'#101921' }}
                           >
                           {(!profile || profile === "null") && name?.charAt(0)}
                           </Avatar>
                           <ListItemText
                              primary="Profile"
                              primaryTypographyProps={{
                                 fontWeight: "600",
                                 fontFamily: "Libre Baskerville",
                                 color:'#101921'
                              }}
                        />
                     </Box>
                  </ListItem>

                  {/* <ListItem onClick={handleDrawerToggle} disablePadding>
                     <Box component={NavLink} to="/" sx={listStyleMobile}>
                        <ListItemText
                        primary="Notification"
                        primaryTypographyProps={{
                           fontWeight: "600",
                           fontFamily: "Inter",
                        }}
                        />
                     </Box>
                  </ListItem> */}
                  </>
               ) : (
                  <ListItem onClick={handleDrawerToggle} disablePadding>
                  <Box component={NavLink} to="/auth/register" sx={listStyleMobile}>
                     <ListItemText
                        primary="Sign Up"
                        primaryTypographyProps={{
                        fontWeight: "600",
                        fontFamily: "Inter",
                        }}
                     />
                  </Box>
                  </ListItem>
               )}

               <ListItem onClick={handleDrawerToggle} disablePadding>
                  <Box component={NavLink} to="/slots" sx={listStyleMobile}>
                  <ListItemText
                     primary="Slots"
                     primaryTypographyProps={{
                        fontWeight: "600",
                        fontFamily: "Inter",
                     }}
                  />
                  </Box>
               </ListItem>

               <ListItem onClick={handleDrawerToggle} disablePadding>
                  <Box component={NavLink} to="/reservations" sx={listStyleMobile}>
                  <ListItemText
                     primary="Reservations"
                     primaryTypographyProps={{
                        fontWeight: "600",
                        fontFamily: "Inter",
                     }}
                  />
                  </Box>
               </ListItem>

               {/* <ListItem onClick={handleDrawerToggle} disablePadding>
                  <Box component={NavLink} to="/help" sx={listStyleMobile}>
                  <ListItemText
                     primary="Help"
                     primaryTypographyProps={{
                        fontWeight: "600",
                        fontFamily: "Inter",
                     }}
                  />
                  </Box>
               </ListItem> */}
            </List>
         </Drawer>

         <AddCoinModal
            coins={coins}
            handleClose={handleClose}
            open={open}
            />

      </Box>

      
   );
};

export default Navbar;
