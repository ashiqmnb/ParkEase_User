import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography } from "@mui/material";
import { LatLngExpression } from "leaflet";


interface MapComponentProps{
  latitude: number; 
  longitude: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude}) => {

   if(latitude == 0 || longitude == 0){
      return (
         <Box
            sx={{
               height: "100%", 
               width: "100%", 
            }}
         >
            <Typography
               sx={{
                  color:'gray',
                  textAlign:'center',
                  marginTop:'115px'
               }}
               >
               No location data available
            </Typography>
         </Box>
      )
   }

   const center: LatLngExpression = [latitude, longitude];

   return (
      <MapContainer 
         center={center} 
         zoom={13} 
         style={{ height: "100%", width: "100%", marginTop:'10px' }}
      >
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         
         <Marker position={[latitude, longitude]} >
         </Marker>
      </MapContainer>
   );
};

export default MapComponent;

