import {Container, Grid, Typography} from "@mui/material";
import Formulario from "./components/Formulario.jsx";
import {NoticiasProvider} from "./context/NoticiasProvider.jsx";
import ListadoNoticias from "./components/ListadoNoticias.jsx";
function App() {

  return (
      <NoticiasProvider>
        <Container>
            <header>
                <Typography align={"center"} marginY={5} component="h1" variant={"h3"}>
                   Buscador de Noticias
                </Typography>
            </header>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid item xd={12} md={6} lg={4}>
                    <Formulario/>
                </Grid>
            </Grid>
            <ListadoNoticias/>
        </Container>
      </NoticiasProvider>
  )
}

export default App
