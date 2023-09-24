import {Grid, Pagination, Stack, Typography} from "@mui/material";
import useNoticias from "../hooks/useNoticias.jsx";
import Noticia from "./Noticia.jsx";
const ListadoNoticias = () => {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20)
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={'h3'}
                component={'h2'}
            >
                Últimas Noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'} sx={{ marginY: 5}}>
                <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina}/>
            </Stack>
        </>
    );
};

export default ListadoNoticias;