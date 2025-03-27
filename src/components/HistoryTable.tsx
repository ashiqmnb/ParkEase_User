import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { History } from '../types/slotTypes'
import CustomPagination from './CustomPagination';

interface HistoryTableProps{
   histories: History[],
   totalPage: number,
   page: number,
   handlePageChange: (_: React.ChangeEvent<unknown>, value: number)=>void,
   pageSize: number,
   setPageSize: (value: number) => void;
}

const tableHeadStyle = {
   fontFamily: "Inter",
   fontWeight: "600",
   height: "50px",
   padding: "5px",
   lineHeight: "1",
   fontSize:{xs:'12px', sm:'16px'}
};

const tableContentStyle = {
   fontFamily: "Inter",
   height: "40px",
   padding: "5px",
   ineHeight: "1",
   cursor: "pointer",
   fontSize:{xs:'12px', sm:'16px'}
};


const HistoryTable: React.FC<HistoryTableProps> = ({histories, totalPage, page, handlePageChange, pageSize, setPageSize}) => {

   const starting = pageSize*(page-1)+1 ;

   return (
      <Box>
         <Box sx={{marginBottom:'10px', display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{fontWeight:'600'}}>
               Parking History
            </Typography>
            <FormControl sx={{ minWidth: 100 }} size="small">
               <InputLabel>Page Size</InputLabel>
               <Select 
                  value={pageSize} 
                  onChange={(e) => setPageSize(Number(e.target.value))} 
                  label="Page Size"
                  sx={{ fontSize: "14px" }}
               >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
               </Select>
            </FormControl>
         </Box>

         {histories?.length > 0 ? 
            <Box>
               <TableContainer component={Paper}>
                  <Table>
                     <TableHead>
                        <TableRow sx={{height:'40px', backgroundColor:'#2DC98A'}}>
                           <TableCell sx={{...tableHeadStyle, paddingLeft:'20px'}}>Sl No</TableCell>
                           <TableCell sx={tableHeadStyle}>Slot Name</TableCell>
                           <TableCell sx={tableHeadStyle}>Vehicle No</TableCell>
                           <TableCell sx={tableHeadStyle}>Check In</TableCell>
                           <TableCell sx={tableHeadStyle}>Check Out</TableCell>
                           <TableCell sx={tableHeadStyle}>Date</TableCell>
                        </TableRow>
                     </TableHead>

                     <TableBody>
                        {histories?.map((his, index)=>(
                           <TableRow
                              key={index}
                              sx={{
                                 height: "40px",
                                 backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
                              }}
                              >
                              <TableCell sx={{...tableContentStyle, paddingLeft:'20px'}}>{index + starting}</TableCell>
                              <TableCell sx={tableContentStyle}>{his.slotName}</TableCell>
                              <TableCell sx={tableContentStyle}>{his.vehicleNumber}</TableCell>
                              <TableCell sx={tableContentStyle}>
                                 {new Date(his.checkIn).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true })}
                              </TableCell>
                              <TableCell sx={tableContentStyle}>
                                 {new Date(his.checkOut).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true })}
                              </TableCell>
                              <TableCell sx={tableContentStyle}>{new Date(his.checkOut).toLocaleDateString('en-GB')}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
               <Box sx={{ display: "flex", justifyContent: "center", marginTop:'20px' }}>
                  <CustomPagination count={totalPage} page={page} handleChange={handlePageChange} />
               </Box>
            </Box>
            :
            <Typography sx={{fontWeight:'600', color:'gray'}}>
               No Parking history
            </Typography>
         }
      </Box>
   )
}

export default HistoryTable
