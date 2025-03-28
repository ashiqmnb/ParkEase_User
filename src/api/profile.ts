import axios from "axios";

export const getProfile = async () => {
   try {
      var res = await axios.get('https://localhost:7277/api/User/userId',
         {
            headers:{
               Authorization: `Bearer ${localStorage.getItem("token")}`
            }
         }
      );
      return res.data.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};



export const updateProfile = async(values : any)=>{
   try{
      await axios.patch('https://localhost:7277/api/User/profile-update',
         values,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      )
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}
