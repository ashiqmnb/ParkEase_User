import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Parking, Reservation } from "../types/slotTypes";

interface ReservationParkingProps {
   reservations: Reservation[];
   parkings: Parking[];
   handleCheckIn: (slotId: string) => void;
   loadingSlotId: string | null,
   handleCheckOut: (slotId: string, historyId: string)=>void
}

const ReservationParking: React.FC<ReservationParkingProps> = ({
   reservations,
   parkings,
   handleCheckIn,
   loadingSlotId,
   handleCheckOut
}) => {
   return (
      <Box
         sx={{
            display: "flex",gap: 2,
            flexDirection: { xs: "column", sm: "row", md: "column" },
         }}
      >
         {reservations?.length > 0 ? (
            <Box sx={{ flex: 1 }}>
               <Typography sx={{ fontWeight: "600", marginBottom: "10px" }}>
                  Active Reservations
               </Typography>
               {reservations?.map((res, index) => (
                  <Box
                     key={index}
                     sx={{
                        backgroundColor: "#ECFBF9",
                        marginTop: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                     }}
                  >
                     <Typography sx={{ fontSize: "14px" }}>
                        Slot Name: <strong>{res.name}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Type: <strong>{res.type}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Status: <strong>{res.status}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Vehicle Number: <strong>{res.vehicleNumber}</strong>
                     </Typography>
                     <Box sx={{ marginTop: "10px", display: "flex", gap: 1 }}>
                        <Button
                           sx={{
                              backgroundColor: "red",
                              height: "30px",width: "30%",
                              color: "white",
                              textTransform: "none",
                           }}
                        >
                           Cancel
                        </Button>
                        <Button
                           onClick={() => handleCheckIn(res.slotId)}
                              sx={{
                              backgroundColor: "#2DC98A",
                              height: "30px",
                              color: "white",width: "70%",
                              textTransform: "none",
                           }}
                           disabled={loadingSlotId == res.slotId}
                        >
                           {loadingSlotId == res.slotId ? (
                              <CircularProgress size={22} sx={{ color: "white" }} />
                           ) : ( 
                              "Mark as checked in"
                           )}
                        </Button>
                     </Box>
                  </Box>
               ))}
            </Box>
            ) : (
            <Typography sx={{ fontWeight: "600", color: "gray" }}>
               No active reservarions
            </Typography>
         )}

         {parkings?.length > 0 ? (
            <Box sx={{ flex: 1 }}>
               <Typography sx={{ fontWeight: "600" }}>Active Parkings</Typography>
               {parkings?.map((par, index) => (
                  <Box
                     key={index}
                     sx={{
                        backgroundColor: "#ECFBF9",
                        marginTop: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                     }}
                     >
                     <Typography sx={{ fontSize: "14px" }}>
                        Slot Name: <strong>{par.name}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Type: <strong>{par.type}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Status: <strong>{par.status}</strong>
                     </Typography>
                     <Typography sx={{ fontSize: "14px" }}>
                        Vehicle Number: <strong>{par.vehicleNumber}</strong>
                     </Typography>
                     <Box sx={{ marginTop: "10px", display: "flex", gap: 1 }}>
                        <Button
                           onClick={()=>handleCheckOut(par.slotId, par.historyId)}
                           sx={{
                              backgroundColor: "#2DC98A",
                              height: "30px",width: "100%",
                              color: "white",
                              textTransform: "none",
                           }}
                           >
                           {loadingSlotId == par.slotId ? (
                              <CircularProgress size={22} sx={{ color: "white" }} />
                           ) : ( 
                              "Mark as checked out"
                           )}
                        </Button>
                  </Box>
               </Box>
               ))}
            </Box>
            ) : (
            <Typography sx={{ fontWeight: "600", color: "gray" }}>
               No active parkings
            </Typography>
         )}
      </Box>
   );
};

export default ReservationParking;
