import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../assets/images/ParkEase_Logo_foter.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { NavLink } from "react-router-dom";


const qucikTypo = {
   fontSize: "clamp(10px, 3vw, 20px)", 
   color: "white", 
   fontFamily: "Li"
}

const quickBox = {
   height: "auto", 
   display: "flex", 
   alignItems: "center",
   textAlign:'right'
}

const Footer = () => {
   return (
      <Box
         sx={{
            height: "auto",
            width: "100%",
            backgroundColor: "#101921",
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            paddingY: "40px",
         }}
         >
         <Box sx={{ display: "flex", justifyContent: "space-between" }} >
            {/* Details */}
            <Box>
               <Typography
                  sx={{
                     fontSize: "clamp(24px, 5vw, 36px)",
                     color: "white",
                     fontFamily: "Protest Strike",
                  }}
               >
                  ParkEase
               </Typography>
               <Typography
                  sx={{
                  fontSize: "clamp(12px, 3vw, 24px)",
                  color: "#2DC98A",
                  fontFamily: "Li",
                  marginTop: "-10px",
                  }}
               >
                  Reserve, Park, Relax
               </Typography>
               <Typography
                  sx={{
                  fontSize: "clamp(10px, 3vw, 20px)",
                  color: "white",
                  fontFamily: "Li",
                  marginTop: "-5px",
                  }}
               >
                  parkeaseadmin@gmail.com
               </Typography>
               <Box sx={{ display: "flex", gap: 1, marginTop: "5px" }}>
                  <InstagramIcon sx={{ color: "#2DC98A" }} />
                  <TwitterIcon sx={{ color: "#2DC98A" }} />
                  <FacebookIcon sx={{ color: "#2DC98A" }} />
               </Box>
            </Box>

            <Box
               component="img"
               src={Logo}
               alt="Description"
               sx={{
                  width: "auto",
                  height: "200px",
                  objectFit: "cover",
                  display:{xs:'none', md:'block'}
               }}
            />

            <Box 
               sx={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
               }}
               >
               <Typography
                  sx={{
                     fontSize: "clamp(12px, 3vw, 24px)",
                     color: "#2DC98A",
                     fontFamily: "Li",
                     marginTop: "-10px",
                  }}
               >
                  Quick Links
               </Typography>

               <Link component={NavLink} underline="none" to="/reservations">
                  <Box sx={quickBox}>
                     <Typography sx={qucikTypo}>
                        Reservations
                     </Typography>
                     <KeyboardArrowLeftIcon sx={{ color: "white", fontSize: "20px",}}/>
                  </Box>
               </Link>
               
               <Link component={NavLink} underline="none" to="/">
                  <Box sx={quickBox}>
                     <Typography sx={qucikTypo}>
                        Home
                     </Typography>
                     <KeyboardArrowLeftIcon sx={{ color: "white", fontSize: "20px",}}/>
                  </Box>
               </Link>

               <Link component={NavLink} underline="none" to="/slots">
                  <Box sx={quickBox}>
                     <Typography sx={qucikTypo}>
                        Slots
                     </Typography>
                     <KeyboardArrowLeftIcon sx={{ color: "white", fontSize: "20px",}}/>
                  </Box>
               </Link>

               <Link component={NavLink} underline="none" to="/help">
                  <Box sx={quickBox}>
                     <Typography sx={qucikTypo}>
                        Help
                     </Typography>
                     <KeyboardArrowLeftIcon sx={{ color: "white", fontSize: "20px",}}/>
                  </Box>
               </Link>

            </Box>

         </Box>
         <Typography
            sx={{
               fontSize: "clamp(10px, 2vw, 16px)",
               textAlign:'center',
               marginTop:'10px',
               fontFamily:'Li',
               color:'#2DC98A'
            }}
            >
            © 2025 ParkEase. All rights reserved
         </Typography>
      </Box>
   );
};

export default Footer;
