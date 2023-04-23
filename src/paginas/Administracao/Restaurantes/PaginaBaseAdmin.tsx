import { Button, Typography, Box, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"
import { Outlet, Link as RouterLink } from "react-router-dom"

const PaginaBaseAdmin = () => {

  return (
    <>
      <AppBar position="static">
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h6' sx={{flexGrow: 1}}>
              Administração
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Link component={RouterLink} to={"/admin/restaurantes"}>
                <Button sx={{ my: 2, color: 'white' }}>Restaurante</Button>
              </Link>
            </Box>
            <Box sx={{ display: 'flex'}}>
              <Link component={RouterLink} to={"/admin/restaurantes/novo"}>
                <Button sx={{ my: 2, color: 'white' }}>Novo Restaurante</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            {/* Aqui irá o conteúdo */}
            <Outlet/>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default PaginaBaseAdmin;