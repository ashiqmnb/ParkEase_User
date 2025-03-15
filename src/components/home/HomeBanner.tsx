import { Box, Typography } from "@mui/material";
import HomeBgImg from "../../assets/images/homeBgImg.jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from "react-router-dom";

const headStyle = {
   fontSize: "clamp(24px, 5vw, 48px)",
   color:'white',
   fontFamily:'Protest Strike'
}

const HomeBanner = () => {

   const navigate = useNavigate();

   return (
      <Box
         sx={{
            position: "relative",
            height: { xs: "250px", md: "400px" },
            width: "100%",
            backgroundImage: `url(${HomeBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
         }}
      >
         <Box>
            <Typography sx={headStyle}>
               Reserve Parking Slot
            </Typography>
            <Typography sx={headStyle}>
               From Your Favorite Shop
            </Typography>
            <Typography
               sx={{
                  fontSize: "clamp(12px, 3vw, 24px)",
                  color:'white',
                  fontFamily:'Lib'
               }}
            >
               Reserve, Park, Relax
            </Typography>
         </Box>

         <Box
            sx={{
               height:'40px',
               width: "clamp(150px, 30vw, 250px)",
               backgroundColor:'white',
               borderRadius:"5px",
               display:'flex',
               justifyContent:'space-evenly',
               alignItems:'center',
               marginTop:'80px',
               cursor:'pointer'
            }}
            onClick={()=>navigate('/slots')}
            >
               <Typography
                  sx={{
                     fontSize: "clamp(14px, 2vw, 20px)",
                     fontWeight:'600',
                     color:'rgba(0,0,0, 0.8)'
                  }}
                  >
                  Find slots for you
               </Typography>
               <PlayArrowIcon sx={{color:'rgba(0,0,0, 0.8)'}}/>
         </Box>
      </Box>
   );
};

export default HomeBanner;
