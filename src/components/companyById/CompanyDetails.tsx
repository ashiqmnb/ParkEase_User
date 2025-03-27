import { Box, Typography } from "@mui/material";


interface CompanyDetailsProps{
   name: string;
   profile: string;
   description: string;
   twoWheeler: number;
   fourWheeler: number;
   phone: string;
   email: string;
   place: string;
   district: string;
   state: string;
   postalCode: string;
   type: string;

}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
   name,
   profile,
   description,
   twoWheeler,
   fourWheeler,
   email,
   phone,
   place,
   district,
   state,
   postalCode, 
   type
}) => {
   return (
      <Box
         sx={{
            marginX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            marginY:'30px',
            backgroundColor: "#ECFBF9",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            padding:'20px'
         }}
      >
         <Typography
            sx={{
               fontFamily: "Lib",
               fontSize: "clamp(18px, 2vw, 24px)",
            }}
         >
            {name}
         </Typography>
         {/* profile section */}
         <Box 
            sx={{
               display:'flex',
               flexDirection: {xs:'column', md:'row'},
               gap:2
            }}
            >
               {profile ? 
                  <Box
                     component="img"
                     src={profile}
                     sx={{
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        height: "200px",
                        width: "200px",
                     }}
                  />
                  :
                  <Box 
                     sx={{
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        height: "250px",
                        width: "250px",
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                     }}
                     >
                     <Typography sx={{color:'gray'}}>
                        No profile added
                     </Typography>
                  </Box>
               }

               <Box 
                  sx={{
                     display:'flex', 
                     flexDirection:'column', 
                     width: {xs:'100%', md:'35%'}, 
                     gap:1, flex:1}}>
                  <Box
                     sx={{
                        backgroundColor:'white',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        flex:1,
                     }}
                     >
                     <Typography sx={{ fontSize: "clamp(12px, 2vw, 16px)", fontWeight:'600' }}>
                        Description
                     </Typography>
                     {description ? 
                        <Typography sx={{fontSize: "clamp(8px, 2vw, 12px)"}} >
                           {description}
                        </Typography>
                        :
                        <Typography sx={{color:'gray'}}>
                           No Description added
                        </Typography>
                     }
                  </Box>
                  <Box 
                     sx={{
                        display:'flex', 
                        alignItems:'center',gap:2, 
                        backgroundColor:'white',
                        width:'100%',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                     }}>
                     <Typography sx={{ fontSize:'16px',}}>
                        Listed Slots
                     </Typography>
                     <Typography sx={{ fontSize:'14px',  fontWeight:'600',}}>
                        {twoWheeler} (2W)  {fourWheeler}(4W)
                     </Typography>
                  </Box>
               </Box>


               <Box 
                  sx={{
                     display:'flex', 
                     flexDirection:'column', 
                     width: {xs:'100%', md:'35%'},  
                     gap:1, flex:1}}>
                  <Box
                     sx={{
                        backgroundColor:'white',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        flex:1
                     }}
                     >
                     <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                        Contact
                     </Typography>
                     <Typography sx={{ fontSize:'14px'}} >
                        Email :- {email}
                     </Typography>
                     <Typography sx={{ fontSize:'14px'}} >
                       Phone :-  {phone}
                     </Typography>
                  </Box>

                  <Box
                     sx={{
                        backgroundColor:'white',
                        padding:'10px',
                        borderRadius:'5px',
                        fontFamily:'Inter',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                     }}
                     >
                     <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                        Address
                     </Typography>

                     {place && district && state ? 
                        <Typography sx={{ fontSize:'14px'}}>
                           {place}, {district}, {state}, {postalCode}
                        </Typography>
                        :
                        <Typography sx={{color:'gray'}}>
                           No address added
                        </Typography>
                     }

                     <Typography
                        sx={{
                           backgroundColor:'lightblue',
                           padding:'5px',
                           borderRadius:'5px',
                           fontFamily:'Inter',
                           boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                           marginTop:'10px'
                        }}
                        >
                        Type : {type} Parking Service
                     </Typography>
                  </Box>
               </Box>
         </Box>
      </Box>
   );
};

export default CompanyDetails;
