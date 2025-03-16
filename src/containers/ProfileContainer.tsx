import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const ProfileContainer = () => {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/auth/login')
    }


  return (
    <Box>
      <Typography>
        ProfileContainer
      </Typography>
      <Button onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  )
}

export default ProfileContainer
