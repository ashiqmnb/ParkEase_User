import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/profile";
import { useState } from "react";
import LogoutModal from "../components/modals/LogoutModal";
import UpdateProfileModal from "../components/modals/UpdateProfileModal";

const ProfileContainer = () => {
   
   const navigate = useNavigate();

   const [openLogout, setOpenLogout] = useState<boolean>(false);
   const [openUpdate, setOpenUpdate] = useState<boolean>(false);

   const [preview, setPreview] = useState<string | null>(null);
   const [image, setImage] = useState<File | null>(null);
   
   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files?.[0];
      setImage(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };


   const handleLogout = () => {
      localStorage.clear();
      navigate("/");
   };

   const { data: user, refetch } = useQuery({
      queryKey: ["user"],
      queryFn: getProfile,
   });

   console.log("profile data", user);

   return (
      <Box>
         <UserProfile 
            coins={user?.coins}
            email={user?.email}
            name={user?.name}
            phone={user?.phone}  
            profile={user?.profile}
            openLogout={()=>setOpenLogout(true)}
            openUpdate={()=>setOpenUpdate(true)}
         />
         
         <LogoutModal
            open={openLogout}
            onClose={()=>setOpenLogout(false)}
            onConfirm={handleLogout}
         />

         <UpdateProfileModal
            open={openUpdate}
            handleImageUpload={handleImageUpload}
            image={image}
            preview={preview}
            name={user?.name}
            phone={user?.phone}
            onClose={()=>setOpenUpdate(false)}
            refetch={refetch}
         />
      </Box>
   );
};

export default ProfileContainer;
