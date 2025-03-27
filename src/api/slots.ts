import axios from "axios";
import { CheckOutCredentials, ReserveSlotCredential } from "../types/slotTypes";

export const getSlots = async (companyId: string) => {
   try {
      const res = await axios.get(`https://localhost:7144/api/Slots?companyId=${companyId}`, 
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};



export const reserveSlot = async(values: ReserveSlotCredential)=>{
   try{
      await axios.post('https://localhost:7050/api/Coin/reserve-slot',
         values,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const getHistories = async(pageNumber: number, pageSize: number)=>{
   try{
      const res =  await axios.get(`https://localhost:7144/api/History/userId/${pageNumber}/${pageSize}`,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const gerReservePark = async()=>{
   try{
      const res =  await axios.get('https://localhost:7144/api/Slots/reserve-parking',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const checkInSlot = async(slotId: string)=>{
   try{
      const res = await axios.patch(`https://localhost:7144/api/Slots/check-in/${slotId}`,
         {},
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}



export const checkOutSlot = async (values: CheckOutCredentials)=>{
   try{
      var res = await axios.patch('https://localhost:7144/api/Slots/check-out',
         values,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      )
      return res.data.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}