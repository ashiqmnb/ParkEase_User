import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProps } from "formik";
import React from "react";

interface RegisterFormProps {
   formik: FormikProps<{ 
      name: string,
      email: string,
      password: string,
      confirmPassword:string
   }>;
   isPending:boolean
}

const RegisterForm: React.FC<RegisterFormProps> = ({formik, isPending}) => {
   return (
      <Box
         sx={{
         width: "400px",
         height: "450px",
         backgroundColor: "white",
         borderRadius: "20px",
         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
         position: "relative",
         }}
         >
         <Box
         sx={{
            width: "360px",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            paddingTop: "10px",
         }}
         >
         <Typography
            sx={{
               marginTop: "20px",
               textAlign: "center",
               fontSize: "24px",
               fontWeight: "1000",
               fontFamily: "Libre Baskerville",
               color: "#101921",
            }}
         >
            Sign Up
         </Typography>
         <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
               marginTop: "20px",
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               gap: 2,
            }}
         >
            <TextField
               sx={{ color: "#7940CF", width: "80%" }}
               label="Name"
               name="name"
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={formik.touched.name && Boolean(formik.errors.name)}
               helperText={formik.touched.name && formik.errors.name}
               required
            />
            <TextField
               sx={{ color: "#7940CF", width: "80%" }}
               label="Email"
               name="email"
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
               required
            />
            <TextField
               sx={{ color: "#7940CF", width: "80%" }}
               label="Password"
               name="password"
               value={formik.values.password}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={formik.touched.password && Boolean(formik.errors.password)}
               helperText={formik.touched.password && formik.errors.password}
               required
            />
            <TextField
               sx={{ color: "#7940CF", width: "80%" }}
               label="ConfirmPassword"
               name="confirmPassword"
               type="password"
               value={formik.values.confirmPassword}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
               helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
               required
            />
            <Button
               type="submit"
               sx={{
               width: "80%",
               background: "#101921",
               color: "white",
               textTransform: "none",
               }}
            >
               {isPending ? (
               <CircularProgress size={24} sx={{ color: "white" }} />
               ) : (
               "Sign Up"
               )}
            </Button>
         </Box>
         </Box>
      </Box>
  );
};

export default RegisterForm;
