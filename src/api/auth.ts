import axios from "axios";
import { LoginCredential, RegisterCredential, ResetPwCredentials, verifyEmailCredentials } from "../types/authTypes";


export const login = async (credential: LoginCredential) => {
   try {
      const res = await axios.post(
         "https://localhost:7277/api/Auth/user/login",
         credential
      );
      return res.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};


export const register = async(credential: RegisterCredential) => {
   try{
      const res = await axios.post(
         'https://localhost:7277/api/Auth/user/register',
         credential
      )
      return res.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const verifyEmail = async(credetials: verifyEmailCredentials) => {
   if(credetials.type == "register"){
      try{
         const res = await axios.post(`https://localhost:7277/api/Auth/user/verify-email?email=${credetials.email}&otp=${credetials.otp}`)
         return res.data
      }
      catch (err: any) {
         return Promise.reject(err.response.data);
      }
   }
   if(credetials.type == "reset"){
      try{
         const res = await axios.post(`https://localhost:7277/api/Auth/user/verify-otp-reset-password?email=${credetials.email}&otp=${credetials.otp}`)
         return res.data;
      }
      catch (err: any) {
         return Promise.reject(err.response.data);
      }
   }
}


export const forgotPw = async(email:string)=>{
   try{
      const res = await axios.post(`https://localhost:7277/api/Auth/user/forgot-password?email=${email}`)
      return res.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const resetpw = async (credential: ResetPwCredentials)=>{
   try{
      const res = await axios.patch(`https://localhost:7277/api/Auth/user/reset-password`,credential)
      return res.data
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}