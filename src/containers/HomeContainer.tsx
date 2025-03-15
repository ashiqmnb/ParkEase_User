import { Box } from "@mui/material"
import HomeBanner from "../components/home/HomeBanner"
import RecentlyAdded from "../components/home/RecentlyAdded"
import AddYourBss from "../components/home/AddYourBss"


const HomeContainer = () => {
  return (
    <Box>
      <HomeBanner/>
      <RecentlyAdded/>
      <AddYourBss/>
    </Box>
  )
}

export default HomeContainer
