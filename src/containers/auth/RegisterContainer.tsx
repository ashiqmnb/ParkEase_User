import AuthBgImage from "../../components/auth/AuthBgImage";
import { Box } from "@mui/material";
import AuthBanner from "../../components/auth/AuthBanner";
import RegisterForm from "../../components/auth/RegisterForm";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/auth";
import { toast } from "sonner";

const RegisterContainer = () => {

   const navigate = useNavigate();

   const registerMutation = useMutation({
      mutationFn: register,
      onSuccess:(res)=>{
         console.log("register res", res)
         toast.success(res.data)
         setTimeout(() => {
            navigate('/auth/verifyotp?type=register')
         }, 3000);
      },
      onError:(err:any)=>{
         console.log("register error", err)
         toast.error(err.error);
      }
   })

   const validationSchema = yup.object({
      name: yup
         .string()
         .min(5, "Name should be at least 5 characters long")
         .required("Name is required"),
      email: yup
         .string()
         .email("Enter a valid email")
         .required("Email is required"),
      password: yup
         .string()
         .min(8, "Password should be of minimum 8 characters length")
         .matches(
         /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
         "Password must contain at least one letter, one capital letter, one number, and one special character."
         )
         .required("Password is required"),
      confirmPassword: yup
         .string()
         .oneOf([yup.ref("password"), undefined], "Passwords must match")
         .required("Confirm password is required"),
   });

   const formik = useFormik({
      initialValues: {
         name:'',
         email: '',
         password: '',
         confirmPassword:''
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         registerMutation.mutate(values);
         localStorage.setItem('email', values.email)
      },
   });

  return (
    <AuthBgImage>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
         <RegisterForm
            formik={formik}
            isPending={registerMutation.isPending}
         />
        <AuthBanner />
      </Box>
    </AuthBgImage>
  );
};

export default RegisterContainer;
