import {
   Box,
   Typography,
   TextField,
   MenuItem,
   Select,
   FormControl,
   InputLabel,
} from "@mui/material";

interface CompaniesHeadProps {
   search: string;
   setSearch: (value: string) => void;
   type: string;
   setType: (value: string) => void;
   pageSize: number;
   setPageSize: (value: number) => void;
}

const CompaniesHead: React.FC<CompaniesHeadProps> = ({
   search,
   setSearch,
   type,
   setType,
   pageSize,
   setPageSize,
}) => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            marginY: "40px",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
         }}
      >
         <Typography sx={{ fontFamily: "Libre Baskerville", fontSize: 18, fontWeight: 600 }}>
            Find Your Perfect Parking Spot
         </Typography>

         <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
               size="small"
               label="Search Company"
               variant="outlined"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               sx={{
                  width: {xs: '150px', md:'220px'},
                  "& .MuiInputBase-input": { fontSize: "14px" },
                  "& .MuiInputLabel-root": { fontSize: "12px" },
               }}
            />

            <FormControl sx={{ minWidth: 150 }} size="small">
               <InputLabel>Type</InputLabel>
               <Select
                  sx={{ fontSize: "14px" }}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  label="Type"
               >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="public">Public</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
               </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 100 }} size="small">
               <InputLabel>Page Size</InputLabel>
               <Select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  label="Page Size"
                  sx={{ fontSize: "14px" }}
               >
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </Box>
   );
};

export default CompaniesHead;
