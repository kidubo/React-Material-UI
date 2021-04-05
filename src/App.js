import React from 'react';
import { Typography, AppBar,Button, Card, CardActions,CardMedia, CssBaseline, Grid, Toolbar, Container, CardContent } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style'


const App = () => {

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                  <Container maxWidth="sm">
                        <Typography variant = "h2" align="center" color = "textPrimary" gutterBottom >
                            Photo Album
                        </Typography>
                        <Typography variant = "h5" align="center" color = "textSecondary" paragraph >
                            Hellow every one these is Maximilian Album and i am trying to make this text long as possible throw the screen,
                            As long as it can be so everyone see this is very very long text with nothing else but nonesense
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color = "primary">
                                         See my photos
                                    </Button>
                                </Grid>

                                <Grid item>
                                <Button variant="outlined" color = "primary">
                                     Secondary action
                                </Button>
                                </Grid>
                            </Grid>

                        </div>
                  </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth= "md">
                    <Grid container spacing= {4} >
                        <Grid items>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia} 
                                    image="https://source.unsplash.com/random"
                                    title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                     <Typography variant= "h5" gutterBottom>
                                       Heading
                                     </Typography>
                                     <Typography variant= "h5" gutterBottom>
                                        This is the media card you can use this section to describe the contents..
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"> View </Button>
                                    <Button size="small" color="primary"> Edit </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default App;