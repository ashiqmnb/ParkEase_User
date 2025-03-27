import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkInSlot, checkOutSlot, gerReservePark, getHistories } from "../api/slots";
import ReservationParking from "../components/ReservationParking";
import HistoryTable from "../components/HistoryTable";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const ReservationContainer = () => {

   const [loadingSlotId, setLoadingSlotId] = useState<string | null>(null);

   const [pageSize, setPageSize] = useState<number>(8);
   const [pageNumber, setPageNumber] = useState<number>(1);

   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPageNumber(value);
   };


   const { data: histories, refetch } = useQuery({
      queryKey: ["histories"],
      queryFn: ()=>getHistories(pageNumber, pageSize),
   });

   const { data: reservePark } = useQuery({
      queryKey: ["reservePark"],
      queryFn: gerReservePark,
   });

   const checkInMutation = useMutation({
      mutationFn:checkInSlot,
      onSuccess:(data)=>{
         toast.success(data);
         setLoadingSlotId(null)
         setTimeout(() => {
            window.location.reload();
         }, 3000);
      },
      onError:(err: any)=>{
         console.log("checkInMutation", err);
         setLoadingSlotId(null)
         // toast.error(err.error);
      }
   })

   const handleCheckIn = (slotId: string)=>{
      setLoadingSlotId(slotId)
      checkInMutation.mutate(slotId);
   }



   const checkOutMutation = useMutation({
      mutationFn:checkOutSlot,
      onSuccess:(data)=>{
         toast.success(data)
         setLoadingSlotId(null);
         setTimeout(() => {
            window.location.reload();
         }, 3000);
      },
      onError:(err:any)=>{
         setLoadingSlotId(null)
         console.log("checkOutMutation",err)
      }
   })

   const handleCheckOut = (slotId: string, historyId: string)=>{
      setLoadingSlotId(slotId);
      checkOutMutation.mutate({slotId, historyId});
   }

   useEffect(()=>{
      refetch();
   },[pageNumber, pageSize])

   return (
      <Box
         sx={{
            backgroundColor: "#ECFBF9",
            paddingY: '30px',
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            display:'flex',
            gap:2,
            flexDirection:{xs:'column', md:'row'}
         }}
      >
         <Box 
            sx={{ 
               width: {xs: '100%', md:'35%'} ,
               backgroundColor:'white',
               borderRadius:'5px',
               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
               padding:'10px',
            }}>

               <ReservationParking
                  reservations={reservePark?.reservations}
                  parkings={reservePark?.parkings}
                  handleCheckIn={handleCheckIn}
                  loadingSlotId={loadingSlotId}
                  handleCheckOut={handleCheckOut}
               />
         </Box>

         <Box
            sx={{
               width:{xs: '100%', md:'60%'},
               backgroundColor:'white',
               borderRadius:'5px',
               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
               padding:'10px',
               flex:1
            }}
            >
               <HistoryTable
                  histories={histories?.histories}
                  handlePageChange={handlePageChange}
                  page={pageNumber}
                  totalPage={histories?.totalPages}
                  pageSize={pageSize}
                  setPageSize={setPageSize}
               />
         </Box>
      </Box>
   );
};

export default ReservationContainer;
