import axios from "axios";
import { FetchCompaniesParams } from "../types/companyTypes";




export const fetchCompanies = async (params: FetchCompaniesParams) => {
   try {
      const res = await axios.get("https://localhost:7277/api/Company/user", {
         params,
      });
      return res.data.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};


export const getCompanyById = async(companyId: string)=>{
   try{
      const res = await axios.get(`https://localhost:7277/api/Company?companyId=${companyId}`,
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
}
