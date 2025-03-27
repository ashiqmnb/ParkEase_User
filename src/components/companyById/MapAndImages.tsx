import { Box, Typography } from "@mui/material";
import MapComponent from "./MapComponent";


interface MapAndImagesProps{
   images: string[] | null;
   latitude: number;
   longitude: number;
}

const MapAndImages:React.FC<MapAndImagesProps> = ({images, latitude, longitude}) => {

   return (
      <Box
         sx={{
            marginX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            padding: "20px",
            backgroundColor: "#ECFBF9",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            marginY: "30px",
            display: "flex",
            gap: 2,
            flexDirection:{xs:'column', md:'row'}
         }}
      >
         <Box sx={{ height: "auto", width: {xs:'100%', md:'40%'}, }} >
            <Typography>Images</Typography>
            <Box
               sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
               >
               {images && images.length > 0 ? (
                  <Box sx={{ height:'100%', width:'100%' }} >
                     <Box component='img' src={images[0]}
                        sx={{
                           height: "300px",
                           width: "100%",
                           objectFit: "cover",
                           borderRadius: "10px"
                        }}
                     />
                     <Box sx={{display:'flex', gap:1}}>
                        <Box component='img' src={images[1]}
                           sx={{
                              height: "200px",
                              width: "50%",
                              objectFit: "cover",
                              borderRadius: "10px"
                           }}
                        />
                        <Box component='img' src={images[2]}
                           sx={{
                              height: "200px",
                              width: "50%",
                              objectFit: "cover",
                              borderRadius: "10px"
                           }}
                        />
                     </Box>
                  </Box>
               ) : (
                  <Box 
                     sx={{
                        display:'flex', 
                        flexDirection:'column', 
                        gap:2,marginTop:'100px', 
                        justifyContent:'center', 
                        alignItems:'center'
                     }}>
                     <Typography color="gray">No images added</Typography>
                  </Box>
               )}
            </Box>
         </Box>
         <Box sx={{ height: {xs:'400px', md:'500px'},  width: {xs:'100%', md:'60%'}, display:'flex', flexDirection:'column', minHeight:'400px' }}>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <Typography>Mapview</Typography>
            </Box>
            <MapComponent
               latitude={latitude || 0}
               longitude={longitude || 0}
               />
         </Box>
      </Box>
   );
};
export default MapAndImages;
