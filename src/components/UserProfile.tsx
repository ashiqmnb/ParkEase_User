import { Box, Button, Typography } from "@mui/material"
import { TbCoinRupeeFilled } from "react-icons/tb"


interface UserProfileProps{
   profile: string;
   name: string;
   email: string;
   phone: string;
   coins: number;
   openLogout: ()=> void,
   openUpdate: ()=> void,
}

const UserProfile: React.FC<UserProfileProps> = ({coins, email, name, phone, profile, openLogout, openUpdate}) => {
   return (
      <Box 
         sx={{
            marginX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            marginY:'40px',
            padding: "30px",
            backgroundColor:'white',
            borderRadius:'10px',
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display:'flex',
            flexDirection:{xs:'column', sm:'row'},
            justifyContent:'space-between',
            gap:2
         }}
            >
            <Box>
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
                        height: "200px",
                        width: "200px",
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
            </Box>
            <Box sx={{display:'flex',flex:1, flexDirection:'column', justifyContent:'space-between'}}>
               <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                  <Typography sx={{ fontWeight:'600', fontSize:'20px'}}>
                     {name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }} >
                     <Typography sx={{ fontWeight: "600" }}>{coins}</Typography>
                     <TbCoinRupeeFilled
                        style={{
                           color: "#FFD700",
                           fontSize: "25px",
                        }}
                     />
                  </Box>
               </Box>

               <Box>
                  <Typography>
                     Email : <strong>{email}</strong>
                  </Typography>
                  <Typography>
                     Phone : <strong>{phone ? phone : "Phone number not found"}</strong>
                  </Typography>
               </Box>

               <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
                  <Button
                     onClick={openLogout}
                     sx={{
                        width:'150px',
                        backgroundColor:'rgba(255, 0, 0, 0.8)',
                        color:'white',
                        textTransform:'none'
                     }}
                     >
                     Logout
                  </Button>
                  <Button
                     onClick={openUpdate}
                     sx={{
                        width:'150px',
                        backgroundColor:'#2DC98A',
                        color:'white',
                        textTransform:'none'
                     }}
                     >
                     Update Profile
                  </Button>
               </Box>
            </Box>
      </Box>
   )
}

export default UserProfile
