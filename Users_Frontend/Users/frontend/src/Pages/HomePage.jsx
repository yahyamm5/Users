import {Box, Button, Typography} from '@mui/material'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box sx={{flexGrow: 1, mr: -1}} >
        <Typography position='static' sx={{marginTop:15, color:"#333", fontSize:40, fontFamily:"serif"}} >Create user</Typography>
        <Button href='http://localhost:5173/SignUp' sx={{bgcolor:"#333", color:"white", marginTop:2}} >click</Button>
        
      </Box>
    </div>
  )
}

export default HomePage
