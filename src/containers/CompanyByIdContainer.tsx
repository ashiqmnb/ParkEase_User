import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CompanyDetails from "../components/companyById/CompanyDetails";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCompanyById } from "../api/company";
import MapAndImages from "../components/companyById/MapAndImages";
import { getSlots, reserveSlot } from "../api/slots";
import SlotsHead from "../components/companyById/SlotsHead";
import SlotsBody from "../components/companyById/SlotsBody";
import { useState } from "react";
import { ReserveSlotCredential, Slot } from "../types/slotTypes";
import SlotDetailsModal from "../components/modals/SlotDetailsModal";
import { toast } from "sonner";
import { getCurrentCoins } from "../api/payment";

const CompanyByIdContainer = () => {
   const { companyId } = useParams<{ companyId: string }>();

   const [openSlot, setOpenSlot] = useState<boolean>(false)
   const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

   const navigate = useNavigate();

   const handleSlotClick = (slot:Slot)=>{
      setSelectedSlot(slot);
      setOpenSlot(true);
   }

   const { data: slots, isPending: slotsPending } = useQuery({
      queryKey: ["slots"],
      queryFn: ()=>getSlots(companyId || ''),
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
   });


   const { data } = useQuery({
      queryKey: ["company"],
      queryFn: () => getCompanyById(companyId || ""),
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
   });


   const [vehicleNumber, setVehicleNumber] = useState<string>("");
   const [error, setError] = useState("");

   const validateVehicleNumber = (number: string) => {
      const pattern = /^[A-Z]{2} \d{2} [A-Z] \d{4}$/;
      return pattern.test(number);
   };

   const reserveSlotMutation = useMutation({
      mutationFn:reserveSlot,
      onSuccess: async ()=>{
         toast.success('Slot reserved successfully, see more options in reservations page');
         setOpenSlot(false);
         navigate('/reservations')
         var coins = await getCurrentCoins();
         localStorage.setItem('coins', coins)
      },
      onError:(err:any)=>{
         toast.error(err.error);
      }
   })

   const handleReserve = () => {
      if (!validateVehicleNumber(vehicleNumber)) {
         setError("Invalid vehicle number. Format: KA 01 AB 1234");
         return;
      }
      var values: ReserveSlotCredential ={
         slotId: selectedSlot?.id || "",
         companyId: companyId || "",
         type: data?.type,
         vehicleNumber
      }
      reserveSlotMutation.mutate(values);
      setError("");
   };



   return (
      <Box>
         <CompanyDetails
            name={data?.name}
            profile={data?.profile}
            description={data?.description}
            email={data?.email}
            phone={data?.phone}
            place={data?.place}
            district={data?.district}
            state={data?.state}
            postalCode={data?.postalCode}
            type={data?.type}

            twoWheeler={slots?.twoWheeler}
            fourWheeler={slots?.fourWheeler}
         />

         <SlotsHead
            available={slots?.available}
            parked={slots?.parked}
            reserved={slots?.reserved}
            total={slots?.total}
            fourWheeler={slots?.fourWheeler}
            twoWheeler={slots?.twoWheeler}
         />

         <SlotsBody
            slots={slots?.slots}
            handleSlotClick={handleSlotClick}
            onClose={()=>setOpenSlot(false)}
            open={openSlot}
            selectedSlot={selectedSlot}
            isPending={slotsPending}
         />

         <SlotDetailsModal
            open={openSlot}
            onClose={()=>setOpenSlot(false)}
            slot={selectedSlot}
            error={error}
            handleReserve={handleReserve}
            setVehicleNumber={setVehicleNumber}
            vehicleNumber={vehicleNumber}
            isPending={reserveSlotMutation.isPending}
         />

         <MapAndImages
            images={data?.images}
            latitude={data?.latitude}
            longitude={data?.longitude}
         />
      </Box>
   );
};

export default CompanyByIdContainer;
