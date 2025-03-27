import { Box, Typography } from "@mui/material";

interface SlotsHeadProps {
   total: number;
   twoWheeler: number;
   fourWheeler: number;
   available: number;
   reserved: number;
   parked: number;
}

const SlotsHead: React.FC<SlotsHeadProps> = ({
   total,
   twoWheeler,
   fourWheeler,
   available,
   reserved,
   parked,
}) => {
   return (
      <Box sx={{marginX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" }}}>
         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} >
            <Typography
               sx={{
                  fontFamily: "Inter",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  fontWeight: "600",
                  color: "#101921",
               }} 
            >
               Listed Slots
            </Typography>
            <Box sx={{ display: "flex" }}>
               <Typography
                  sx={{
                     backgroundColor: "rgba(0, 0, 0, 0.3)",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px 0 0 5px",
                     fontWeight: "600",
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {total} Total
               </Typography>
               <Typography
                  sx={{
                     backgroundColor: "rgba(45, 201, 138, 0.3)",
                     paddingX: "15px",
                     paddingY: "5px",
                     fontWeight: "600",
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {twoWheeler} 2W
               </Typography>
               <Typography
                  sx={{
                     backgroundColor: "rgba(0, 0, 0, 0.3)",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "0 5px 5px 0",
                     fontWeight: "600",
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {fourWheeler} 4W
               </Typography>
            </Box>
         </Box>

         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginTop:'30px',
               flexDirection:{xs:'column', md:'row'},
               gap:1
            }}
            >
            <Typography
               sx={{
                  fontFamily: "Inter",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  fontWeight: "600",
                  color: "gray",
               }}
            >
               Select a slot to reserve
            </Typography>

            <Box sx={{ display: "flex",gap:2}}>
               <Typography
                  sx={{
                     backgroundColor: "#D9D9D9",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px",
                     fontWeight: "600",
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {available} Available
               </Typography>
               <Typography
                  sx={{
                     backgroundColor: "#2DC98A",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px",
                     fontWeight: "600",
                     color:'white',
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {reserved} Reserved
               </Typography>
               <Typography
                  sx={{
                     backgroundColor: "#2F7A58",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px",
                     fontWeight: "600",
                     color:'white',
                     fontSize: "clamp(14px, 2vw, 16px)"
                  }}
               >
                  {parked} Parked
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default SlotsHead;
