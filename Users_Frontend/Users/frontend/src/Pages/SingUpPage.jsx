import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { UserAuthStore } from "../API/UsersConfig";
import NavBar from "../components/NavBar";

const SingUpPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setAlert] = useState(false);
    const { singnup } = UserAuthStore();

    const handleSingUp = async (e) => {
        e.preventDefault()
        try {
            await singnup(username, email, password);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSuccess = () => {
      setAlert(!showAlert);
    }


  return (
    <div>
      <NavBar></NavBar>
      <Box position="static" sx={{marginLeft:80}} >
        <Typography position="static" sx={{marginLeft:15, marginTop:15, color:"#333"}} >Create User</Typography>
        <form onSubmit={handleSingUp}>
            <Box sx={{margin:2, marginLeft:15}}>
                <TextField sx={{width:"250px"}}
                 id="outlined-basic1"
                 label="Username"
                 variant="outlined"
                 type="text"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}

                />
            </Box>
            <Box sx={{margin:2, marginLeft:15}}>
                <TextField sx={{width:"250px"}}
                 id="outlined-basic2"
                 label="Email"
                 variant="outlined"
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}

                />
            </Box>
            <Box sx={{margin:2, marginLeft:15}}>
                <TextField sx={{width:"250px"}}
                 id="outlined-basic3"
                 label="Password"
                 variant="outlined"
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}

                />
            </Box>
            <Button sx={{bgcolor:"#333", color:"white", marginTop:4, marginLeft:24, width:"100px"}}
            type="submit" onClick={handleSuccess}>
                create
             </Button>{showAlert && (<Alert sx={{marginTop: 5, width:300, marginLeft:10}} severity="success" >new user created successfully </Alert>)}
        </form>
      </Box>
    </div>
  )
}

export default SingUpPage
