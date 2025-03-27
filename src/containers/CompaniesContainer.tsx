import { Box } from "@mui/material";
import CompaniesHead from "../components/CompaniesHead";
import { useEffect, useState } from "react";
import { FetchCompaniesParams } from "../types/companyTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "../api/company";
import CompaniesCards from "../components/CompaniesCards";

const CompaniesContainer = () => {
   const [search, setSearch] = useState<string>("");
   const [type, setType] = useState<string>("");
   const [pageSize, setPageSize] = useState<number>(4);
   const [pageNumber, setPageNumber] = useState<number>(1);
   
   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPageNumber(value);
   };

   const params :FetchCompaniesParams = {
      pageNumber,
      pageSize,
      type,
      search
   }
   
   const {data, refetch} = useQuery({
      queryKey:['companies'],
      queryFn:()=>fetchCompanies(params),
   })

   useEffect(()=>{
      refetch();
   },[params])
   
  return (
      <Box>
         <CompaniesHead
            search={search}
            setSearch={setSearch}
            type={type}
            setType={setType}
            pageSize={pageSize}
            setPageSize={setPageSize}
         />

         <CompaniesCards
            companies={data?.companies}
            handlePageChange={handlePageChange}
            pageNumber={pageNumber}
            totalPages={data?.totalPages}
         />

      </Box>
  );
};

export default CompaniesContainer;
