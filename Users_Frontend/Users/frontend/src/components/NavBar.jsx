import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const NavBar = () => {

  return (
    <AppBar position="static" sx={{marginLeft:-1, marginTop:-1, width: 1920}}>
        <Container maxWidth="x1" >
            <Toolbar disableGutters >
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="http://localhost:5173/Homepage"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
            }}
                >
                    USER
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar
