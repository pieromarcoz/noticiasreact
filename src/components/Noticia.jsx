import {Card, CardActions, CardContent, CardMedia, Grid, Link, Typography} from "@mui/material";
const Noticia = ({noticia}) => {
    const { urlToImage, url, title, description, source } = noticia
    const {name} = source
    return (
        <Grid
            item lg={4} md={6} sm={12}
        >
            <Card>
                {urlToImage &&(
                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={'250'}
                    />
                )}
                <CardContent>
                    <Typography variant='body1' color={'error'}>
                        {name}
                    </Typography>
                    <Typography variant='h5' component={'div'}>
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        target={'_blank'}
                        href={url}
                        variant={'button'}
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none',
                        }}
                    >Leer Noticia</Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Noticia;