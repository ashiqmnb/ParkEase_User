import { Box, Typography } from "@mui/material";

const RecentlyAdded = () => {

   const companies = [
      {
         name: "Tech Solutions Ltd.",
         profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s",
         address: "123 Silicon Valley, California, USA",
         twoWheeler: 10,
         fourWheeler: 15
      },
      {
         name: "AutoMobiles Pvt. Ltd.",
         profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9UCBtO1xeRnNJ6hhcIE0dXGEszNg_vDwQQ&s",
         address: "456 Motor Street, Detroit, USA",
         twoWheeler: 18,
         fourWheeler: 24
      },
      {
         name: "Green Energy Corp.",
         profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n4ODoAIA--3sUNXFOtz78IfoaPwViociyQ&s",
         address: "789 Eco Park, Berlin, Germany, Park, Berlin, Germany  ",
         twoWheeler: 13,
         fourWheeler: 15
      },
      {
         name: "FinTech Innovations",
         profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSRnG5m_IBpTFEbjNSWtliwwKkne4QRL78g&s",
         address: "101 Finance Avenue, London, UK",
         twoWheeler: 18,
         fourWheeler: 15
      }
  ];

   return (
      <Box
         sx={{
            width:'100%',
            height:'auto',
            paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "120px" },
            paddingY:'40px'
         }}
         >
         <Typography
            sx={{
               fontFamily:'Lib',
               fontSize:"clamp(18px, 3vw, 28px)",
               fontWeight:'600'
            }}
            >
            Recently Added Slots
         </Typography>
         <Box
            sx={{
               display:'flex',
               justifyContent:'space-between',
               flexWrap:"wrap",
               gap:2,
               marginY:'10px'
            }}
            >
            {companies.map((company, index)=>(
               <Box
                  key={index}
                  sx={{
                     width: { xs: "45%", md: "20%" },
                     flexGrow: 1,
                     backgroundColor:'#ECFBF5',
                     padding:'10px',
                     borderRadius:'10px',
                     boxSizing: "border-box",
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                     transition: "all 0.3s ease-in-out",
                     "&:hover": {
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                        transform: "scale(1.02)",
                     },
                  }}
               >
                  <Typography sx={{ fontFamily:'Lib', fontSize:"16px" }}>
                     {company.name}
                  </Typography>
                  <Box
                     component='img'
                     src={company.profileUrl}
                     sx={{
                        width:'100%',
                        height:'auto',
                        borderRadius:'10px'
                     }}
                     />
                  <Box
                     sx={{
                        height:'auto',
                        backgroundColor:'white',
                        borderRadius:'10px',
                        padding:'10px'
                     }}
                     >
                     {company.address}
                  </Box>
                  <Box
                     sx={{
                        height:'auto',
                        display:'flex',
                        gap:1,
                        marginTop:'5px'
                     }}
                     >
                        <Typography
                           sx={{
                              backgroundColor:'white',
                              padding:'10px',
                              borderRadius:'10px',
                              flex:1
                           }}
                           >
                           {company.twoWheeler} (2W)
                        </Typography>
                        <Typography
                           sx={{
                              backgroundColor:'white',
                              padding:'10px',
                              borderRadius:'10px',
                              flex:1
                           }}
                           >
                           {company.fourWheeler} (4W)
                        </Typography>
                  </Box>
               </Box>
            ))}
         </Box>
      </Box>
   )
};

export default RecentlyAdded;
