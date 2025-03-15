import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCompnay from "../../assets/images/addCompany.png";

const AddYourBss = () => {
   return (
      <Box
         sx={{
         backgroundColor: "#ECFBF5",
         width: "100%",
         height: "auto",
         paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
         paddingY: "40px",
         }}
      >
         <Typography
         sx={{
            fontFamily: "Lib",
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: "600",
         }}
         >
         want to add your business ?
         </Typography>
         <Box
         sx={{
            width: "100%",
            backgroundColor: "white",
            marginY: "10px",
            padding: "40px",
            display: "flex",
            justifyContent: "space-between",
         }}
         >
         <Box>
            <Typography
               sx={{
               fontSize: "clamp(16px, 3vw, 28px)",
               fontFamily: "Inter",
               fontWeight: "600",
               }}
            >
               Do you want to attract more customers by
            </Typography>
            <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
               <Typography
               sx={{
                  fontSize: "clamp(16px, 3vw, 28px)",
                  fontFamily: "Inter",
                  fontWeight: "600",
               }}
               >
               listing your parking slots through
               </Typography>
               <Typography
               sx={{
                  fontSize: "clamp(16px, 3vw, 28px)",
                  fontFamily: "Inter",
                  fontWeight: "600",
                  color: "#2DC98A",
               }}
               >
               ParkEase ?
               </Typography>
            </Box>

            <Typography
               sx={{ marginTop: "15px", fontSize: "clamp(13px, 2vw, 20px)" }}
            >
               It will help your customers know about your parking availability
            </Typography>
            <Typography sx={{ fontSize: "clamp(13px, 2vw, 20px)" }}>
               and arrive on time, increasing your business.
            </Typography>

            <Box
               sx={{
               height: "auto",
               width: "max-content",
               backgroundColor: "#101921",
               display: "flex",
               padding: "10px",
               borderRadius: "5px",
               gap: 1,
               marginTop: "15px",
               }}
            >
               <Typography
               sx={{
                  color: "#2DC98A",
                  fontFamily: "Li",
               }}
               >
               To know more, contact the ParkEase admin
               </Typography>
               <PlayArrowIcon
               sx={{
                  color: "#2DC98A",
               }}
               />
            </Box>
         </Box>
         <Box
            component="img"
            src={AddCompnay}
            sx={{
               width: "250px",
               height: "auto",
               display: { xs: "none", md: "block" },
            }}
         />
         </Box>
      </Box>
   );
};

export default AddYourBss;
