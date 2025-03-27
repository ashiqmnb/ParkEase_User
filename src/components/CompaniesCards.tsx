import { Box, Typography } from "@mui/material";
import { Company } from "../types/companyTypes";
import CustomPagination from "./CustomPagination";
import { useNavigate } from "react-router-dom";

interface CompaniesCardsProps {
   companies: Company[];
   totalPages: number;
   pageNumber: number;
   handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CompaniesCards: React.FC<CompaniesCardsProps> = ({
   companies,
   handlePageChange,
   pageNumber,
   totalPages,
}) => {

   const navigate = useNavigate();

   return (
      <Box
         sx={{
            marginY: "40px",
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
         }}
         >
         <Box
            sx={{
               display: "flex",
               flexWrap: "wrap",
               marginY: "40px",
               gap: 2,
               justifyContent: "space-between",
            }}
         >
            {companies?.map((company, index) => (
               <Box
                  key={index}
                  onClick={()=> navigate(`/slots/${company.id}`)}
                  sx={{
                     height: "auto",
                     width: { xs: "48%", md: "23%" },
                     backgroundColor: "#ECFBF9",
                     borderRadius:'10px',
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                     padding:'10px',
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'space-between',
                     gap:1,
                     cursor: 'pointer'
                  }}
               >
                  <Typography
                     sx={{
                        fontFamily:'Li',
                        fontSize:{sx:'14px', md:'18px'}
                     }}
                     >
                     {company.name}
                  </Typography>
                  <Box
                     component='img'
                     src={company.profile}
                     sx={{
                        width:'100%',
                        height:'auto',
                        borderRadius:'10px'
                     }}
                  />
                  <Typography sx={{fontSize:{xs:'14px', md:'16px'}}}>
                     {company.place}, {company.district}, {company.state}, {company.postalCode}
                  </Typography>
                  <Typography
                     sx={{
                        fontSize:'14px',
                        backgroundColor: company.type == 'Public' ? '#6FE5A7' : '#2DAFC9',
                        padding:'5px',
                        borderRadius:'5px',
                        textAlign:'center'
                     }}
                     >
                     {company.type} Parking Service
                  </Typography>
               </Box >
            ))}
         </Box>
         <CustomPagination
            count={totalPages}
            page={pageNumber}
            handleChange={handlePageChange}
         />
      </Box>
   );
};

export default CompaniesCards;
