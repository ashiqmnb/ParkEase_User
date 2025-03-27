import { Box, Modal, Typography, Button, TextField, CircularProgress } from "@mui/material";
import {  Slot } from "../../types/slotTypes";

interface SlotDetailsModalProps {
   open: boolean;
   onClose: () => void;
   slot: Slot | null;
   vehicleNumber: string;
   handleReserve: ()=>void;
   error: string;
   setVehicleNumber: (value:string)=> void;
   isPending: boolean;
}

const SlotDetailsModal: React.FC<SlotDetailsModalProps> = ({
   open,
   onClose,
   slot,
   vehicleNumber,
   handleReserve,
   error,
   setVehicleNumber,
   isPending
}) => {




   if (!slot) return null;

   return (
      <Modal open={open} onClose={onClose}>
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 400,
               bgcolor: "white",
               boxShadow: 24,
               borderRadius: 2,
               p: 4,
            }}
            >
            <Typography sx={{fontSize:'24px', fontWeight:'600', textAlign:'center'}}>
               {slot.name}
            </Typography>

            <Box sx={{ display:'flex', gap:2, marginTop:'10px'}}>
               <Typography
                  sx={{
                     backgroundColor: "#D9D9D9",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px",
                     fontWeight: "600",
                     flex:1,
                     textAlign:'center'
                  }}
                  >
                  {slot.status}
               </Typography>
               <Typography
                  sx={{
                     backgroundColor: "#D9D9D9",
                     paddingX: "15px",
                     paddingY: "5px",
                     borderRadius: "5px",
                     fontWeight: "600",
                     flex:1,
                     textAlign:'center'
                  }}
                  >
                  {slot.type == "FourWheeler" ? '4 Wheeler':'2 Wheeler'}
               </Typography>
            </Box>


            {slot?.vehicleNumber ? 
            <Box m={2}>
               {/* <Typography>
                  <strong>User ID:</strong> {slot.userId ?? "No User Engaged"}
               </Typography> */}
               <Typography>
                  <strong>Vehicle Number:</strong> {slot.vehicleNumber ?? "No Vehicle Engaged"}
               </Typography>
            </Box>
            :
            <Box sx={{display:'flex', flexDirection:'column', gap:1, marginY:'20px'}}>
               <Typography sx={{fontSize:'14px'}}>Reserve Slot Now!!</Typography>
               <TextField
                  label="Vehicle Number"
                  variant="outlined"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                  error={!!error}
                  helperText={error}
               />
               <Button
                  sx={{
                     color:'white',
                     backgroundColor:'#2DC98A',
                     textTransform:'none'
                  }}
                  onClick={handleReserve}>
                  {isPending ? (
                     <CircularProgress size={22} sx={{ color: "white" }} />
                  ) : (
                     "Send"
                  )}
               </Button>
            </Box>
            }

            <Box mt={3} textAlign="right">
               <Button
                  sx={{
                  backgroundColor: "#2DC98A",
                  color: "white",
                  textTransform: "none",
                  }}
                  onClick={onClose}
               >
                  Close
               </Button>
            </Box>
         </Box>
      </Modal>
   );
};

export default SlotDetailsModal;
